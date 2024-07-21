import { auth } from '@clerk/nextjs/server'
import Post from './Post'
import prisma from '@/lib/client';

const Feed = async ({ username }: {username?: string}) => {
  const {userId} = auth();

  let posts:any = [];

  if(username){
    posts = await prisma.post.findMany({
      where:{
        user:{
          username
        }
      },
      include:{
        user:true,
        likes:{
          select:{
            userId:true
          }
        },
        _count: {
          select: {
            comments: true
          }
        }
      },
      orderBy: {
        createdAt: "desc"
      }
    })
  }

  if(!username && userId){
    const following = await prisma.follower.findMany({
      where: {
        followerId: userId,
      },
      select: {
        followingId: true
      }
    })

    const followingIds = following.map(f=>f.followingId);

    posts = prisma.post.findMany({
      where: {
        userId: {
          in: followingIds
        }
      },
      include:{
        user:true,
        likes:{
          select:{
            userId:true
          }
        },
        _count: {
          select: {
            comments: true
          }
        }
      },
      orderBy: {
        createdAt: "desc"
      }
    })
  }

  return (
    <div className='p-4 bg-white shadow-md rounded-lg flex flex-col gap-2' >
      {posts.length ? (posts.map((post:any) => (
        <Post key={post.id} post = {post} />
      )) ) : "No posts found!"}
    </div>
  )
}

export default Feed
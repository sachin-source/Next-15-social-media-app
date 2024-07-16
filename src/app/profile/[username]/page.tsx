import Feed from '@/components/Feed'
import LeftMenu from '@/components/LeftMenu'
import RightMenu from '@/components/RightMenu'
import prisma from '@/lib/client'
import { auth } from '@clerk/nextjs/server'
import Image from 'next/image'
import { notFound } from 'next/navigation'

const ProfilePage = async ({params}:{params:{username:string}}) => {
  const username = params.username;

  const user = await prisma.user.findFirst({
    where: {
      username
    },
    include: {
      _count: {
        select: {
          followers: true,
          followings: true,
          posts: true
        }
      }
    }
  })

  if(!user) return notFound();

  const { userId: currentUserId } = auth();

  let isBlocked;

  if(currentUserId){
    await prisma.block.findFirst({
      where: {
        blockerId: user.id,
        blockedId: currentUserId,
      }
    })
  }

  return (
    <div className='flex gap-6 pt-6 xl:flex'>
      {/* Left */}
      <div className="hidden xl:block w-[20%]"> <LeftMenu type='profile' /> </div>
      {/* Center */}
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-64 relative">
              <Image src='https://images.pexels.com/photos/570026/pexels-photo-570026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' fill className='object-cover rounded-md ' />
              <Image src='https://images.pexels.com/photos/2730218/pexels-photo-2730218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' width={128} height={128} className=' w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white object-cover' />
            </div>
            <h1 className='mt-20 mb-4 text-2xl font-medium' >Elva Weaver</h1>
            <div className="flex items-center justify-center gap-12 mb-4">
              <div className="flex flex-col items-center">
                <span className="font-medium">123</span>
                <span className="text-sm">Posts</span>
              </div>

              <div className="flex flex-col items-center">
                <span className="font-medium">1.2K</span>
                <span className="text-sm">Followers</span>
              </div>

              <div className="flex flex-col items-center">
                <span className="font-medium">13K</span>
                <span className="text-sm">Following</span>
              </div>
            </div>
          </div>
          <Feed />
        </div>
      </div>
      {/* Right */}
      <div className="hidden lg:block w-[30%]"> <RightMenu userId='test' /> </div>
    </div>
  )
}

export default ProfilePage
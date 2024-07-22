import Image from 'next/image'
import React from 'react'
import Comments from './Comments'
import { Post as PostType, User } from '@prisma/client'
import PostInteraction from './PostInteraction'

type FeedPostType = PostType & {user:User} & {likes:[{userId:string}]} & {_count:{comments:number}}

const Post = ({post}:{post: FeedPostType}) => {
  return (
    <div className='flex flex-col gap-4' >
        {/* USER */}
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Image src={post.user.avatar || "/noAvatar.png"} width={40} height={40} alt='' className='w-10 h-10 rounded-full' />
                <span className="font-medium"> { (post.user.name && post.user.surname) ? post.user.name + " " + post.user.surname : post.user.username } </span>
            </div>
            <Image src="/more.png" width={16} height={16} alt='' />
        </div>
        {/* DESC */}
        <div className="flex flex-col gap-4">
            <div className="w-full min-h-96 relative">
                {post.img && (
                                    <Image src={post.img} fill className='object-cover rounded-md' alt='' />
                )}
            </div>
            <p>{post.desc}</p>
        </div>
        {/* INTERACTION */}
        <PostInteraction postId={post.id} likes={post.likes.map(like => like.userId)} commentNumber={post._count.comments} />
        <Comments postId={post.id} />
    </div>
  )
}

export default Post
"use client"

import { addComment } from "@/lib/actions";
import { useUser } from "@clerk/nextjs";
import { Comment, User } from "@prisma/client"
import Image from "next/image"
import { useOptimistic, useState } from "react";

type CommentWithUser = Comment & { user: User };

const CommentList = ({comments, postId}: {comments:CommentWithUser[], postId:any}) => {

    const { user } = useUser();
    const [commentState, setCommentState] = useState(comments);
    const [desc, setDesc] = useState("");
    const [optimisticComment, addOptimisticComment] = useOptimistic(
        commentState,
        (state, value:CommentWithUser) => [value, ...state]
    )

    const add = async () => {
        if(!user || !desc) return;
        addOptimisticComment({
            id: Math.random(),
            desc,
            createdAt: new Date(Date.now()),
            updatedAt: new Date(Date.now()),
            userId: user.id,
            postId,
            user: {
                id: user.id,
                username: "Sending, Please wait...",
                avatar: user.imageUrl,
                name:"",
                surname: "",
                city:"",
                work:"",
                school:"",
                website:"",
                createdAt: new Date(Date.now()),
                cover:"",
                description:""
            }
        });

        try {
            const createdComment = await addComment(postId, desc);
            setCommentState(prev => [createdComment, ...prev]);
            
        } catch (error) {
            
        }
    }

  return (
    <>
    { user && (
        <div className="flex items-center gap-4">
        <Image src={user.imageUrl || "noAvatar.png"} alt='' className='w-8 h-8 rounded-full' height={32} width={32} />

        <form action={add} className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
            <input type="text" onChange={(e) => setDesc(e.target.value)} placeholder='Write a comment...' className='bg-transparent outline-none flex-1' />
            <Image src="/emoji.png" width={16} height={16} className='cursor-pointer' alt='' />
        </form>

    </div>
    )}
        {/* COMMENTS */}
        <div className="">
            {/* COMMENT */}
            {optimisticComment.map(comment => (
             <div className="flex gap-4 justify-between mt-6" key={comment.id} >
                {/* AVATAR */}
                <Image alt='' className='w-10 h-10 rounded-full' height={40} width={40} src={comment.user.avatar || "noAvatar.png" } />
                {/* DESC */}
                <div className="flex flex-col gap-2 flex-1" >
                    <span className='font-medium' > {(comment.user.name && comment.user.surname) ? comment.user.name + " " + comment.user.surname : comment.user.username} </span>
                    <p>{comment.desc}</p>
                    <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
                        <div className="flex items-center gap-4">
                        <Image src='/like.png' alt='' className='cursor-pointer w-4 h-4' height={12} width={12} />
                        <span className='text-gray-300' >|</span>
                        <span className='text-gray-500'>0 Likes</span>
                        </div>
                        <div className="">Reply</div>
                    </div>
                </div>
                {/* ICON */}
                <Image src='/more.png' alt='' width={16} height={16} className="cursor-pointer w-4 h-4" />
            </div> ))}
        </div>
    </>
  )
}

export default CommentList
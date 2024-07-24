"use client"

import { useUser } from "@clerk/nextjs";
import { Story, User } from "@prisma/client";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useOptimistic, useState } from "react";

type StoryWithUser = Story & { user: User };

const StoryList = ({ stories}: { stories: StoryWithUser[] }) => {
    const [StoryList, setStoryList] = useState(stories);
    const [img, setImg] = useState<any>();

    const { user } = useUser();
    const [ optimisticStories, addOptimisticStory ] = useOptimistic(StoryList, (state:any, value:StoryWithUser) => [value, ...state]);
    return (
        <div className="">
            <CldUploadWidget uploadPreset="social" onSuccess={(result, {widget}) => { setImg(result.info); widget.close() }}>
            {({ open }) => {
              return (
                <div onClick={() => open()} className="flex flex-col items-center gap-2 cursor-pointer relative">
                <Image src={user?.imageUrl || "noAvatar.png"} alt='' width={80} height={80} className='w-20 h-20 rounded-full ring-2' />
                <span className="font-medium">Add a Story</span>
                <div className="absolute text-6xl text-gray-200 top-1" >+</div>
            </div>
              )
            }}
          </CldUploadWidget>
            {/* STORIES */}
            {optimisticStories.map((story) => (
                <div key={story.id} className="flex flex-col items-center gap-2 cursor-pointer">
                <Image src={story.user.avatar || "noAvatar.png"} alt='' width={80} height={80} className='w-20 h-20 rounded-full ring-2' />
                <span className="font-medium">{ story.user.name || story.user.username }</span>
            </div>
            ))}
        </div>
    )
}

export default StoryList
"use client"

import { addStory } from "@/lib/actions";
import { useUser } from "@clerk/nextjs";
import { Story, User } from "@prisma/client";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useOptimistic, useState } from "react";

type StoryWithUser = Story & { user: User };

const StoryList = ({ stories, userId}: { stories: StoryWithUser[], userId: string }) => {
    const [StoryList, setStoryList] = useState(stories);
    const [img, setImg] = useState<any>();

    const { user, isLoaded } = useUser();
    const [ optimisticStories, addOptimisticStory ] = useOptimistic(StoryList, (state:any, value:StoryWithUser) => [value, ...state]);

    if(!user && !isLoaded) return "Loading...";

    const add = async () => {
      if(!img?.secure_url) return;
      addOptimisticStory({
        id: Math.random(),
        img:img.secure_url,
        createdAt: new Date(Date.now()),
        expiresAt: new Date(Date.now()),
        userId: userId,
        user: {
            id: userId,
            username: "Sending...",
            avatar: user?.imageUrl || "/noAvatar.png",
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
        const createdStory = await addStory(img.secure_url);
        setStoryList(prev => [createdStory!, ...prev])
        setImg(null);
      } catch (error) {
        
      }
    }
    return (
        <>
            <CldUploadWidget uploadPreset="social" onSuccess={(result, {widget}) => { setImg(result.info); widget.close() }}>
            {({ open }) => {
              return (
                <div className="flex flex-col items-center gap-2 cursor-pointer relative">
                <Image onClick={() => open()} src={user?.imageUrl || "/noAvatar.png"} alt='' width={80} height={80} className='w-20 h-20 rounded-full ring-2 object-cover' />
                {
                  img ? (
                    <form action={add}>
                      <button className="text-xs bg-blue-500 p-1 rounded-md text-white">Send</button>
                    </form>
                  ) : (
                    <span className="font-medium">Add a Story</span>
                  )
                }
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
        </>
    )
}

export default StoryList
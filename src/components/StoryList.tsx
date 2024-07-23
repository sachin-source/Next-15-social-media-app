"use client"

import { useUser } from "@clerk/nextjs";
import { Story, User } from "@prisma/client";
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
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <Image src="https://images.pexels.com/photos/7615526/pexels-photo-7615526.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' width={80} height={80} className='w-20 h-20 rounded-full ring-2' />
                <span className="font-medium">Sachin</span>
            </div>
        </div>
    )
}

export default StoryList
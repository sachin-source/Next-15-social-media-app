"use client"

import { switchBlock, switchFollow } from "@/lib/actions";
import { useOptimistic, useState } from "react";

const UserInfoCardInteraction = ({ userId, currentUserId, isUserBlocked, isFollowing, isFollowingSent } : { userId : string; currentUserId : string; isUserBlocked: boolean; isFollowing: boolean; isFollowingSent: boolean }) => {
  const [userState, setUserState] = useState({
    following: isFollowing,
    blocked: isUserBlocked,
    followingRequestSent: isFollowingSent
  })

  const follow = async () => {
    try {
      switchOptimisticState("follow");
      await switchFollow(userId);
      setUserState((prev) => ({
        ...prev,
        following: prev.following && false,
        followingRequestSent: !prev.following && !prev.followingRequestSent ? true : false
      }))
    } catch (error) {
      console.log(error)
    }
  }

  const block = async () => {
    switchOptimisticState("block");
    try {
      await switchBlock(userId);
      setUserState((prev) => ({
        ...prev, blocked : !prev.blocked
      }))
    } catch (error) {
      console.log(error)
    }
  }
  
  const [optimisticState, switchOptimisticState] = useOptimistic(userState, (prev, value:"follow" | "block") => ( value == "follow" ? {
    ...prev,
    following: prev.following && false,
    followingRequestSent: !prev.following && !prev.followingRequestSent ? true : false
} : { ...prev, blocked : !prev.blocked } ))

  return (
    <>
    <form action={follow} >
      <button className='w-full bg-blue-500 text-white text-sm rounded-md p-2' >{ optimisticState.following ? "Follow" : optimisticState.followingRequestSent ? "Friend Request Sent" : "Follow" }</button>
    </form>
    <form action={block} className="self-end" >
      <button>
      <span className='text-red-400 text-xs cursor-pointer' >{ optimisticState.blocked ? "Unblock User" : "Block User"}</span>
      </button>
    </form>
    </>
  )
}

export default UserInfoCardInteraction
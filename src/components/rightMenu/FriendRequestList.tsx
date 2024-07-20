"use client"

import Image from "next/image"

const FriendRequestList = ({requests}:{requests:any}) => {
  return (
    <div className="flex items-center justify-between">
    <div className="flex items-center gap-4">
      <Image src="https://images.pexels.com/photos/26595870/pexels-photo-26595870/free-photo-of-nara-park.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' width={40} height={40} className='w-10 h-10 rounded-full object-cover' />
      <span>Wayne Burton</span>
    </div>
    <div className="flex gap-3 justify-end">
      <Image src="/accept.png" alt='' width={20} height={20} className='cursor-pointer' />
      <Image src="/reject.png" alt='' width={20} height={20} className='cursor-pointer' />
    </div>
  </div>
  )
}

export default FriendRequestList
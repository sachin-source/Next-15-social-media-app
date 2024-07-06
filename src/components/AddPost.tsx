import Image from 'next/image'
import React from 'react'

const AddPost = () => {
  return (
    <div className='p-4 bg-white rounded-lg flex gap-4 justify-between text-sm' >
      {/* AVATAR */}
      <Image className="w-12 h-12 object-cover rounded-full" width={48} height={12} alt='' src="https://images.pexels.com/photos/979722/pexels-photo-979722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      {/* POST */}
      <div className="flex-1">
        {/* TEXT INPUT */}
        <div className="flex gap-4">
          <textarea placeholder='what is on your mind?' className='flex-1 p-2 bg-slate-100 rounded-lg' ></textarea>
          <Image className="w-5 h-5 cursor-pointer self-end" width={20} height={20} alt='' src="/emoji.png" />
        </div>
        {/* POST OPTIONS */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image className="" width={20} height={20} alt='' src="/addimage.png" />
            Photo
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image className="" width={20} height={20} alt='' src="/addVideo.png" />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image className="" width={20} height={20} alt='' src="/poll.png" />
            Poll
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image className="" width={20} height={20} alt='' src="/addevent.png" />
            Photo
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPost
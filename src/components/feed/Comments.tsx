import Image from 'next/image'
import React from 'react'

const Comments = () => {
  return (
    <div>
        {/* WRITE */}
        <div className="flex items-center gap-4">
            <Image src='https://images.pexels.com/photos/25975158/pexels-photo-25975158/free-photo-of-portrait-of-a-turtle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' className='w-8 h-8 rounded-full' height={32} width={32} />

            <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
                <input type="text" placeholder='Write a comment...' className='bg-transparent outline-none flex-1' />
                <Image src="/emoji.png" width={16} height={16} className='cursor-pointer' alt='' />
            </div>

        </div>
        {/* COMMENTS */}
        <div className="">
            {/* COMMENT */}
            <div className="flex gap-4 justify-between mt-6">
                {/* AVATAR */}
                <Image alt='' className='w-10 h-10 rounded-full' height={40} width={40} src='https://images.pexels.com/photos/25975158/pexels-photo-25975158/free-photo-of-portrait-of-a-turtle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                {/* DESC */}
                <div className="flex flex-col gap-2 flex-1" >
                    <span className='font-medium' > Bernice Spencer </span>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, molestias. Accusamus in vero, esse aut officia sint autem quisquam sapiente!</p>
                    <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
                        <div className="flex items-center gap-4">
                        <Image src='/like.png' alt='' className='cursor-pointer w-4 h-4' height={12} width={12} />
                        <span className='text-gray-300' >|</span>
                        <span className='text-gray-500'>123 Likes</span>
                        </div>
                        <div className="">Reply</div>
                    </div>
                </div>
                {/* ICON */}
                <Image src='/more.png' alt='' width={16} height={16} className="cursor-pointer w-4 h-4" />
            </div>
        </div>
    </div>
  )
}

export default Comments
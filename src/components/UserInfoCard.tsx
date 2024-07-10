import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const UserInfoCard = ({ userId } : {userId?: string}) => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4' >
        {/* TOP */}
        <div className="flex justify-between items-center font-medium">
          <span className='text-gray-500'>User Information</span>
          <Link href="/" className='text-blue-500 text-xs' >See all</Link>
        </div>
        {/* BOTTOM */}
        <div className="flex flex-col gap-4 text-gray-500">
            <div className="flex items-center gap-2">
                <span className='text-xl text-black' >Chem Stirar</span>
                <span className="text-sm">@chemstirar</span>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero dicta harum aliquid alias beatae amet facere ratione ullam illo labore.</p>
            <div className="flex items-center gap-2">
                <Image src="/map.png" alt='' width={16} height={16} />
                <span>Living in <b>asdf</b></span>
            </div>
            <div className="flex items-center gap-2">
                <Image src="/school.png" alt='' width={16} height={16} />
                <span>Went to <b>adsf High School</b></span>
            </div>
            <div className="flex items-center gap-2">
                <Image src="/work.png" alt='' width={16} height={16} />
                <span>Works at <b>Apple Inc.</b></span>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex gap-1 items-center">
                <Image src="/link.png" alt='' width={16} height={16} />
                <Link href="https://wetnset" className='text-blue-500 font-medium' >website</Link>
                </div>
                <div className="flex gap-1 items-center">
                <Image src="/date.png" alt='' width={16} height={16} />
                <span>Joined November 2024</span>
                </div>
            </div>
            <button className='bg-blue-500 text-white text-sm rounded-md p-2' >Follow</button>
            <span className='text-red-400 self-end text-xs cursor-pointer' >Block User</span>
        </div>
    </div>
  )
}

export default UserInfoCard
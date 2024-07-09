import Image from 'next/image'
import React from 'react'

const Ad = ({ size } : { size : "sm" | "md" | "lg" }) => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm' >
      {/* TOP */}
      <div className="flex items-center justify-between text-gray-500 font-medium">
        <span>Sponsored Ads</span>
        <Image src="/more.png" alt='' width={16} height={16} />
      </div>
      {/* BOTTOM */}
      <div className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}>
        <div className={`relative w-full ${size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"}`}>
          <Image alt='' src="https://images.pexels.com/photos/19020136/pexels-photo-19020136/free-photo-of-person-on-rocks-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" fill className='rounded-lg object-cover' />
        </div>
        <div className="flex items-center gap-4">
        <Image alt='' src="https://images.pexels.com/photos/19020136/pexels-photo-19020136/free-photo-of-person-on-rocks-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" width={24} height={24} className='rounded-full w-6 h-6 object-cover' />
        </div>
      </div>
    </div>
  )
}

export default Ad
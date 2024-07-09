import Image from 'next/image'
import React from 'react'

const Birthdays = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm' >
      <div className="flex justify-between items-center font-medium">
        <span className='text-gray-500'>Birthdays</span>
      </div>
      {/* USER */}
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
    </div>
  )
}

export default Birthdays
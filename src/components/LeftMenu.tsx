import React from 'react'
import ProfileCard from './ProfileCard'
import Link from 'next/link'
import Image from 'next/image'

const LeftMenu = ({type} : {type:"home" | "profile"}) => {
  return (
    <div className='flex flex-col gap-6' >
      { type === 'home' && <ProfileCard/> }
      <div className="p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2">
        <Link href="/" >
        <Image src="/posts.png" alt='' width={20} height={20} />
        <span>My Posts</span>
        </Link>
      </div>
    </div>
  )
}

export default LeftMenu
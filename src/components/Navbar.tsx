import Link from 'next/link'
import React from 'react'
import MobileMenu from './MobileMenu'
import Image from 'next/image'
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <div className='h-24 flex items-center justify-between'>
      {/* Left */}
      <div className="md:hidden lg:block w-[20%]">
        <Link href="/" className='font-bold text-xl text-blue-600' >KODI-SOCIAL</Link>
      </div>
      {/* Center */}
      <div className="hidden md:flex w-[50%] text-sm">
        {/* Links */}
        <div className="flex gap-6 text-gray-600">
          <Link href="/" className='flex items-center gap-2' >
          <Image src="/home.png" alt='Homepage' width={16} height={16} className='w-4 h-4' />
          <span>Homepage</span>
          </Link>
          <Link href="/" className='flex items-center gap-2' >
          <Image src="/friends.png" alt='Friends' width={16} height={16} className='w-4 h-4' />
          <span>Friends</span>
          </Link>
          <Link href="/" className='flex items-center gap-2' >
          <Image src="/stories.png" alt='Stories' width={16} height={16} className='w-4 h-4' />
          <span>Stories</span>
          </Link>
        </div>
      </div>
      {/* Right */}
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <ClerkLoading>
          <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-500 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"></div>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>Signed In</SignedIn>
          <SignedOut>Signed Out</SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  )
}

export default Navbar
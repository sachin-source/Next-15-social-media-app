"use client"
import { updateProfile } from '@/lib/actions';
import { User } from '@prisma/client';
import { CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useActionState, useState } from 'react';

const UpdateUser = ({ user } : {user: User}) => {

  const [open, setOpen] = useState(false);
  const [cover, setCover] = useState<any>();
  const [state, formAction] = useActionState(updateProfile, {success: false, error: false})

  const router = useRouter();

  const handleClose = () => {
    setOpen(false);
    state.success && router.refresh()
  }

  return (
    <div className='' >
      <span onClick={() => setOpen(true)} className='text-blue-500 text-xs cursor-pointer' >Update</span>
      {open && (
        <div className="absolute w-screen h-screen top-0 left-0 bg-black bg-opacity-65 flex items-center justify-center z-50">
        <form action={(formData) => formAction({formData, cover:cover?.secure_url || ""})} className='relative p-12 bg-white rounded-lg shadow-md flex flex-col gap-2 w-full md:w-1/2 xl:w-1/3' >
        {/* TITLE */}
        <h1>Update Profile</h1>
        <div className="mt-4 text-xs text-gray-500">Use the navbar profile to change the avatar or username</div>
        {/* COVER PICTURE UPLOAD */}

        <CldUploadWidget uploadPreset="social" onSuccess={(result) => setCover(result.info)}>
          {({ open }) => {
            return (
              <div className="flex flex-col gap-4 my-4" onClick={() => open()} >
          <label htmlFor="">Cover Picture</label>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src={user.cover || "/noCover.png"} alt='' width={48} height={32} className='w-12 h-8 rounded-md object-cover' />
            <span className='text-xs underline text-gray-600' >Change</span>
          </div>
        </div>
            )
          }}
        </CldUploadWidget>

        
        {/* WRAPPER */}
        <div className="flex flex-wrap justify-between gap-2 xl:gap-4">
        {/* INPUT */}
          <div className="flex flex-col gap-4">
            <label htmlFor="" className='text-xs text-gray-500' >First Name</label>
            <input type="text" name="name" placeholder={user.name || "Sachin" } className='ring-1 ring-gray-300 p-[13px] rounded-md text-sm' />
          </div>
       
        {/* INPUT */}
        <div className="flex flex-col gap-4">
            <label htmlFor="" className='text-xs text-gray-500' >Surname</label>
            <input type="text" name="surname" placeholder={user.surname || "Souhardh" } className='ring-1 ring-gray-300 p-[13px] rounded-md text-sm' />
          </div>

        {/* INPUT */}
        <div className="flex flex-col gap-4">
            <label htmlFor="" className='text-xs text-gray-500' >Description</label>
            <input type="text" name="description" placeholder={user.description || "Life is beutiful..." } className='ring-1 ring-gray-300 p-[13px] rounded-md text-sm' />
          </div>
        {/* INPUT */}
        <div className="flex flex-col gap-4">
            <label htmlFor="" className='text-xs text-gray-500' >City</label>
            <input type="text" name="city" placeholder={user.city || "New York" } className='ring-1 ring-gray-300 p-[13px] rounded-md text-sm' />
          </div>

        {/* INPUT */}
        <div className="flex flex-col gap-4">
            <label htmlFor="" className='text-xs text-gray-500' >School</label>
            <input type="text" name="school" placeholder={user.school || "MIT" } className='ring-1 ring-gray-300 p-[13px] rounded-md text-sm' />
          </div>
        {/* INPUT */}
        <div className="flex flex-col gap-4">
            <label htmlFor="" className='text-xs text-gray-500' >Work</label>
            <input type="text" name="work" placeholder={user.work || "Apple Inc." } className='ring-1 ring-gray-300 p-[13px] rounded-md text-sm' />
          </div>
        {/* INPUT */}
        <div className="flex flex-col gap-4">
            <label htmlFor="" className='text-xs text-gray-500' >Website</label>
            <input type="text" name="website" placeholder={user.website || "" } className='ring-1 ring-gray-300 p-[13px] rounded-md text-sm' />
          </div>
          </div>
        <button className='bg-blue-500 p-2 mt-2 rounded-md text-white' >Update</button>
        {state.success && <span className='text-green-500' >Profile has been updated!</span> }
        {state.error && <span className='text-red-500' >Something went wrong!</span> }
        <div className="absolute text-xl right-2 top-3 cursor-pointer" onClick={handleClose} >X</div>
        </form>
      </div>
      )}
    </div>
  )
}

export default UpdateUser
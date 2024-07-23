"use client"
import { useUser } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import { CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image'
import { useState } from 'react';
import AddPostButton from './AddPostButton';
import { addPost } from '@/lib/actions';

const AddPost = () => {

  const { user, isLoaded } = useUser();
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState<any>();

  if (!isLoaded) return "Loading..."

  // const testAction = async (formData:FormData) => {
  //   "use server"
  //   if(!userId) return;
  //   const desc = formData.get('desc') as string;
  //   try {
  //     const res = await prisma.post.create({
  //       data: {
  //         desc,
  //         userId
  //       }
  //     });
  //     console.log(res)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <div className='p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm' >
      {/* AVATAR */}
      <Image className="w-12 h-12 object-cover rounded-full" width={48} height={12} alt='' src={user?.imageUrl || "noAvatar.png"} />
      {/* POST */}
      <div className="flex-1">
        {/* TEXT INPUT */}
        <form action={(formData) => addPost(formData, img?.secure_url || "")} className="flex gap-4">
          <textarea placeholder='what is on your mind?' onChange={(e) => setDesc(e.target.value)} className='flex-1 p-2 bg-slate-100 rounded-lg' name='desc' ></textarea>
          <div className="">
          <Image className="w-5 h-5 cursor-pointer self-end" width={20} height={20} alt='' src="/emoji.png" />
          <AddPostButton />
          </div>
        </form>
        {/* POST OPTIONS */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <CldUploadWidget uploadPreset="social" onSuccess={(result, {widget}) => { setImg(result.info); widget.close() }}>
            {({ open }) => {
              return (
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => open()} >
                  <Image className="" width={20} height={20} alt='' src="/addimage.png" />
                  Photo
                </div>
              )
            }}
          </CldUploadWidget>


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
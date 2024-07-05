import AddPost from "@/components/AddPost"
import Feed from "@/components/Feed"
import LeftMenu from "@/components/LeftMenu"
import RightMenu from "@/components/RightMenu"
import Stories from "@/components/Stories"

const Homepage = () => {
  return (
    <div className='flex gap-6 xl:block'>
      {/* Left */}
      <div className="hidden xl:block w-[20%]"> <LeftMenu/> </div>
      {/* Center */}
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="">
          <Stories/>
          <AddPost/>
          <Feed/>
        </div>
      </div>
      {/* Right */}
      <div className="hidden lg:block w-[30%]"> <RightMenu/> </div>
    </div>
  )
}

export default Homepage
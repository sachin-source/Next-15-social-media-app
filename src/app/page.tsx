import LeftMenu from "@/components/LeftMenu"

const Homepage = () => {
  return (
    <div className='flex gap-6 xl:block'>
      {/* Left */}
      <div className="hidden xl:block w-[20%]"> <LeftMenu/> </div>
      {/* Center */}
      <div className="w-full lg:w-[70%] xl:w-[50%]"></div>
      {/* Right */}
      <div className="hidden lg:block w-[30%]"></div>
    </div>
  )
}

export default Homepage
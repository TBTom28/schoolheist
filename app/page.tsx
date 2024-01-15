
import Navbar from "@/app/components/navbar"
export default function Home() {
  return (
    <main>
      <div className="flex flex-row select-none">
        <div className="w-full h-screen flex flex-row items-center z-0">
          <div className="pl-[6rem] w-[600px] space-y-6">
            <h1 className="font-Montserrat font-bold text-7xl ">
              Drive fast,
              Arrive in style.
            </h1>
            <p className="font-extralight   text-3xl">
              Explore a world of amazing luxury at our showroom, the ultimate place for fancy and fast cars. We don't stick to the usual and bring you a collection of the most special cars from around the world, all in one place.
            </p>
          </div>

        </div>
        <Navbar />
        <div className="w-24 bg-black">navbar-fill</div>
        
      </div>
      <div className="flex flex-row ">
        <div className="grid grid-cols-2 grid-rows-2 justify-center items-center w-full h-screen text-white">
          <div className="bg-black h-full relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">55</div>
          </div>
          <div className="bg-red-700 h-full relative ">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">55</div>
          </div>
          <div className="bg-red-700 h-full relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">55</div>
          </div>
          <div className="bg-black h-full relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">55</div>
          </div>
        </div>
        <div className="w-24 bg-black">navbar-fill</div>
      </div>
      <div className="flex flex-row ">u
        <div className="grid grid-cols-2 grid-rows-2 justify-center items-center w-full h-screen text-white">
          <div className="bg-black h-full relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">55</div>
          </div>
          <div className="bg-red-700 h-full relative ">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">55</div>
          </div>
          <div className="bg-red-700 h-full relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">55</div>
          </div>
          <div className="bg-black h-full relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">55</div>
          </div>
        </div>
        <div className="w-24 bg-black">navbar-fill</div>
      </div>



    </main>
  )
}

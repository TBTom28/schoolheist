export default function Navbar() {
    return (
        <nav >

<div className="bg-black h-screen flex flex-col w-24 items-center right-0 text-white  fixed z-20">
               
                <div className=" my-auto ">
                    <ul className="list-none space-y-10 text-md relative ">
                        <li className="infoHover  ">
                            <a href="" className="hover:text-gray-400">1</a>
                            <div className=" absolute bottom-[180px] hidden  bg-black ">
                                <div className="bg-black">   <h1 className="p-3 font-thin">MAIN</h1></div>

                            </div>
                        </li>
                        <li className="infoHover1 ">
                            <a href="" className="hover:text-gray-400  ">2</a>
                            <div className=" absolute bottom-[117px] hidden   ">
                                <div className="bg-black">
                                    <h1 className="p-3 font-thin">PARTNERS</h1>
                                </div>

                            </div></li>
                            <li className="infoHover2">
                            <a href="" className="hover:text-gray-400">3</a>
                            <div className=" absolute bottom-[54px] hidden   ">
                                <div className="bg-black">
                                    <h1 className="p-3 font-thin">CARS</h1>
                                </div>

                            </div></li>
                            <li className="infoHover3">
                            <a href="" className="hover:text-gray-400">4</a>
                            <div className=" absolute bottom-[-12px] hidden   ">
                                <div className="bg-black">
                                    <h1 className="p-3 font-thin">ABOUT</h1>
                                </div>

                            </div></li>
                    </ul>
                </div>
                
            </div>
        </nav>
    )
}
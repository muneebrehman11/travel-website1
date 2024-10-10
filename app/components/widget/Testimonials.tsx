import Image from "next/image";

import logo1 from "@/app/assets/logo-alitalia.png"
import logo2 from "@/app/assets/logo-avon.png"
import logo3 from "@/app/assets/logo-expedia.png"
import logo4 from "@/app/assets/logo-jetstar.png"
import logo5 from "@/app/assets/logo-qantas.png"
import icon from "@/app/assets/send-now.png"
import Plusimg from "@/app/assets/plus-graphics.svg"
import LeftRectangle from "@/app/assets/left-Rectangle 33.png"
import RightRectangle from "@/app/assets/right-Rectangle 32.png"

function Testimonials() {
    return (
        <section className="mt-28">
            {/* left */}
            <div>
                <h4 className="text-lg font-semibold text-gray-700">TESTIMONIALS</h4>
                <h2 className="text-4xl font-medium mt-3 text-blue-950">What people say <br /> about Us.</h2>
            </div>

            {/* right */}
            <div>
            </div>

            {/* clients */}
            <div className="flex justify-between mt-28 mb-10">
                <Image className="rounded-xl hover:shadow-xl hover:translate-y-2 duration-500 opacity-30 hover:opacity-100 p-1" src={logo1} alt={"logo-alitalia"} />
                <Image className="rounded-xl hover:shadow-xl hover:translate-y-2 duration-500 opacity-30 hover:opacity-100 p-1" src={logo2} alt={"logo-avon"} />
                <Image className="rounded-xl hover:shadow-xl hover:translate-y-2 duration-500 opacity-30 hover:opacity-100 p-1" src={logo3} alt={"logo-expedia"} />
                <Image className="rounded-xl hover:shadow-xl hover:translate-y-2 duration-500 opacity-30 hover:opacity-100 p-1" src={logo4} alt={"logo-jetstar"} />
                <Image className="rounded-xl hover:shadow-xl hover:translate-y-2 duration-500 opacity-30 hover:opacity-100 p-1" src={logo5} alt={"logo-qantas"} />
            </div>
            <div className="rounded-t-2xl bg-purple-100 h-[380px] relative mt-24 shadow-purple-300 shadow-xl">
                <div className="absolute right-0 ">
                    <Image className="w-[341px] h-[300px]" src={RightRectangle} alt="right rectangle" />
                </div>
                <div className="absolute -left-28 bottom-0">
                    <Image className="w-[450px] h-[330px]" src={LeftRectangle} alt="right rectangle" />
                </div>
                <div className="absolute -right-12 -top-10 ">
                    <Image src={icon} alt={"send-now"}/>
                </div>
                <div className="text-center ">
                    <div>
                        <h3 className="text-4xl font-medium relative top-12 text-blue-950 ">Subscribe to get information, latest news and other <br />
                            interesting offers about cobham.</h3>
                    </div>
                </div>
                <div className="space-x-5 absolute bottom-16 left-12">
                    <div className="relative gap-x-5">
                        {/* <div className="absolute inset-0 items-center flex left-3">
                            <Image src={EmailImage} alt="email-icon" className="w-6 h-6"/>
                        </div> */}
                        <div className="space-x-3">
                        <input className="rounded-lg text-xl font-medium p-3 px-16 text-slate-800 " type="email" placeholder="Your email" />
                        <button className="text-white bg-orange-500 opacity-450 rounded-lg text-lg font-medium p-3 px-7 hover:bg-orange-600 duration-300" >Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="absolute -right-24  -bottom-16">
                    <Image src={Plusimg} alt={"plus-graphics"} />
                </div>
                
            </div>

        </section >
    )
}
export default Testimonials;
import Image from "next/image"
import rectangle1 from "@/app/assets/Rectangle 6 (1).png"
import rectangle2 from "@/app/assets/Rectangle 6 (2).png"
import rectangle3 from "@/app/assets/Rectangle 6 (3).png"
import arrow from "@/app/assets/arrow.svg"
function TopSelling() {
    return (
        <section className="mt-20">
            <div className="text-center" >
                <h3 className="text-lg font-semibold text-slate-600">Top Selling</h3>
                <h1 className="text-5xl text-blue-950 font-bold font-serif">Top Destinations</h1>
            </div>
            <div className="flex gap-14 justify-center mt-14 text-slate-600">
                <div className="shadow-2xl  rounded-b-3xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#089bc1] focus:shadow-green-500 duration-500 cursor-pointer">
                    <Image className="w-[400px] h-[330px] rounded-t-3xl" src={rectangle1} alt={"fire ballons"} />
                    <div className="flex  py-6 justify-between px-3 ">
                        <div>
                            <h4 className="font-semibold text-lg">Rome, Italy</h4>
                            <div className="flex gap-2">
                            <Image src={arrow} alt="alt"/>
                            <p className="font-medium">10 Days Trip</p>
                            </div>

                        </div>
                        <div>
                            <p className="font-semibold text-lg">$5,42K</p>
                        </div>
                    </div>
                </div>
                <div className=" shadow-2xl  rounded-b-3xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#089bc1]  duration-500 cursor-pointer">
                    <Image className="w-[400px] h-[330px] rounded-t-3xl" src={rectangle2} alt="london" />
                    <div className="flex py-6 justify-between px-3">
                        <div>
                            <h4 className="font-semibold text-lg">London, UK</h4>
                            <div className="flex gap-2">
                            <Image src={arrow} alt="alt"/>
                            <p className="font-medium">12 Days Trip</p>
                            </div>
                        </div>
                        <div>
                            <p className="font-semibold text-lg">$4.2K</p>
                        </div>
                    </div>
                </div>
                <div className="shadow-2xl  rounded-b-3xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#089bc1] duration-500 cursor-pointer">
                    <Image className="w-[400px] h-[330px] rounded-t-3xl" src={rectangle3} alt={"Europe"} />
                    <div className="flex py-6 justify-between px-3">
                        <div>
                            <h4 className="font-semibold text-lg">Full Europe</h4>
                            <div className="flex gap-2">
                            <Image src={arrow} alt="alt"/>
                            <p className="font-medium">26 Days Trip</p>
                            </div>
                        </div>
                        <div>
                            <p className="font-semibold text-lg">$15K</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}
export default TopSelling;
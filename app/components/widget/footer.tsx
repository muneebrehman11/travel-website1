import Image from "next/image"
import FbIcon from "@/app/assets/social-facebook.svg"
import InstaIcon from "@/app/assets/social-instagram.png"
import Tweeter from "@/app/assets/social-twitter.svg"
import PlayStore from "@/app/assets/Google-Play.svg"

export default function Footer() {
    return (
        <section className=" mt-28 mb-5">
            <div className="flex gap-7 font-medium text-slate-700 justify-evenly mb-10">
                <div className="">
                    <h1 className="font-medium text-5xl font-sans">Jadoo.</h1>
                    <h3 className=" mt-5 gap-2">Book your trip in minute, get full <br />
                        control for much longer.</h3>
                </div>
                <div className="flex gap-9  ">
                    <div className="">
                        <h2 className="font-semibold text-xl font-sans">Company</h2>
                        <div className="flex flex-col mt-5 gap-2">
                        <a>About</a>
                        <a>Careers</a>
                        <a>Mobile</a>
                        </div>
                    </div>
                    <div className="">
                        <h2 className="font-semibold text-xl font-sans">Contact</h2>
                        <div className="flex flex-col  mt-5 gap-2">
                        <a>Help / FAQ</a>
                        <a>Press</a>
                        <a>Affiliates</a>
                        </div>
                    </div>
                    <div className="">
                        <h2 className="font-semibold text-xl font-sans">More</h2>
                        <div className="flex flex-col  mt-5 gap-2">
                        <a>Airline fees</a>
                        <a>Airline</a>
                        <a>Low fare tips</a>
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <div className="flex  gap-6">
                            <Image src={FbIcon} alt={"social-facebook"} />
                            <Image src={InstaIcon} alt={"social-instagram"} />
                            <Image src={Tweeter} alt={"social-instagram"} />
                        </div>
                        <div className="space-y-5">
                            <h4 className="text-xl font-semibold mt-2">Discover our app</h4>
                            <Image className="w-36" src={PlayStore} alt="Google-Play" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center font-medium text-slate-600">
                <p>All rights reserved@jadoo.co</p>
            </div>
        </section>
    )
}
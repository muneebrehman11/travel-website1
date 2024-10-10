import Image from "next/image";
import TripImage from "@/app/assets/trip-to-greece.png"
import TripImage1 from "@/app/assets/rip-to-rome.png"
import Icon1 from "@/app/assets/chosedestination-icon.svg"
import Icon2 from "@/app/assets/makepayment-icon.svg"
import Icon3 from "@/app/assets/reachairport-icon.svg"
// import Icon1 from ""
function BookTrip() {
    return (
        <section className="flex mt-28">
            {/* left */}
            <div className="w-7/12 ">
                <h3 className="text-lg font-semibold text-slate-500 ">Easy and Fast</h3>
                <h1 className="text-5xl text-blue-950 font-bold font-serif mt-8">Book your Next <br />Trip <br />in 3 Easy steps</h1>

                <div className="space-y-12 mt-12 text-[#112409] font-medium max-w-sm ">
                    <div className="flex ">
                        <Image src={Icon1} alt={"chosedestination icon"} />
                        <div className="ml-7">
                            <p>
                                Choose Destination <br />
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Urna, tortor tempus.</p>
                        </div>
                    </div>

                    <div className="flex">

                        <Image src={Icon2} alt={"makepayment-icon"} />
                        <div className="ml-7">
                            <p>
                                Make Payment <br />
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Urna, tortor tempus.</p>
                        </div>
                    </div>

                    <div className="flex">
                        <Image src={Icon3} alt={"reachairport-icon"} />
                        <div className="ml-7">
                            <p>
                                Reach Airport on Selected Date <br />
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Urna, tortor tempus.</p>
                        </div>
                    </div>

                </div>
            </div>
            {/* right */}
            <div className="w-5/12 ">
                <div className="relative mt-16">
                    <Image className="shadow-2xl  shadow-[#089bc1]  rounded-2xl" src={TripImage} alt={"trip to greece"} />
                    <div className="w-[250px] shadow-2xl   items-center absolute bottom-6 right-5 rounded-xl ">
                        <Image src={TripImage1} alt={"trip to rome"} />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default BookTrip;
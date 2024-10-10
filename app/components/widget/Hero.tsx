import HeroImage from "@/app/assets/hero-image.png"
import Image from "next/image";
import PlayButton from "@/app/assets/play-button.svg"
function Hero() {
    return (

        <section className="flex flex-col md:flex-row items-center">
            {/* <Wrapper> */}
            {/* left */}

            <div className="mt-24">
                <h1 className="font-bold text-red-500">Best Destinations around the world</h1>
                <h2 className="text-7xl font-bold text-blue-950 font-serif mt-3 fonts ">
                    Travel, enjoy <br />and live a new <br />and full life
                </h2>
                <p className="text-blue-950 font-medium mt-5">
                    Built Wicket longer admire do barton vanity itself do in it.
                    Preferred to sportsmen it engrossed listening. Park gate <br />
                    sell they west hard for the.
                </p>
                <div className="flex">
                    <button className="bg-[#f1a501] rounded-lg p-2 px-4 mt-4 font-semibold text-white text-lg shadow-xl duration-500 hover:shadow-orange-500">Find out more</button>
                    <button className="mt-4 ml-7 flex items-center gap-3 font-medium text-slate-500 "><Image src={PlayButton} alt="play button" className="" />Play Demo</button>
                </div>
            </div>
            {/* right */}
            <div className="mt-16 z-10">
                <Image src={HeroImage} alt="travel"/>
            </div>
            {/* </Wrapper> */}
           
        </section>
    )
}
export default Hero;
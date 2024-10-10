import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import logo from "@/app/assets/Jadoo-travel-logo.svg";
import vector from "@/app/assets/Vector 1.png"
import Link from "next/link";


export default function Header() {
    return (
        <header className="relative">
            <div className="absolute -top-16 right-0 z-[-1] ">
                <Image src={vector} alt="vector" className="max-w-[570px] max-h-[830px]" />
            </div>
            <Wrapper>
                <nav className="flex justify-end font-semibold relative mt-3">
                    <div className="absolute left-0">
                        <Image src={logo} alt="jadoo travel logo" className="cursor-pointer " />
                    </div>
                    <ul className="flex gap-6 text-slate-800 items-center ">
                      <Link href={"https://htmltemplates.co/free-website-templates/jadoo-one-pager-travel-website-template"}>
                      <li className=" duration-500 hover:text-slate-400 hover:translate-y-1 cursor-pointer">View Template</li>
                      </Link>
                      
      

                        <li className=" duration-500 hover:text-slate-400 hover:translate-y-1 cursor-pointer">Desitnations</li>
                        <li className=" duration-500 hover:text-slate-400 hover:translate-y-1 cursor-pointer">Hotels</li>
                        <li className=" duration-500 hover:text-slate-400 hover:translate-y-1 cursor-pointer">Flights</li>
                        <li className=" duration-500 hover:text-slate-400 hover:translate-y-1 cursor-pointer">Bookings</li>
                        <div className="flex gap-8">
                            <li className="duration-500  rounded-xl px-4 py-2 hover:text-slate-400 hover:translate-y-1 cursor-pointer ">Login</li>
                            <button className="cursor-pointer border border-black rounded-lg px-4 py-0 hover:bg-orange-300 duration-500">Sign up</button>
                        </div>
                    </ul>
                </nav>
            </Wrapper>
        </header>




    )
}


import Image from "next/image";
import img1 from "@/app/assets/calculated-weather.svg";
import img2 from "@/app/assets/best-flights.svg";
import img3 from "@/app/assets/local-events.png";
import img4 from "@/app/assets/customization.svg";
import CategoryActive from "@/app/assets/category-active.svg";

function Category() {
    return (
        <section className="mt-16">

            <div className="text-center">
                <h2 className="font-medium text-gray-500">CATEGORY</h2>
                <h3 className="font-bold text-3xl text-amber-950">We Offer Best Services</h3>
            </div>
            <div className="flex text-center mt-20  gap-6">
                <div className="w-5/12 hover:shadow-xl hover:shadow-[#d7745f] rounded-3xl py-10 duration-500  bg-white relative group  ">
                    <div className="flex justify-center ">
                        <Image src={img1} alt={"calculated-weather"} />
                    </div> 
                    <h4 className="text-xl font-semibold text-blue-950">Calculated Weather</h4>
                    <p className="font-medium text-md text-gray-600">Built Wicket longer <br /> admire do barton vantity <br /> itself do in it. </p>
                    <div className="absolute -bottom-6 -left-6 z-[-1]  opacity-0 group-hover:opacity-100 duration-500">
                        <Image className="" src={CategoryActive} alt={"category-active"} />
                    </div>
                </div>

                <div className="w-5/12  hover:shadow-xl hover:shadow-[#d7745f] rounded-3xl py-10 duration-500  bg-white relative group">
                    <div className="flex justify-center ">
                        <Image src={img2} alt={"best-flights"} />
                    </div> 
                    <h4 className="text-xl font-semibold text-blue-950">Calculated Weather</h4>
                    <p className="font-medium text-md text-gray-600">Built Wicket longer <br /> admire do barton vantity <br /> itself do in it. </p>
                    <div className="absolute -bottom-6 -left-6 z-[-1]  opacity-0 group-hover:opacity-100 duration-500">
                        <Image className="" src={CategoryActive} alt={"category-active"} />
                    </div>
                </div>

                <div className="w-5/12  hover:shadow-xl hover:shadow-[#d7745f] rounded-3xl py-10 duration-500  bg-white relative group">
                    <div className="flex justify-center ">
                        <Image src={img3} alt={"local-events"} />
                    </div> 
                    <h4 className="text-xl font-semibold text-blue-950">Calculated Weather</h4>
                    <p className="font-medium text-md text-gray-600">Built Wicket longer <br /> admire do barton vantity <br /> itself do in it. </p>
                    <div className="absolute -bottom-6 -left-6 z-[-1]  opacity-0 group-hover:opacity-100 duration-500">
                        <Image className="" src={CategoryActive} alt={"category-active"} />
                    </div>
                </div>
                <div className="w-5/12  hover:shadow-xl hover:shadow-[#d7745f] rounded-3xl py-10 duration-500  bg-white relative group">
                    <div className="flex justify-center ">
                        <Image src={img4} alt={"customization"} />
                    </div> 
                    <h4 className="text-xl font-semibold text-blue-950">Calculated Weather</h4>
                    <p className="font-medium text-md text-gray-600">Built Wicket longer <br /> admire do barton vantity <br /> itself do in it. </p>
                    <div className="absolute -bottom-6 -left-6 z-[-1]  opacity-0 group-hover:opacity-100 duration-500">
                        <Image className="" src={CategoryActive} alt={"category-active"} />
                    </div>
                </div>
            </div>

        </section>

    )
}


export default Category;
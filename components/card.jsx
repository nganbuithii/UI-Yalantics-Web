'use client';
import 'animate.css';
import { FaArrowRight, FaSquareFull } from "react-icons/fa";
import { Button } from "./ui/button";

export default function CardReadMore({ title, items = [] }) {
    return (
        <section className="relative border border-orange-100 2xl:px-10 2xl:mx-2  2xl:py-6 transition-transform transform hover:-translate-y-6 duration-300 ease-in-out group hover:bg-black
        xl:px-[32px]  max-xl:px-[32px] lg:px-5
        md:mx-3 sm:pb-0
       
        ">
            <h4 className="font-bold 2xl:text-xl text-white pt-8 pb-8 xl:text-[18px] max-xl:text-[18px] sm:text-lg ">{title}</h4>
            {items.map((item, index) => (
                <div key={index} className="font-normal 2xl:text-base leading-6 text-[#d2d2d3] flex items-baseline pl-7.5 py-4 

                ">
                    <FaSquareFull color="#f97316" className="text-orange-600 mr-7" fontSize={10} />
                    <p className="leading-6 tracking-wide 2xl:text-xl xl:text-sm max-xl:text-sm">{item}</p>
                </div>
            ))}
            <Button className="text-white bg-transparent 2xl:px-6 2xl:py-2 2xl:text-xl duration-300 ease-in-out group-hover:text-orange-600
            xl:text-[14px]
            lg:text-orange-500
            md:text-orange-500
            sm:py-8 sm:text-orange-500
            ">
                READ MORE <FaArrowRight className="ml-5 group-hover:ml-10 md:text-orange-500 sm:text-orange-500" />
            </Button>
        </section>
    );
}

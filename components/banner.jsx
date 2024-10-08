'use client';
import 'animate.css';
import { FaArrowRight, FaSquareFull } from "react-icons/fa";
import { Button } from "./ui/button";

export default function Banner({ title, content, name, className }) {
    return (
        <section className={` flex xl:flex-row px-6 py-14 ${className} lg:flex-col lg:justify-center
        md:flex-col md:text-center md:items-center sm:flex-col sm:justify-center sm:text-center
bg-[url('/images/bg-banner.svg')] bg-no-repeat bg-cover bg-center md:py-8  xs:flex-col
        `}>
            <div className='xl:w-[70%] lg:w-full lg:text-center xs:text-center'>
                <h4 className="text-xl text-white">{title}</h4>
                <p className="text-white mt-1.5">{content}</p>
            </div>
            <div className="xl:w-[30%] lg:w-full lg:mt-8 lg:text-center md:text-center md:items-center xs:text-center xs:mt-3">
                <Button className="text-white bg-transparent border-2 xl:text-xl duration-300 ease-in-out group-hover:text-orange-600 rounded-full xl:px-10 xl:py-8 xl:text-[16px] md:text-base md:text-center  md:px-[28px] md:mt-10 md:border-orange-500 sm:mt-5 sm:text-orange-500 sm:border-orange-500
                lg:mt-0 lg:py-6 md:py-6 xs:w-full xs:border-orange-500 xs:text-orange-500
                ">
                    {name}
                </Button>
            </div>
        </section>
    );
}

'use client';
import 'animate.css';
import { FaArrowRight, FaSquareFull } from "react-icons/fa";
import { Button } from "./ui/button";

export default function Banner({ title, content, name, className }) {
    return (
        <section className={` flex flex-row px-6 py-14 ${className} lg:flex-col lg:justify-center`}>
            <div className='w-5/6 lg:w-full lg:text-center'>
                <h4 className="text-xl text-white">{title}</h4>
                <p className="text-white mt-1.5">{content}</p>
            </div>
            <div className="w-1/6 lg:w-full lg:mt-8 lg:text-center">
                <Button className="text-white bg-transparent border-2 text-xl duration-300 ease-in-out group-hover:text-orange-600 rounded-full px-10 py-8 xl:text-[16px]">
                    {name}
                </Button>
            </div>
        </section>
    );
}

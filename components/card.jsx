'use client';
import 'animate.css';

import { FaArrowRight, FaSquareFull } from "react-icons/fa";
import { Button } from "./ui/button";

export default function CardReadMore({ title, items=[] }) {
    return (
        <section className="border-2 border-cyan-100 px-6 py-6">
            <h4 className="font-bold text-3xl text-white">{title}</h4>
            {items.map((item, index) => (
                <div key={index} className="font-normal text-base leading-6 text-[#d2d2d3] flex items-baseline pl-7.5 py-4">
                    <FaSquareFull color="#f97316" className="text-orange-600 mr-7" fontSize={10} />
                    <p className="leading-6 tracking-wide text-xl">{item}</p>
                </div>
            ))}
            <Button className="text-white  bg-transparent  hover:text-orange-500 hover:bg-transparent  px-6 py-2 text-xl">
                READ MORE <FaArrowRight className="ml-5" />
            </Button>
        </section>
    )
}

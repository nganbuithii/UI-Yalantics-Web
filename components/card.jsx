'use client';
import 'animate.css';
import { FaArrowRight, FaSquareFull } from "react-icons/fa";
import { Button } from "./ui/button";

export default function CardReadMore({ title, items = [] }) {
    return (
        <section className="relative border border-orange-100 px-10 mx-2  py-6 transition-transform transform hover:-translate-y-6 duration-300 ease-in-out group hover:bg-black">
            <h4 className="font-bold text-xl text-white pt-8 pb-8">{title}</h4>
            {items.map((item, index) => (
                <div key={index} className="font-normal text-base leading-6 text-[#d2d2d3] flex items-baseline pl-7.5 py-4">
                    <FaSquareFull color="#f97316" className="text-orange-600 mr-7" fontSize={10} />
                    <p className="leading-6 tracking-wide text-xl">{item}</p>
                </div>
            ))}
            <Button className="text-white bg-transparent px-6 py-2 text-xl duration-300 ease-in-out group-hover:text-orange-600">
                READ MORE <FaArrowRight className="ml-5 group-hover:ml-10" />
            </Button>
        </section>
    );
}

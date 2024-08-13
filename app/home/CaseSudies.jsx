'use client';
import { Button } from '@/components/ui/button';
import 'animate.css';
import { FaArrowRight, FaSquareFull } from "react-icons/fa";


export default function CaseStudies({ title, items = [] }) {
    return (
        <section className="relative border border-orange-100 px-10   py-6  width-[28%] ">
            <h4 className="font-bold text-2xl text-white pt-10  ">{title}</h4>
            {items.map((item, index) => (
                <div key={index} className="font-normal text-base leading-6 text-[#d2d2d3] flex items-baseline pl-7.5 py-4">
                    <FaSquareFull color="#f97316" className="text-orange-600 mr-7" fontSize={10} />
                    <p className="leading-6 tracking-wide text-xl">{item}</p>
                </div>
            ))}
            <Button className="text-white bg-transparent px-6 py-2 text-xl duration-300 ease-in-out hover:bg-transparent">
                SEE FULL CASE STUDIES <FaArrowRight className="ml-5 group-hover:ml-10" />
            </Button>
        </section>
    );
}

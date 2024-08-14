'use client';
import { Button } from '@/components/ui/button';
import 'animate.css';
import { FaArrowRight, FaSquareFull } from "react-icons/fa";

export default function CardCollab({ title, items = [], className }) {
    return (
        <section className={`relative bg-white px-10 mx-2  py-6 mt-8 ${className}  `}>
            <h4 className="font-bold text-xl text-orange-500 pt-8 pb-8">{title}</h4>
            {items.map((item, index) => (
                <div key={index} className="font-normal text-base leading-6 text-black flex items-baseline pl-7.5 py-4">
                    <FaSquareFull color="#f97316" className="text-orange-600 mr-7" fontSize={10} />
                    <p className="leading-6 tracking-wide text-xl">{item}</p>
                </div>
            ))}
           
        </section>
    );
}

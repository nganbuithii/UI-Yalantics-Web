'use client';
import { Button } from '@/components/ui/button';
import 'animate.css';
import { FaSquareFull } from "react-icons/fa";
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go";

export default function CaseStudies({ title, items = [], className, image }) {
    return (
        <section className={`hover:bg-[url('https://yalantis.com/wp-content/uploads/2024/03/oxygen.webp')]  group bg-no-repeat bg-center relative border border-orange-100 px-10 py-6 ${className}`}>
            <h4 className="font-bold text-2xl text-white pt-10 mb-16 tracking-wide leading-10">{title}</h4>

            {items.map((item, index) => (
                <div key={index} className="font-normal text-base leading-6 text-[#d2d2d3] flex items-baseline pl-7.5 py-4 ">
                    <FaSquareFull color="#f97316" className="text-orange-600 mr-7" fontSize={10} />
                    <p className="leading-6 tracking-wide text-xl">{item}</p>
                </div>
            ))}
            <Button className="relative text-white bg-transparent px-6 py-2 text-xl duration-300 ease-in-out hover:bg-transparent mt-20 xl:text-[18px] xl:px-4">
                SEE FULL CASE STUDIES


            </Button>
            <div>
                <GoArrowDownRight className="absolute bottom-0 right-20 transform -translate-y-1/2 text-5xl text-orange-600 transition-opacity duration-300 ease-in-out group-hover:opacity-0
                xl:right-5 xl:text-4xl
                " />
                <GoArrowUpRight className="absolute bottom-0 right-20 transform -translate-y-1/2 text-5xl text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100
                  xl:right-5 xl:text-4xl
                " />
            </div>
        </section>
    );
}

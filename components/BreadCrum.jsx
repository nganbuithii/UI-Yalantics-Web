

import { GoArrowRight } from "react-icons/go";

export default function BreadCrum({ title1, title2 , className}) {
    return (
        <section className={`flex flex-row ${className}`}>
            <p className="font-bold text-white">
                {title1}
            </p>
            <div className="px-4">
                <GoArrowRight className="text-white"/>
            </div>
            <p className="text-orange-600">{title2}</p>
        </section>
    );
}

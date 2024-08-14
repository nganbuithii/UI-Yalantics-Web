'use client';


export default function ItemExpert({ title, content, className }) {
    return (
        <section className={` ${className} `}>
            <h4 className="text-6xl text-orange-600">{title}</h4>

            <p className='text-[#d2d2d3;] tracking-wide text-lg py-6'>{content}</p>


        </section>
    );
}

// components/CaseStudiesList.jsx

import { BiSkipNextCircle, BiSolidSkipNextCircle } from "react-icons/bi";
import CaseStudies from "./CaseSudies";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";

const caseStudiesData = [
    {
        title: "Developteam Augmentation",
        items: [
            "Solutions tailored to specific business needs",
            "Innovative approaches to problem-solving",
            "Seamless integration with existing systems",
            "Solutions tailored to specific business needs",
            "Innovative approaches to problem-solving",
            "Seamless integration with existing systems"
        ],
        image: "https://yalantis.com/wp-content/uploads/2024/03/oxygen.webp",
    },
    {
        title: "Developteam Augmentation",
        items: [
            "Solutions tailored to specific business needs",
            "Innovative approaches to problem-solving",
            "Seamless integration with existing systems",
            "Solutions tailored to specific business needs",
            "Innovative approaches to problem-solving",
            "Seamless integration with existing systems"
        ]
        ,
        image: "https://yalantis.com/wp-content/uploads/2024/03/oxygen.webp",
    },
    {
        title: "Developteam Augmentation",
        items: [
            "Solutions tailored to specific business needs",
            "Innovative approaches to problem-solving",
            "Seamless integration with existing systems",
            "Solutions tailored to specific business needs",
            "Innovative approaches to problem-solving",
            "Seamless integration with existing systems"
        ]
        ,
        image: "https://yalantis.com/wp-content/uploads/2024/03/oxygen.webp",
    },
    {
        title: "Developteam Augmentation",
        items: [
            "Solutions tailored to specific business needs",
            "Innovative approaches to problem-solving",
            "Seamless integration with existing systems",
            "Solutions tailored to specific business needs",
            "Innovative approaches to problem-solving",
            "Seamless integration with existing systems"
        ]
        ,
        image: "https://yalantis.com/wp-content/uploads/2024/03/oxygen.webp",
    },
    {
        title: "Developteam Augmentation",
        items: [
            "Solutions tailored to specific business needs",
            "Innovative approaches to problem-solving",
            "Seamless integration with existing systems",
            "Solutions tailored to specific business needs",
            "Innovative approaches to problem-solving",
            "Seamless integration with existing systems"
        ],

        image: "https://yalantis.com/wp-content/uploads/2024/03/oxygen.webp",
    },
    {
        title: "Developteam Augmentation",
        items: [
            "Solutions tailored to specific business needs",
            "Innovative approaches to problem-solving",
            "Seamless integration with existing systems",
            "Solutions tailored to specific business needs",
            "Innovative approaches to problem-solving",
            "Seamless integration with existing systems"
        ]
        ,
        image: "https://yalantis.com/wp-content/uploads/2024/03/oxygen.webp",
    },
    {
        title: "Developteam Augmentation",
        items: [
            "Solutions tailored to specific business needs",
            "Innovative approaches to problem-solving",
            "Seamless integration with existing systems",
            "Solutions tailored to specific business needs",
            "Innovative approaches to problem-solving",
            "Seamless integration with existing systems"
        ],
        image: "https://yalantis.com/wp-content/uploads/2024/03/oxygen.webp",
    },
    {
        title: "Developteam Augmentation",
        items: [
            "Solutions tailored to specific business needs",
            "Innovative approaches to problem-solving",
            "Seamless integration with existing systems",
            "Solutions tailored to specific business needs",
            "Innovative approaches to problem-solving",
            "Seamless integration with existing systems"
        ]
        ,
        image: "https://yalantis.com/wp-content/uploads/2024/03/oxygen.webp",
    },
    {
        title: "Developteam Augmentation",
        items: [
            "Solutions tailored to specific business needs",
            "Innovative approaches to problem-solving",
            "Seamless integration with existing systems",
            "Solutions tailored to specific business needs",
            "Innovative approaches to problem-solving",
            "Seamless integration with existing systems"
        ]
    },
    {
        title: "Developteam Augmentation",
        items: [
            "Solutions tailored to specific business needs",
            "Innovative approaches to problem-solving",
            "Seamless integration with existing systems",
            "Solutions tailored to specific business needs",
            "Innovative approaches to problem-solving",
            "Seamless integration with existing systems"
        ]
    },
    // Thêm dữ liệu khác nếu cần
];


export default function CaseStudiesList() {
    return (
        <section className="relative main-bg lg:pb-20   ">
            <div className="flex flex-row pt-20 pl-8 pb-12  md:items-between">
                <h1 className="2xl:text-6xl text-white xl:text-[56px]  lg:text-[56px] md:text-[46px] md:w-full sm:text-[24px] ">Case Studies</h1>
                <div className="flex flex-row lg:absolute lg:flex-col lg:justify-center lg:translate-y-[300px] lg:right-5
                xl:flex-row xl:absolute xl:-top-52 xl:right-10 xl:space-x-4  
                md:absolute md:flex-col md:justify-center md:translate-y-[300px] md:right-0
                sm:hidden md:inline-block  xl:flex">
                    <div className="swiper-button-prev xl:block">
                        <IoIosArrowDropleft className="xl:mt-4 text-8xl xl:text-6xl md:text-6xl text-gray-100 hover:text-orange-500" />
                    </div>
                    <div className="swiper-button-next xl:ml-4 xl:block lg:ml-0 md:ml-0 md:mt-4">
                        <IoIosArrowDropright className="text-8xl md:text-6xl  xl:text-6xl text-gray-100 hover:text-orange-500" />
                    </div>
                </div>

            </div>
            <Swiper
                spaceBetween={0} // Đặt spaceBetween là 0
                slidesPerView={3.5} // Hiển thị 3.5 item mỗi hàng
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }}
                modules={[Navigation]}
                className="flex flex-row case-studies lg:w-[80%] lg:justify-normal lg:pb-20 md:w-[80%] ml-auto md:justify-start md:ml-[10px] xl:w-full xl:ml-0 "
                breakpoints={{

                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                        slidesPerGroup: 1,
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                        slidesPerGroup: 1,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                        slidesPerGroup: 1,
                    },
                    1535: {
                        slidesPerView: 3.5,
                        spaceBetween: 10,
                        slidesPerGroup: 1,
                    },
                    1280: {
                        slidesPerView: 3.5,
                        spaceBetween: 0,
                        slidesPerGroup: 1,
                    },
                }}
            >
                {caseStudiesData.map((data, index) => (
                    <SwiperSlide key={index} className="relative p-0 ">
                        <CaseStudies
                            title={data.title}
                            items={data.items}
                            image={data.image}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

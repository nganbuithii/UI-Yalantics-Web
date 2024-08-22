// components/CaseStudiesList.jsx

import { BiSkipNextCircle, BiSolidSkipNextCircle } from "react-icons/bi";
import CaseStudies from "./CaseSudies";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import { useEffect, useState } from "react";

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
    const [swiper, setSwiper] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        if (swiper) {
            swiper.on('slideChange', () => {
                setActiveIndex(swiper.realIndex);
                setCurrentPage(swiper.realIndex + 1); // Cập nhật số trang hiện tại
            });
            setTotalPages(caseStudiesData.length); // Cập nhật tổng số trang từ dữ liệu gốc
        }
    }, [swiper]);

    return (
        <section className="relative main-bg lg:pb-20">
            <div className="flex flex-row sm:pt-20 pl-8 pb-12 md:items-between xs:pt-0 xs:pb-4">
                <h1 className="2xl:text-6xl text-white xl:text-[56px] lg:text-[56px] md:text-[46px] md:w-full sm:text-[24px] xs:text-2xl xs:pt-[43px] md:pb-10">
                    Case Studies
                </h1>
                <div className="flex flex-row lg:absolute lg:flex-col lg:justify-center lg:translate-y-[300px] lg:right-5
                    xl:flex-row xl:absolute xl:-top-52 xl:right-10 xl:space-x-4  
                    md:absolute md:flex-col md:justify-center md:translate-y-[300px] md:right-0
                    sm:hidden md:inline-block xl:flex xs:hidden">
                    <div className="swiper-button-prev xl:block">
                        <IoIosArrowDropleft className="xl:mt-4 text-8xl xl:text-6xl md:text-6xl text-gray-100 hover:text-orange-500" />
                    </div>
                    <div className="swiper-button-next xl:ml-4 xl:block lg:ml-0 md:ml-0 md:mt-4">
                        <IoIosArrowDropright className="text-8xl md:text-6xl xl:text-6xl text-gray-100 hover:text-orange-500" />
                    </div>
                </div>
            </div>

            <div className="text-white pb-3 px-10 md:hidden">
                {currentPage}/{totalPages}
            </div>

            <div className=" w-4/5 h-1 bg-gray-700 flex mx-auto mb-10 md:hidden ">
                {caseStudiesData.map((_, index) => (
                    <div
                        key={index}
                        className={`flex-1 h-full transition-all duration-300 ${index === activeIndex ? 'bg-white' : 'bg-gray-500'
                            }`}
                    />
                ))}
            </div>

            <Swiper
                spaceBetween={0}
                slidesPerView={3.5}
                onSwiper={setSwiper}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }}
                modules={[Navigation]}
                className="flex flex-row case-studies lg:w-[80%] lg:justify-normal lg:pb-20 md:w-[80%] ml-auto md:justify-start md:ml-[10px] xl:w-full xl:ml-0 md:pt-10"
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
                    400: {
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
                    <SwiperSlide key={index} className="relative p-0">
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
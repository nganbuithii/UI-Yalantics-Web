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
        image:"https://yalantis.com/wp-content/uploads/2024/03/oxygen.webp",
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
        image:"https://yalantis.com/wp-content/uploads/2024/03/oxygen.webp",
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
        image:"https://yalantis.com/wp-content/uploads/2024/03/oxygen.webp",
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
        image:"https://yalantis.com/wp-content/uploads/2024/03/oxygen.webp",
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
        
        image:"https://yalantis.com/wp-content/uploads/2024/03/oxygen.webp",
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
        image:"https://yalantis.com/wp-content/uploads/2024/03/oxygen.webp",
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
        image:"https://yalantis.com/wp-content/uploads/2024/03/oxygen.webp",
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
        image:"https://yalantis.com/wp-content/uploads/2024/03/oxygen.webp",
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
        <section className="relative main-bg ">
            <div className="flex flex-row pt-20 pl-8 pb-12 ">
                <h1 className="text-6xl text-white  xl:text-[56px]">Case Studies</h1>
                <div className="flex flex-row ml-auto space-x-4 pr-10">
                    <div className="swiper-button-prev">
                        <IoIosArrowDropleft className="text-8xl xl:text-6xl text-gray-100 hover:text-orange-500" />
                    </div>
                    <div className="swiper-button-next ml-4">
                        <IoIosArrowDropright className="text-8xl xl:text-6xl text-gray-100 hover:text-orange-500" />
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
                className="flex flex-row case-studies"
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

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdPlayCircleFilled, MdOutlineNavigateNext } from "react-icons/md";
import { IoChevronBackOutline } from "react-icons/io5";
import { Navigation } from "swiper/modules";

export default function VideoCard() {
    const testimonials = [
        {
            name: "Simon Jones",
            title: "CIO in Healthcare",
            company: "Healthcare",
            image: "/images/video.jpg",
            feedback: "Yalantis has been a great fit for us because of their experience, responsiveness, value, and time to market. From the very start, they’ve been able to staff an effective development team in no time and perform as expected.",
        },
        {
            name: "Roy",
            title: "Partner at RAKwireless",
            company: "RAKwireless",
            image: "/images/video1.webp",
            feedback: "What triggered us was their remote collaboration practices as well as their experience in the IoT industry. Their strong technical experience helped us scale our platform and deliver great performance to our customers.",
        },
        {
            name: "Mark Boudreau",
            title: "Founder and COO at Healthfully",
            company: "Healthfully",
            image: "/images/video2.webp",
            feedback: "Yalantis has been a great fit for us because of their experience, responsiveness, value, and time to market. From the very start, they’ve been able to staff an effective development team in no time and perform as expected.",
        },
        {
            name: "Mark Boudreau",
            title: "Founder and COO at Healthfully",
            company: "Healthfully",
            image: "/images/video3.webp",
            feedback: "Yalantis has been a great fit for us because of their experience, responsiveness, value, and time to market. From the very start, they’ve been able to staff an effective development team in no time and perform as expected.",
        },
        {
            name: "Mark Boudreau",
            title: "Founder and COO at Healthfully",
            company: "Healthfully",
            image: "/images/video4.webp",
            feedback: "Yalantis has been a great fit for us because of their experience, responsiveness, value, and time to market. From the very start, they’ve been able to staff an effective development team in no time and perform as expected.",
        },
        {
            name: "Mark Boudreau",
            title: "Founder and COO at Healthfully",
            company: "Healthfully",
            image: "/images/video5.webp",
            feedback: "Yalantis has been a great fit for us because of their experience, responsiveness, value, and time to market. From the very start, they’ve been able to staff an effective development team in no time and perform as expected.",
        },
    ];

    return (
        <>
            <section className="bg-[#1c1e24] py-12 pl-8 pr-32 relative  sm:w-[98%] sm:pr-0 sm:pl-0 sm:mx-auto sm:pb-0 md:w">
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={3}
                    spaceBetween={30}
                    slidesPerGroup={3} // Di chuyển 3 slide mỗi lần
                    loop={true} // Bật tính năng lặp lại
                    className="sm:w-full md:w-[90%] md:justify-start md:items-start md:mr-10"
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                            slidesPerGroup: 1, // Di chuyển 1 slide mỗi lần cho màn hình nhỏ
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                            slidesPerGroup: 2, // Di chuyển 2 slide mỗi lần cho màn hình trung bình
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                            slidesPerGroup: 2, // Di chuyển 3 slide mỗi lần cho màn hình lớn
                        },
                        1535: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                            slidesPerGroup: 3, // Di chuyển 3 slide mỗi lần cho màn hình lớn
                        },
                    }}
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-[#1c1e24] rounded-lg overflow-hidden shadow-lg">
                                <div className="relative">
                                    <div>
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            width={401}
                                            height={246}
                                            className="w-full object-cover"
                                        />
                                    </div>
                                    <div className="absolute flex flex-row bottom-0 p-4
                                    xl:-bottom-4 max-xl:-bottom-4 xl:p-1 max-xl:p-1">
                                        <div className="flex items-center justify-center bg-opacity-50 rounded-full p-2">
                                            <MdPlayCircleFilled className="text-white text-4xl
                                            
                                            " />
                                        </div>
                                        <div className="p-4 bg-transparent">
                                            <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                                            <p className="2xl:text-lg font-semibold text-gray-400 xl:text-[16px] max-xl:text-[16px]">{testimonial.title}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 leading-loose tracking-wide">
                                    <p className="mt-4 text-gray-300 2xl:test-base xl:text-base max-xl:text-base">{testimonial.feedback}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 sm:hidden md:block md:z-30 lg:-right-5">
                    <div className="swiper-button-next text-8xl text-white">
                        <MdOutlineNavigateNext />
                    </div>
                    <div className="swiper-button-prev text-7xl text-white">
                        <IoChevronBackOutline />
                    </div>
                </div>
            </section>
        </>
    );
}

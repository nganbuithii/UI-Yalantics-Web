import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { IoChevronBackOutline } from "react-icons/io5";
import { MdArrowBackIosNew, MdOutlineNavigateNext, MdPlayCircleFilled } from "react-icons/md";

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
            image: "/images/video.jpg",
            feedback: "What triggered us was their remote collaboration practices as well as their experience in the IoT industry. Their strong technical experience helped us scale our platform and deliver great performance to our customers.",
        },
        {
            name: "Mark Boudreau",
            title: "Founder and COO at Healthfully",
            company: "Healthfully",
            image: "/images/video.jpg",
            feedback: "Yalantis has been a great fit for us because of their experience, responsiveness, value, and time to market. From the very start, they’ve been able to staff an effective development team in no time and perform as expected.",
        },
    ];

    return (
        <section className="bg-gray-900 py-12 pl-8 pr-32 relative">
            <div className="flex justify-center space-x-8">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg w-1/3">
                        <div className="relative">
                            <div >
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    width={401}
                                    height={246}
                                    className="w-full object-cover"
                                />
                            </div>
                            <div className="absolute flex flex-row bottom-0">
                                <div className=" flex items-center justify-center bg- bg-opacity-50">
                                    <MdPlayCircleFilled className="text-white text-7xl" />
                                </div>
                                <div className="p-6 top-px bg-transparent">
                                    <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                                    <p className="text-sm text-gray-400">{testimonial.title}</p>
                                </div>
                            </div>


                        </div>

                        <div className="p-6 leading-loose tracking-wide	">
                            <p className="mt-4 text-gray-300">{testimonial.feedback}</p>
                        </div>

                    </div>

                ))}

            </div>
            <div className=" absolute right-0 top-0 translate-y-40" >
                <MdOutlineNavigateNext className="text-8xl text-white" />
                <IoChevronBackOutline className="text-7xl text-white" />
            </div>
        </section>
    );
}

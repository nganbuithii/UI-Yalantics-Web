import Image from "next/image";
import { FaPlay } from "react-icons/fa";

export default function VideoCard() {
    const testimonials = [
        {
            name: "Simon Jones",
            title: "CIO in Healthcare",
            company: "Healthcare",
            image: "/images/video.jpg", // Thay bằng đường dẫn hình ảnh của bạn
            feedback: "Yalantis has been a great fit for us because of their experience, responsiveness, value, and time to market. From the very start, they’ve been able to staff an effective development team in no time and perform as expected.",
        },
        {
            name: "Roy",
            title: "Partner at RAKwireless",
            company: "RAKwireless",
            image: "/images/video.jpg", // Thay bằng đường dẫn hình ảnh của bạn
            feedback: "What triggered us was their remote collaboration practices as well as their experience in the IoT industry. Their strong technical experience helped us scale our platform and deliver great performance to our customers.",
        },
        {
            name: "Mark Boudreau",
            title: "Founder and COO at Healthfully",
            company: "Healthfully",
            image: "/images/video.jpg", // Thay bằng đường dẫn hình ảnh của bạn
            feedback: "Yalantis has been a great fit for us because of their experience, responsiveness, value, and time to market. From the very start, they’ve been able to staff an effective development team in no time and perform as expected.",
        },
    ];

    return (
        <section className="bg-gray-900 py-12">
            <div className="flex justify-center space-x-8">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg w-1/3">
                        <div className="relative">
                            <Image
                                src={testimonial.image}
                                alt={testimonial.name}
                                width={480} // Tăng width lên 480
                                height={300} // Tăng height lên 300
                                className="w-full object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                <FaPlay className="text-white text-4xl" />
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                            <p className="text-sm text-gray-400">{testimonial.title}</p>
                            <p className="mt-4 text-gray-300">{testimonial.feedback}</p>
                        </div>

                    </div>

                ))}
            </div>
        </section>
    );
}

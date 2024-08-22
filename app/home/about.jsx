import Image from "next/image";

export default function AboutUs() {
    return (
        <>
            <section className=" py-12 pt-40 xl:pt-[85px] max-xl:pt-[85px] ">
                <div className="flex flex-row">
                    <h1 className=" text-orange-600 pb-11 pl-8 xl:text-[56px] 
                    sm:text-[24px] sm:pb-1 xs:text-2xl xs:pb-0  md:text-[46px]">About
                    </h1>

                    <h1 className=" text-black pb-11 pl-4 xl:text-[56px]  md:text-[46px]  sm:text-[24px] sm:pb-1 xs:text-2xl xs:pb-0">Us
                    </h1>
                </div>

                <div className="flex flex-row lg:flex-wrap xl:flex-nowrap md:flex-wrap sm:flex-wrap xs:flex-wrap">
                    <div className="xl:w-[70%] p-8 lg:w-full  md:w-full sm:w-full sm:py-0 xs:p-0 xs:px-3
                    xs:w-full">
                        <p className="2xl:text-xl sm:w-full ">
                            Since 2008, Yalantis has been helping companies in the FinTech, healthcare, real estate, supply chain management, and other industries succeed with custom software solutions. Driven by our clients’ business-specific needs and time and budget constraints, our software development company builds and augments secure, stable, scalable, and highly functional digital products to deliver maximum value and ensure business sustainability.
                        </p>
                        <div className="flex flex-row  sm:flex-col sm:justify-start xl:flex-row lg:flex-row lg:pb-[30px] md:flex-row md:pb-8 xs:flex-col xs:justify-start">
                            <div className="pt-14 sm:ml-12 sm:pt-3 xs:ml-3 xs:pt-3">
                                <p className="text-orange-400 font-normal 2xl:text-6xl md:text-[42px] sm:text-[32px] sm:font-semibold xs:text-3xl ">15+</p>
                                <p className="text-xl leading-7 pt-10 text-gray-500 md:text-[20px] sm:pt-3 xs:pt-1 ">
                                    years of experience in software engineering and IT consulting
                                </p>
                            </div>
                            <div className="pt-14 sm:ml-12 sm:pt-3 xs:ml-3 xs:pt-3">
                                <p className="text-orange-400 font-normal 2xl:text-6xl md:text-[42px] sm:text-[32px] sm:font-semibold xs:text-3xl">15+</p>
                                <p className="text-xl leading-7 pt-10 text-gray-500 md:text-[20px] sm:pt-3 xs:pt-1">
                                    years of experience in software engineering and IT consulting
                                </p>
                            </div>
                            <div className="pt-14 sm:ml-12 sm:pt-3 xs:ml-3 xs:pt-3">
                                <p className="text-orange-400 font-normal 2xl:text-6xl md:text-[42px] sm:text-[32px] sm:font-semibold xs:text-3xl">15+</p>
                                <p className="text-xl leading-7 pt-10 text-gray-500 md:text-[20px] sm:pt-3 xs:pt-1">
                                    years of experience in software engineering and IT consulting
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="xl:w-[30%] lg:w-full bg-gray-100 p-9 2xl:mr-10 lg:flex lg:flex-col lg:items-center md:w-full md:flex md:flex-col md:items-center sm:w-full sm:mx-3 xs:w-full xs:mt-[35px]">

                        <div>
                            <p className="text-gray-500 text-2xl  ">Our Office</p>

                            <div className="pb-8  lg:flex-row lg:flex-wrap lg:justify-center lg:flex md:flex md:flex-row md:flex-wrap md:pt-10  xl:flex-wrap xs:pt-3">
                                <div className="lg:w-1/2 md:w-1/2   xl:w-full flex flex-row pb-8">
                                    <div className="relative w-10 h-5 ">
                                        <Image
                                            src="/images/flag.jpg"
                                            layout="fill"
                                            className="object-cover mt-1 "
                                            alt="Flag"
                                        />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-xl tracking-wide">Poland</p>
                                        <p className="text-gray-400 text-base">124 Xô Viết Nghệ tĩnh</p>
                                    </div>
                                </div>
                                <div className=" lg:w-1/2 md:w-1/2 xl:w-full flex flex-row pb-8">
                                    <div className="relative w-10 h-5 ">
                                        <Image
                                            src="/images/flag.jpg"
                                            layout="fill"
                                            className="object-cover mt-1 "
                                            alt="Flag"
                                        />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-xl tracking-wide">Poland</p>
                                        <p className="text-gray-500">124 Xô Viết Nghệ tĩnh</p>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 md:w-1/2 xl:w-full flex flex-row pb-8">
                                    <div className="relative w-10 h-5 ">
                                        <Image
                                            src="/images/flag.jpg"
                                            layout="fill"
                                            className="object-cover mt-1 "
                                            alt="Flag"
                                        />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-xl tracking-wide">Poland</p>
                                        <p className="text-gray-500">124 Xô Viết Nghệ tĩnh</p>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 md:w-1/2 xl:w-full flex flex-row pb-8">
                                    <div className="relative w-10 h-5 ">
                                        <Image
                                            src="/images/flag.jpg"
                                            layout="fill"
                                            className="object-cover mt-1 "
                                            alt="Flag"
                                        />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-xl tracking-wide">Poland</p>
                                        <p className="text-gray-500">124 Xô Viết Nghệ tĩnh</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}
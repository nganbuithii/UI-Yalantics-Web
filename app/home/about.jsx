import Image from "next/image";

export default function AboutUs() {
return (
    <>
      <section className=" py-12 pt-40">
                <div className="flex flex-row">
                    <h1 className="text-6xl text-orange-600 pb-11 pl-8">About
                    </h1>
                    <h1 className="text-6xl text-black pb-11 pl-4">Us
                    </h1>
                </div>

                <div className="flex flex-row">
                    <div className="w-[70%] p-8">
                        <p className="text-xl ">
                            Since 2008, Yalantis has been helping companies in the FinTech, healthcare, real estate, supply chain management, and other industries succeed with custom software solutions. Driven by our clients’ business-specific needs and time and budget constraints, our software development company builds and augments secure, stable, scalable, and highly functional digital products to deliver maximum value and ensure business sustainability.
                        </p>
                        <div className="flex flex-row ">
                            <div className="pt-14 ml-12">
                                <p className="text-orange-400 font-normal text-6xl">15+</p>
                                <p className="text-xl leading-7 pt-10 text-gray-500">
                                    years of experience in software engineering and IT consulting
                                </p>
                            </div>
                            <div className="pt-14 ml-12">
                                <p className="text-orange-400 font-normal text-6xl">15+</p>
                                <p className="text-xl leading-7 pt-10 text-gray-500">
                                    years of experience in software engineering and IT consulting
                                </p>
                            </div>
                            <div className="pt-14 ml-12">
                                <p className="text-orange-400 font-normal text-6xl">15+</p>
                                <p className="text-xl leading-7 pt-10 text-gray-500">
                                    years of experience in software engineering and IT consulting
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[30%] bg-gray-100 p-9 mr-10">
                        <div>
                            <p className="text-gray-500 text-2xl">Our Office</p>
                            <div className="pb-8">
                                <div className="flex flex-row pb-8">
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
                                <div className="flex flex-row pb-8">
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
                                <div className="flex flex-row pb-8">
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
                                <div className="flex flex-row pb-8">
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
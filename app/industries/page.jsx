
import BreadCrum from "@/components/BreadCrum";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ExperienceItem from "./ExperienceItem";
import ItemExpertise from "../services/item-expertise";
import { FaSquareFull } from "react-icons/fa";
import { GrSchedule } from "react-icons/gr";
import { AvatarFallback } from "@radix-ui/react-avatar";
import ContactForm from "../home/ContactForm";
import BenefitItem from "./BenefitItem";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import FAQ from "@/components/faq-item";
import Banner from "@/components/banner";
import { BiSkipNextCircle, BiSolidSkipNextCircle } from "react-icons/bi";
import CaseStudies from "../home/CaseSudies";
import VideoCard from "@/components/video-card";
export default function IndustriesPage() {


    return (
        <>
            <Header />
            <section className="relative flex flex-col justify-center items-center bg-[url('/images/bg-foot.png')] bg-cover bg-center h-[93vh]">
                {/* SVG Path */}
                <svg className="absolute top-40 left-0 w-full h-96 z-10" viewBox="0 0 640 640" xmlns="http://www.w3.org/2000/svg">
                    <path
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fillOpacity="0"  // Chỉnh sửa thuộc tính này
                        strokeMiterlimit="4"
                        stroke="rgb(255,99,0)"
                        strokeOpacity="1"
                        strokeWidth="2"
                        d="M21.51,207.3 C65.94,89.23 177.69,4.54 308.51,3 C308.51,3 308.51,3 308.51,3 C478.34,1 616.03,139.9 616.03,313.26 C616.03,486.61 478.34,628.75 308.51,630.75 C138.69,632.75 1,493.85 1,320.49 C1,280.67 8.26,242.5 21.51,207.3"
                    />
                </svg>


                <div className="text-center px-4 relative z-20">
                    <div className="flex flex-row items-center justify-center">
                        <p className="text-orange-500  text-7xl mr-3">Industries </p>
                        <p className=" text-white text-7xl"> in focus</p>
                    </div>
                    <p className="leading-9 text-white tracking-wide mt-4 w-[75%] mx-auto text-2xl">
                        Transform your business at an accelerated pace with domain experience, unique business process knowledge, and a dedicated delivery unit.
                    </p>
                </div>
                <BreadCrum className="absolute top-1/4 left-5" title1="YALANTICS" title2="EXPERTISES" />
            </section>

            {/* Đoạn 2 */}
            <section className="pb-20 main-bg ">
                <h1 className="text-6xl text-center leading-[64px] py-24">We have <span className="text-orange-500">experience</span> in these industries</h1>

                <div>
                    <div className="flex flex-row flex-wrap ">
                        <ExperienceItem title="Health Care" content="Custom EHR, EMR, ERX, and other medical solutions" className="bg-[#24262c] w-[32%] px-10 pt-14 py-14 my-2.5" />
                        <ExperienceItem title="Health Care" content="Custom EHR, EMR, ERX, and other medical solutions" className="bg-[#24262c] w-[32%] px-10 pt-14  py-14 my-2.5" />
                        <ExperienceItem title="Health Care" content="Custom EHR, EMR, ERX, and other medical solutions" className="bg-[#24262c] w-[32%] px-10 pt-14  py-14 my-2.5" />
                        <ExperienceItem title="Health Care" content="Custom EHR, EMR, ERX, and other medical solutions" className="bg-[#24262c] w-[32%] px-10 pt-14  py-14 my-2.5" />
                        <ExperienceItem title="Health Care" content="Custom EHR, EMR, ERX, and other medical solutions" className="bg-[#24262c] w-[32%] px-10 pt-14  py-14 my-2.5" />
                        <ExperienceItem title="Health Care" content="Custom EHR, EMR, ERX, and other medical solutions" className="bg-[#24262c] w-[32%] px-10 pt-14  py-14 my-2.5" />
                        <ExperienceItem title="Health Care" content="Custom EHR, EMR, ERX, and other medical solutions" className="bg-[#24262c] w-[32%] px-10 pt-14  py-14 my-2.5" />
                        <ExperienceItem title="Health Care" content="Custom EHR, EMR, ERX, and other medical solutions" className="bg-[#24262c] w-[32%] px-10 pt-14  py-14 my-2.5" />
                    </div>
                </div>
            </section>

            {/* Expertise and competencies */}
            <section className="main-bg pt-20">
                <div className="flex flex-row justify-center pb-9">
                    <p className="text-orange-500 text-7xl">Expertise </p>
                    <p className="text-white text-7xl ml-3"> and competencies</p>
                </div>

                <div className="flex flex-row bg-[#24262c] m-11 p-11">
                    <div className="w-[20%]">
                        <p className="text-orange-600 text-2xl">Technology excellence</p>
                        <p className="text-white tracking-wide mt-3">Create and enhance your software product with powerful and cost-effective technology</p>
                    </div>
                    <div className="w-[40%] mx-3">
                        <ItemExpertise title="IoT Service" />
                        <ItemExpertise title="IoT Service" />
                        <ItemExpertise title="IoT Service" />
                        <ItemExpertise title="IoT Service" />
                        <ItemExpertise title="IoT Service" />
                        <ItemExpertise title="IoT Service" />
                    </div>
                    <div className="w-[40%]">
                        <ItemExpertise title="IoT Service" />
                        <ItemExpertise title="IoT Service" />
                        <ItemExpertise title="IoT Service" />
                        <ItemExpertise title="IoT Service" />
                        <ItemExpertise title="IoT Service" />
                        <ItemExpertise title="IoT Service" />
                    </div>
                </div>

            </section>

            {/* video */}
            <section className="main-bg py-12 pt-40">
                <h1 className="text-6xl text-white pb-11 px-7">Video testimonials
                </h1>
                <VideoCard />
            </section>
            {/* benefit */}
            <section className=" bg-[#f5f5f5] py-20">
                <h1 className="text-7xl w-2/3 leading-tight ml-10">
                    <span className="text-orange-500">Benefits</span> of working with an industry-dedicated team
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 px-10">
                    <div className="bg-white">
                        <BenefitItem className="px-8 py-16"
                            title="Optimize your product delivery terms"
                            content="Rely on domain-specific expertise to spend less time and money throughout the onboarding stage. Form your product vision faster and start developing earlier compared to a team with no domain expertise."
                        />
                    </div>
                    <div className="bg-white">
                        <BenefitItem className="px-8 py-16"
                            title="Optimize your product delivery terms"
                            content="Rely on domain-specific expertise to spend less time and money throughout the onboarding stage. Form your product vision faster and start developing earlier compared to a team with no domain expertise."
                        />
                    </div>
                    <div className="bg-white">
                        <BenefitItem className="px-8 py-16"
                            title="Optimize your product delivery terms"
                            content="Rely on domain-specific expertise to spend less time and money throughout the onboarding stage. Form your product vision faster and start developing earlier compared to a team with no domain expertise."
                        />
                    </div>
                    <div className="bg-white">
                        <BenefitItem className="px-8 py-16"
                            title="Optimize your product delivery terms"
                            content="Rely on domain-specific expertise to spend less time and money throughout the onboarding stage. Form your product vision faster and start developing earlier compared to a team with no domain expertise."
                        />
                    </div>
                </div>
            </section>

            {/* Case studies */}
            <section className="main-bg ">
                <div className="flex flex-row pt-20 pl-8 pb-12">
                    <h1 className="text-6xl text-white ">Case Studies</h1>
                    <div className="flex flex-row ml-auto space-x-4 pr-10">
                        <BiSkipNextCircle className="text-7xl text-gray-100" />
                        <BiSolidSkipNextCircle className="text-7xl text-gray-100" />
                    </div>
                </div>
                <div className="flex flex-row ml-10">

                    <CaseStudies
                        title={"Developteam augement tation"}
                        items={[
                            "Solutions tailored to specific business needs",
                            "Innovative approaches to problem-solving",
                            "Seamless integration with existing systems",
                            "Solutions tailored to specific business needs",
                            "Innovative approaches to problem-solving",
                            "Seamless integration with existing systems"
                        ]}
                    />
                    <CaseStudies
                        title={"Developteam augement tation"}
                        items={[
                            "Solutions tailored to specific business needs",
                            "Innovative approaches to problem-solving",
                            "Seamless integration with existing systems",
                            "Solutions tailored to specific business needs",
                            "Innovative approaches to problem-solving",
                            "Seamless integration with existing systems"
                        ]}
                    />
                    <CaseStudies
                        title={"Developteam augement tation"}
                        items={[
                            "Solutions tailored to specific business needs",
                            "Innovative approaches to problem-solving",
                            "Seamless integration with existing systems",
                            "Solutions tailored to specific business needs",
                            "Innovative approaches to problem-solving",
                            "Seamless integration with existing systems"
                        ]}
                    />
                    <CaseStudies
                        title={"Developteam augement tation"}
                        items={[
                            "Solutions tailored to specific business needs",
                            "Innovative approaches to problem-solving",
                            "Seamless integration with existing systems",
                            "Solutions tailored to specific business needs",
                            "Innovative approaches to problem-solving",
                            "Seamless integration with existing systems"
                        ]}
                    />
                    <CaseStudies
                        title={"Developteam augement tation"}
                        items={[
                            "Solutions tailored to specific business needs",
                            "Innovative approaches to problem-solving",
                            "Seamless integration with existing systems",
                            "Solutions tailored to specific business needs",
                            "Innovative approaches to problem-solving",
                            "Seamless integration with existing systems"
                        ]}
                    />
                    <CaseStudies
                        title={"Developteam augement tation"}
                        items={[
                            "Solutions tailored to specific business needs",
                            "Innovative approaches to problem-solving",
                            "Seamless integration with existing systems",
                            "Solutions tailored to specific business needs",
                            "Innovative approaches to problem-solving",
                            "Seamless integration with existing systems"
                        ]}
                    />

                </div>

            </section>


            {/* ADS */}
            <section section className="p-8 mt-16" >
                <Banner className="bg-gradient" title="GOT A DOMAIN-SPECIFIC PROJECT?
" content="We have the expertise to build a high-quality product in line with industry policies and your business requirements." name="CONTACT US" />
            </section >


            {/* Technology */}
            <section section className="pt-24 bg-[#f5f5f5]" >

                <div className="pl-8">
                    <p className="text-7xl">Software development
                    </p>
                    <p className="text-orange-600 text-7xl">Insights</p>
                </div>

                <div className="flex flex-row px-8 ">
                    <div className=" items-stretch flex flex-col w-[45%] my-11 mx-6 bg-white pb-16">
                        <div className="w-full relative h-[350px]">
                            <Image
                                src="/images/in1.png"
                                alt="Description of the image"
                                fill
                                style={{ objectFit: 'cover' }}  
                                quality={90}  // Tùy chọn chất lượng hình ảnh
                                priority={true}  // Đánh dấu hình ảnh này là quan trọng để tải trước
                            />
                        </div>

                        <div className="mt-4 py-11 px-6">
                            <p className="text-gray-500 text-xl">How to</p>
                            <p className="w-2/3 text-black  text-2xl font-medium mt-3 tracking-wide hover:text-orange-500">
                                Cloud migration checklist: 7 steps to successful app migration
                            </p>
                            <p className=" pt-5 text-lg">
                                In this extensive guide, we unveil the top reasons for cloud migration, touch upon security concerns, and discuss the process of cloud migration step-by-step.
                            </p>
                        </div>
                    </div>


                    <div className="items-stretch pl-1 w-[55%] py-11">
                        {/* item1 */}
                        <div className="flex flex-row mb-3.5 bg-white ">
                            <div className="w-[45%] ">
                                <div className="w-full relative h-[350px]">
                                    <Image
                                        src="/images/in2.png"
                                        alt="Description of the image"
                                        fill
                                        style={{ objectFit: 'cover' }}  
                                        quality={90}  // Tùy chọn chất lượng hình ảnh
                                        priority={true}  // Đánh dấu hình ảnh này là quan trọng để tải trước
                                    />
                                </div>
                            </div>

                            {/* Phần nội dung */}
                            <div className="w-[55%] pl-4 px-6 py-8 ">
                                <p className="text-gray-500">How to</p>
                                <p className="text-black text-2xl font-bold tracking-wide hover:text-orange-500 my-4">
                                    Cloud migration checklist: 7 steps to successful app migration
                                </p>
                                <p>
                                    Cloud migration checklist: 7 steps to successful app migration Cloud migration checklist: 7 steps to successful app migration
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-row bg-white mt-6 ">
                            <div className="w-[45%] ">
                                <div className="w-full relative h-[350px]">
                                    <Image
                                        src="/images/in3.png"
                                        alt="Description of the image"
                                        fill
                                        style={{ objectFit: 'cover' }}  
                                        quality={90}  // Tùy chọn chất lượng hình ảnh
                                        priority={true}  // Đánh dấu hình ảnh này là quan trọng để tải trước
                                    />
                                </div>
                            </div>

                            {/* Phần nội dung */}
                            <div className="w-[55%] pl-4 px-6 py-8">
                                <p className="text-gray-500">How to</p>
                                <p className="text-black text-2xl font-bold tracking-wide hover:text-orange-500 my-4">
                                    Cloud migration checklist: 7 steps to successful app migration
                                </p>
                                <p>
                                    Cloud migration checklist: 7 steps to successful app migration Cloud migration checklist: 7 steps to successful app migration
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* FAQ */}
            <section section className="bg-pink-100 justify-center  pb-26" >
                <h1 className=" text-center text-7xl text-black font-light pb-8 pt-20">FAQ</h1>
                <FAQ title="How does your software developer company ensure product security?
                " content="Our software development agency has obtained ISO 27001 and ISO 9001 certifications for software development groups. These certifications demonstrate that Yalantis’ management and development processes comply with international quality and security standards introduced by the International Organization for Standardization (ISO).
                

                 

                Being ISO 9001-certified, our software development firm delivers quality software engineering services in full accordance with the needs of our clients, employees, and regulatory bodies. Our processes are well-established and polished to continually improve performance and operational efficiency.

                 

                As an ISO 27001-certified software developer company, we build highly secure software solutions that comply with business, legal, contractual, and regulatory requirements, and we are constantly streamlining our information security management system.
                "/>
                <FAQ title="How does your software developer company ensure product security?
                " content="Our software development agency has obtained ISO 27001 and ISO 9001 certifications for software development groups. These certifications demonstrate that Yalantis’ management and development processes comply with international quality and security standards introduced by the International Organization for Standardization (ISO).
                

                 

                Being ISO 9001-certified, our software development firm delivers quality software engineering services in full accordance with the needs of our clients, employees, and regulatory bodies. Our processes are well-established and polished to continually improve performance and operational efficiency.

                 

                As an ISO 27001-certified software developer company, we build highly secure software solutions that comply with business, legal, contractual, and regulatory requirements, and we are constantly streamlining our information security management system.
                "/>
                <FAQ title="How does your software developer company ensure product security?
                " content="Our software development agency has obtained ISO 27001 and ISO 9001 certifications for software development groups. These certifications demonstrate that Yalantis’ management and development processes comply with international quality and security standards introduced by the International Organization for Standardization (ISO).
                

                 

                Being ISO 9001-certified, our software development firm delivers quality software engineering services in full accordance with the needs of our clients, employees, and regulatory bodies. Our processes are well-established and polished to continually improve performance and operational efficiency.

                 

                As an ISO 27001-certified software developer company, we build highly secure software solutions that comply with business, legal, contractual, and regulatory requirements, and we are constantly streamlining our information security management system.
                "/>
                <FAQ title="How does your software developer company ensure product security?
                " content="Our software development agency has obtained ISO 27001 and ISO 9001 certifications for software development groups. These certifications demonstrate that Yalantis’ management and development processes comply with international quality and security standards introduced by the International Organization for Standardization (ISO).
                

                 

                Being ISO 9001-certified, our software development firm delivers quality software engineering services in full accordance with the needs of our clients, employees, and regulatory bodies. Our processes are well-established and polished to continually improve performance and operational efficiency.

                 

                As an ISO 27001-certified software developer company, we build highly secure software solutions that comply with business, legal, contractual, and regulatory requirements, and we are constantly streamlining our information security management system.
                "/>
                <FAQ title="How does your software developer company ensure product security?
                " content="Our software development agency has obtained ISO 27001 and ISO 9001 certifications for software development groups. These certifications demonstrate that Yalantis’ management and development processes comply with international quality and security standards introduced by the International Organization for Standardization (ISO).
                

                 

                Being ISO 9001-certified, our software development firm delivers quality software engineering services in full accordance with the needs of our clients, employees, and regulatory bodies. Our processes are well-established and polished to continually improve performance and operational efficiency.

                 

                As an ISO 27001-certified software developer company, we build highly secure software solutions that comply with business, legal, contractual, and regulatory requirements, and we are constantly streamlining our information security management system.
                "/>
            </section >


            {/* Constract form */}
            <section section className=" relative flex flex-row bg-white pt-44 mt-30" >

                <div className="w-1/2 bg-[#fafafa] p-6 rounded-lg shadow-lg mx-10">
                    <ContactForm />
                </div>

                <div className="w-1/2 text-black flex flex-col items-center justify-center p-6">

                    <Avatar className="flex items-center justify-center mb-4 w-40 h-40">
                        <AvatarImage
                            src="https://github.com/shadcn.png"
                            className="rounded-full w-full h-full object-cover"
                        />
                        <AvatarFallback className="text-lg">CN</AvatarFallback>
                    </Avatar>

                    <p className="text-center tracking-wide font-bold mb-2 text-2xl">Lisa Panchenko</p>
                    <p className="text-center text-gray-600 mb-4">Senior Engineer Manager</p>
                    <Button
                        className="border-2 text-xl tracking-wide border-orange-600 bg-transparent hover:bg-transparent text-orange-600 rounded-full flex items-center justify-center py-7 px-3 mb-4"
                    >
                        <GrSchedule className="mr-2" />
                        SCHEDULE A CALL
                    </Button>

                    <hr className="border-t-2 border-orange-600 my-4 w-full" />

                    <div className="w-full text-left pt-10">
                        <p className="tracking-wide font-semibold mb-2 text-2xl ">Your steps with Yalantis</p>
                        <div className="flex flex-col space-y-2 text-xl">
                            <div className="flex items-center space-x-2 py-4">
                                <FaSquareFull className="text-orange-500 w-4 h-4 mr-3" />
                                <p className="text-gray-700">Schedule a call</p>
                            </div>
                            <div className="flex items-center space-x-2 py-4">
                                <FaSquareFull className="text-orange-500 w-4 h-4 mr-3" />
                                <p className="text-gray-700">Schedule a call</p>
                            </div>
                            <div className="flex items-center space-x-2 py-4">
                                <FaSquareFull className="text-orange-500 w-4 h-4 mr-3" />
                                <p className="text-gray-700">Schedule a call</p>
                            </div>
                            <div className="flex items-center space-x-2 py-4">
                                <FaSquareFull className="text-orange-500 w-4 h-4 mr-3" />
                                <p className="text-gray-700">Schedule a call</p>
                            </div>

                        </div>
                    </div>
                </div>


            </section >
            <Footer />

        </>
    )
}
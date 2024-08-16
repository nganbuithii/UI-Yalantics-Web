'use client'
import Header from "@/components/header";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import CardReadMore from "@/components/card";
import VideoCard from "@/components/video-card";
import Footer from "@/components/footer";
import FooterRes from "@/components/footer-reponsive";
import MenuRes from "@/components/menu-res";
import Banner from "@/components/banner";
import OurOffice from "./out-office";
import ContactForm from "./ContactForm";
import CaseStudiesList from "./CaseStudiesList";
import FAQ from "@/components/faq-item";
import AboutUs from "./about";
export default function HomePage() {

    return (
        <>
            <Header />
            <MenuRes />
            <section className="main-bg  pt-14  lg:flex-none xl:px-8 ">
                <div className="w-3/5 p-5 mt-32 lg:w-full  lg:flex-col lg:z-20 
                ">
                    <div>
                        <p className="text-orange-500 text-7xl xl:text-[40px] xl:text-start xl:pl  lg:text-[46px]  lg:text-center
                    
                    ">Software development</p>
                        <p className="text-white text-7xl xl:text-[40px] xl:text-start   lg:text-[46px]  lg:text-center ">company that delivers for</p>
                    </div>

                    {/* xl:justify-normal max-xl:justify-normal */}
                    <div className="flex justify-center space-x-4 mt-5 
                    xl:justify-start
                    lg:justify-center 
                    ">
                        <Image src="/images/a1.png" alt="logo1" width={250} height={250}
                            className="main-bg xl:w-[130px] 
                            xl:h-[70px] 
                            lg:w-1/3 
                            "></Image>
                        <Image src="/images/a1.png" alt="logo2" width={250} height={250} className="main-bg xl:w-[130px]  
                        lg:w-1/3 
                        xl:h-[70px] "></Image>
                        <Image src="/images/a1.png" alt="logo3" width={250} height={250} className="main-bg xl:w-[130px] 
                        lg:w-1/3
                        xl:h-[70px] "></Image>
                    </div>
                    <div className=" lg:justify-center   xl:justify-start
                    lg:flex ">
                        <Button className="mt-10 border-2 border-orange-500 bg-orange-500 text-white hover:bg-orange-600 px-6  rounded-full text-lg font-semibold transition duration-300 ease-in-out mx-10 py-7
                    xl:text-[14px] 
                    xl:py-4  
                    lg:py-6 
                    lg:text-base 
                   
                    ">
                            CONTACT US
                        </Button>
                    </div>

                </div>
                <div className="w-2/5 flex justify-center items-center
    
                "> {/* 40% chiều rộng */}
                    <Image src="/images/y.png" className="xl:w-[580px]  xl:h-[640px]  xl:absolute xl:right-[100px] xl:top-0
                    
                    " alt="y" width={620} height={620}></Image>
                </div>
            </section>

            <section className="flex flex-row main-bg xl:justify-center  xl:pt-44 2xl:justify-center
            lg:flex-wrap
            ">
                <div className=" py-10 xl:py-5   xl:w-[24%]  lg:w-[50%] ">
                    <CardReadMore
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
                <div className="py-10 xl:py-5   xl:w-[24%]   lg:w-[50%] ">
                    <CardReadMore
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
                <div className="py-10  xl:py-5  xl:w-[24%]  lg:w-[50%] ">
                    <CardReadMore
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
                <div className=" py-10 xl:py-5  pr-7 xl:pr-0 m xl:w-[24%]  lg:w-[50%] ">
                    <CardReadMore
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

            <section className="main-bg py-12 pt-40">
                <h1 className="text-6xl text-white pb-11 px-7 xl:text-[56px] ">Video testimonials
                </h1>
                <VideoCard />
            </section>
            <AboutUs />
            <section className="pb-40">
                <div className="flex flex-row justify-around">
                    <Image src="/images/logo.svg" width={150} height={150}></Image>
                    <Image src="/images/logo.svg" width={150} height={150}></Image>
                    <Image src="/images/logo.svg" width={150} height={150}></Image>
                    <Image src="/images/logo.svg" width={150} height={150}></Image>
                    <Image src="/images/logo.svg" width={150} height={150}></Image>
                    <Image src="/images/logo.svg" width={150} height={150}></Image>
                    <Image src="/images/logo.svg" width={150} height={150}></Image>
                </div>
            </section>

            <CaseStudiesList />

            <section className="p-8">
                <Banner className="bg-gradient" title="NOT SURE WHICH ENGAGEMENT MODEL IS BEST FOR MEETING YOUR BUSINESS OBJECTIVES?
" content="Let us help you decide." name="CONTACT US" />
            </section>

            {/* FAQ */}
            <section className="bg-pink-100 justify-center pb-20">
                <h1 className=" text-center text-7xl text-black font-light pb-8 pt-20 lg:text-[56px]">FAQ</h1>
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
            </section>

            <section className="flex flex-row bg-[url('/images/bg-foot.png')] bg-cover bg-center pt-20 px-20
            xl:pt-15 xl:px-0 lg:flex-wrap lg:px-5">
                <div className="w-1/2 bg-white p-6 rounded-lg shadow-lg mx-10 lg:w-full lg:p-2">
                    <ContactForm />
                </div>

                <div className="w-1/2 text-white lg:w-full lg:pt-10">
                    <p className="font-bold text-gray-600 text-xl">Yalantis in brief</p>
                    <div className="flex flex-row justify-around">
                        <div>
                            <p className=" text-5xl text-orange-700">15+</p>
                            <p className="py-5">year of experience</p>
                        </div>
                        <div>
                            <p className=" text-5xl text-orange-700">500+</p>
                            <p className="py-5">year of experience</p>
                        </div>
                        <div>
                            <p className=" text-5xl text-orange-700">35+</p>
                            <p className="py-5">year of experience</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-around pb-8 flex-wrap lg:pb-20">
                        <Image src="/images/kpmg.svg" width={250} height={250} className="xl:w-1/2"></Image>
                        <Image src="/images/toyota.svg" width={250} height={250} className="xl:w-1/2"></Image>
                        <Image src="/images/hom.svg" width={250} height={250} className="xl:w-1/2"></Image>
                    </div>
                    <hr></hr>
                    <div className="flex flex-row justify-around pt-10">
                        <div>
                            <div>
                                <p className="text-xl text-gray-500">Project inquiries</p>
                                <p className="text-orange-500">hello@yayantis.com</p>
                            </div>
                            <div className="mt-5">
                                <p className="text-xl text-gray-500">Phone number</p>
                                <p>+84 185263 56</p>
                            </div>
                        </div>


                        <div>
                            <p className="text-xl text-gray-500">Carrers</p>
                            <p>carrers@yayantis.com</p>
                        </div>
                    </div>


                    <OurOffice />
                </div>
            </section>

            <Footer className="lg:hidden" />

            {/* Hiển thị FooterRes khi màn hình nhỏ hơn 1024px (lg) */}
            <FooterRes className="lg:block" />
        </>
    );
}

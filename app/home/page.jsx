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

            <section className="main-bg 2xl:flex 2xl:flex-row sm:pt-14  lg:flex-none xl:px-8 xs:pt-8 ">
                <div className="2xl:w-3/5 p-5 mt-32 lg:w-full  lg:flex-col lg:z-20 md:w-full
                md:items-start md:justify-start xs:pb-10
                ">
                    <div className="md:flex-row md:pb-10">
                        <p className="sm:block md:hidden xs:hidden sm:text-white sm:text-2xl">
                            <span className="text-orange-500">Software development</span> company that delivers for
                        </p>
                        <p className="text-orange-500 2xl:text-7xl xl:text-[56px] xl:text-start xl:pl  lg:text-[46px]  lg:text-start md:text-[46px] sm:text-2xl sm:text-center
                    md:text-start sm:hidden md:inline-block 
                    xs:text-2xl xs:text-center
                    ">Software development</p>
                        <p className="text-white 2xl:text-7xl xl:text-[56px] xl:text-start xl:mt-3  lg:text-[46px]  lg:text-start  md:text-[46px]  sm:text-2xl sm:text-center md:mt-3 md:text-start sm:hidden md:inline-block  xs:text-2xl xs:text-center">company that delivers for</p>
                    </div>

                    {/* xl:justify-normal max-xl:justify-normal */}
                    <div className="flex justify-center space-x-4 mt-5 
                    xl:justify-start
                    lg:justify-around lg:flex-nowrap xl:flex-wrap
                    md:flex-nowrap
                    sm:flex-wrap sm:justify-around md:mt-3 sm:mt-16
                    ">
                        <Image src="/images/logo-3.svg" alt="logo1" width={250} height={250}
                            className="main-bg 
                            xl:w-[200px] xl:h-[150px]
                            
                            lg:w-[200px]   
                            md:w-[160px]
                            sm:w-[70px]  xs:w-[80px] 
                            "></Image>
                        <Image src="/images/logo-1.svg" alt="logo2" width={250} height={250} className="main-bg 
                        lg:w-[200px]  2xl:w-[250px] 2xl:h-[150px]
                        xl:w-[200px] xl:h-[150px] sm:w-1/3 md:w-1/3  xs:w-[80px]  "></Image>
                        <Image src="/images/logo-2.svg" alt="logo3" width={250} height={250} className="main-bg 
                        lg:w-[200px] 2xl:w-[300px] 2xl:mt-5
                        xl:w-[200px] xl:h-[150px]  sm:w-1/3 sm:mt-4 md:w-1/3  xs:w-[80px] "></Image>
                    </div>
                    <div className=" lg:justify-center   xl:justify-start md:justify-center md:flex md:items-center sm:flex sm:justify-center sm:items-center  
                    lg:flex ">
                        <Button className="mt-10 border-2 border-orange-500 bg-orange-500 text-white hover:bg-orange-600 rounded-full text-lg font-semibold transition duration-300 ease-in-out 
                        xl:text-base xl:px-8 xl:py-6
                        lg:text-base lg:px-10 lg:py-6 lg:mt-16
                        md:text-base md:px-10 md:py-6 md:mt-16
                        sm:text-base sm:px-10 sm:py-6 sm:mt-16 sm:w-auto
                        xs:text-base xs:w-full xs:py-6
                    ">
                            CONTACT US
                        </Button>
                    </div>

                </div>
                <div className="2xl:w-2/5 xl:block lg:hidden  md:hidden sm:hidden xs:hidden -z-20 opacity-35
                ">
                    <Image src="/images/y.png" className=" 2xl:w-[620px] 2xl:h-[760px] xl:w-[600px]  xl:h-[640px]  xl:absolute xl:right-[100px] xl:top-0 
                                " alt="y" width={620} height={620}></Image>
                </div>
            </section>

            <section className=" flex-wrap xl:flex-nowrap main-bg xl:pt-24 xl:pb-[80px] lg:grid lg:grid-cols-2 lg:gap-4 lg:px-5 lg:pb-[60px] md:pb-[60px]
            md:grid md:grid-cols-2 md:gap-3 md:px-5 
            xl:grid xl:grid-cols-4 xl:gap-3 xl:px-3 
            xs:px-4 
            ">
                <div className=" lg:w-full lg:mx-0 sm:px-4 sm:pb-4 xs:pb-4">
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
                <div className=" lg:w-full lg:mx-0 sm:px-4 sm:pb-4 xs:pb-4">
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
                <div className=" lg:w-full lg:mx-0 sm:px-4 sm:pb-4 xs:pb-4">
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
                <div className=" lg:w-full lg:mx-0 sm:px-4 sm:pb-4 xs:pb-4">
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



            <section className="main-bg py-12 pt-40 sm:py-8 xl:pl-3 xl:py-24 lg:pt-[60px] xs:pt-16">
                <h1 className="text-6xl text-white pb-11 px-7 lg:text-[46px] xl:text-[56px]  md:text-[46px] sm:text-2xl sm:pb-1 md:pt-[60px] xs:text-2xl xs:pb-1">Video testimonials
                </h1>
                <VideoCard />
            </section>
            <AboutUs />
            <section className="sm:pb-40 xs:pb-5">
                <div className="flex flex-row lg:justify-around 2xl:justify-around lg:flex-wrap xl:flex-nowrap md:flex-wrap md:justify-around sm:flex-wrap sm:justify-around xs:flex-wrap xs:justify-around">
                    <Image src="/images/logo.svg" width={150} height={150} className="lg:w-[240px] xl:w-[150px] md:w-[180px] xs:w-1/4"></Image>
                    <Image src="/images/logo.svg" width={150} height={150} className="lg:w-[240px] xl:w-[150px] md:w-[180px] xs:w-1/4"></Image>
                    <Image src="/images/logo.svg" width={150} height={150} className="lg:w-[240px] xl:w-[150px] md:w-[180px] xs:w-1/4"></Image>
                    <Image src="/images/logo.svg" width={150} height={150} className="lg:w-[240px] xl:w-[150px] md:w-[180px] xs:w-1/4"></Image>
                    <Image src="/images/logo.svg" width={150} height={150} className="lg:w-[240px] xl:w-[150px] md:w-[180px] xs:w-1/4"></Image>
                    <Image src="/images/logo.svg" width={150} height={150} className="lg:w-[240px] xl:w-[150px] md:w-[180px] xs:w-1/4"></Image>
                    <Image src="/images/logo.svg" width={150} height={150} className="lg:w-[240px] xl:w-[150px] md:w-[180px] xs:w-1/4"></Image>
                </div>
            </section>

            <CaseStudiesList />

            <section className="p-8 main-bg">
                <Banner title="NOT SURE WHICH ENGAGEMENT MODEL IS BEST FOR MEETING YOUR BUSINESS OBJECTIVES?
" content="Let us help you decide." name="BOOK A CALL" />
            </section>

            {/* FAQ */}
            <section className="bg-pink-100 justify-center pb-20">
                <h1 className=" text-center xl:text-7xl text-black font-light pb-8 pt-20 sm:text-lg sm:pt-10 lg:text-[56px] md:text-[46px] xs:text-lg xs:pb-2">FAQ</h1>
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

            <section className="flex flex-row lg:bg-[url('/images/bg-foot.png')] bg-cover bg-center xl:pt-20 sm:bg-none sm:bg-[#1C1E24]
            xl:pt-15 xl:px-0 lg:flex-wrap  xl:flex-nowrap md:flex-wrap sm:flex-wrap
            lg:pt-[60px] lg:px-10 xs:flex-wrap 
            ">
                <div className="xl:w-1/2 bg-white xl:p-6 xl:rounded-lg shadow-lg xl:mx-10 lg:w-full lg:p-2
                md:w-full sm:w-full sm:mx-0 sm:rounded-none md:mx-7 md:mt-7 xs:w-full">
                    <ContactForm />
                </div>

                <div className="xl:w-1/2 text-white lg:w-full md:w-full lg:pt-10 sm:px-5 lg:main-bg xs:w-full xs:pt-4 xs:bg-[#1C1E24] xs:px-3" >
                    <p className="font-bold text-gray-600 text-xl md:pt-8 sm:pl-5 sm:pb-5 sm:pt-5 ">Yalantis in brief</p>
                    <div className="flex lg:flex-row justify-around sm:flex-col md:flex-row xs:flex-col">
                        <div>
                            <p className=" text-5xl text-orange-700 md:text-[34px] sm:text-[34px] xs:text-[34px] ">15+</p>
                            <p className="py-5">year of experience</p>
                        </div>
                        <div>
                            <p className=" text-5xl text-orange-700 md:text-[34px] sm:text-[34px] xs:text-[34px]">500+</p>
                            <p className="py-5">year of experience</p>
                        </div>
                        <div>
                            <p className=" text-5xl text-orange-700 md:text-[34px] sm:text-[34px] xs:text-[34px]">35+</p>
                            <p className="py-5">year of experience</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-around pb-8 flex-wrap lg:pb-20 xs:flex-row">
                        <Image src="/images/kpmg.svg" width={250} height={250} className="xs:w-1/3 xl:w-1/2 md:w-[200px]"></Image>
                        <Image src="/images/toyota.svg" width={250} height={250} className="xs:w-1/3 xl:w-1/2"></Image>
                        <Image src="/images/hom.svg" width={250} height={250} className="xs:w-1/3 xl:w-1/2 md:w-[200px]"></Image>
                    </div>
                    <hr></hr>
                    <div className="flex lg:flex-row justify-around pt-10 sm:flex-col md:flex-row xs:flex-col">
                        <div className="sm:flex sm:flex-col  ">
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
                            <p className="text-xl text-gray-500 sm:mt-5">Carrers</p>
                            <p>carrers@yayantis.com</p>
                        </div>
                    </div>


                    <OurOffice />
                </div>
            </section>


            <Footer className="lg:hidden xl:block md:hidden sm:hidden xs:hidden" />

            {/* Hiển thị FooterRes khi màn hình nhỏ hơn 1024px (lg) */}
            <FooterRes className="lg:block xl:hidden md:block sm:block xs:block" />
        </>
    );
}

import FAQ from "@/components/faq-item";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
import ContactForm from "../home/ContactForm";
import OurOffice from "../home/out-office";
import ItemExpertise from "./item-expertise";
import Banner from "@/components/banner";

export default function ServicesPage() {
    return (
        <>
            <Header />
            <section className="relative flex flex-col justify-center items-center bg-[url('/images/bg-foot.png')] bg-cover bg-center h-[88vh]">
                {/* SVG Path */}
                <svg className="absolute top-40 left-0 w-full h-96 z-10" viewBox="0 0 640 640" xmlns="http://www.w3.org/2000/svg">
                    <path
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        fill-opacity="0"
                        stroke-miterlimit="4"
                        stroke="rgb(255,99,0)"
                        stroke-opacity="1"
                        stroke-width="2"
                        d="M21.51,207.3 C65.94,89.23 177.69,4.54 308.51,3 C308.51,3 308.51,3 308.51,3 C478.34,1 616.03,139.9 616.03,313.26 C616.03,486.61 478.34,628.75 308.51,630.75 C138.69,632.75 1,493.85 1,320.49 C1,280.67 8.26,242.5 21.51,207.3"
                    />
                </svg>

                <div className="text-center px-4 relative z-20">
                    <div className="flex flex-row items-center justify-center">
                        <p className="text-orange-500 font-bold text-7xl">Yalantics</p>
                        <p className="font-bold text-white text-7xl">Services</p>
                    </div>
                    <p className="text-white mt-4 w-1/2 mx-auto text-xl">
                        As an all-around software engineering and outsourcing company, we can help you at any stage of development. Whether you’re creating your product from scratch, modernizing it, or continuously improving it, we have the expertise your business requires.
                    </p>
                </div>
            </section>
            {/* banner */}
            <section className="p-8">
                <Banner className="bg-gradient-orrange" title="LOOKING FOR A RELIABLE SOFTWARE DEVELOPMENT COMPANY?
" content="Build a high-quality FinTech product designed for seamless scaling, active user acquisition, and stable performance under high loads with Yalantis" name="GET IN TOUCH" />
            </section>

            {/* Expertise and competencies */}
            <section className="main-bg">
                <div className="flex flex-row justify-center">
                    <p className="text-orange-500 text-5xl">Expertise </p>
                    <p className="text-white text-5xl ml-2"> and competencies</p>
                </div>

                <div className="flex flex-row bg-gray-200 m-11 p-11">
                    <div className="width-[20%]">
                        <p>Technology excellence</p>
                        <p>Create and enhance your software product with powerful and cost-effective technology</p>
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


            {/* FAQ */}
            <section className="bg-pink-100 justify-center pb-20">
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
            </section>

            {/* Constract form */}
            <section className="flex flex-row bg-[url('/images/bg-foot.png')] bg-cover bg-center pt-20 ">
                <div className="w-1/2 bg-white p-6 rounded-lg shadow-lg mx-10">
                    <ContactForm />
                </div>

                <div className="w-1/2 text-white">
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
                    <div className="flex flex-row justify-around pb-8">
                        <Image src="/images/kpmg.svg" width={250} height={250}></Image>
                        <Image src="/images/toyota.svg" width={250} height={250}></Image>
                        <Image src="/images/hom.svg" width={250} height={250}></Image>
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
            <Footer />
        </>
    );
}

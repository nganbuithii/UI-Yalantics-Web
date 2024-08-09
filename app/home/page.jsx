import Header from "@/components/header";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import CardReadMore from "@/components/card";

export default function HomePage() {
    return (
        <>
            <Header />
            <section className="main-bg flex">
                <div className="w-3/5 p-5 mt-32"> {/* 60% chiều rộng */}
                    <p className="text-orange-500 text-7xl">Software development</p>
                    <p className="text-white text-7xl">company that delivers for</p>
                    <div className="flex justify-center space-x-4 mt-5"> {/* Khoảng cách giữa các hình */}
                        <Image src="/images/a1.png" alt="logo1" width={250} height={250} className="main-bg"></Image>
                        <Image src="/images/a1.png" alt="logo2" width={250} height={250}></Image>
                        <Image src="/images/a1.png" alt="logo3" width={250} height={250}></Image>
                    </div>
                    <Button className="border-2 border-orange-500 bg-orange-500 text-white hover:bg-orange-600 px-6  rounded-full text-lg font-semibold transition duration-300 ease-in-out mx-10 py-7">
                        CONTACT US
                    </Button>
                </div>
                <div className="w-2/5 flex justify-center items-center"> {/* 40% chiều rộng */}
                    <Image src="/images/y.png" alt="y" width={620} height={620}></Image>
                </div>
            </section>

            <section className="flex flex-row main-bg">
                <div className="px-10 py-10">
                    <CardReadMore
                        title={"Developteam augement tation"}
                        items={[
                            "Solutions tailored to specific business needs",
                            "Innovative approaches to problem-solving",
                            "Seamless integration with existing systems"
                        ]}
                    />
                </div>
                <div className="px-10 py-10">
                    <CardReadMore
                        title={"Custom Title Here"}
                        items={[
                            "Solutions tailored to specific business needs",
                            "Innovative approaches to problem-solving",
                            "Seamless integration with existing systems"
                        ]}
                    />
                </div>
                <div className="px-10 py-10">
                    <CardReadMore
                        title={"Custom Title Here"}
                        items={[
                            "Solutions tailored to specific business needs",
                            "Innovative approaches to problem-solving",
                            "Seamless integration with existing systems"
                        ]}
                    />
                </div>
                <div className="px-10 py-10">
                    <CardReadMore
                        title={"Custom Title Here"}
                        items={[
                            "Solutions tailored to specific business needs",
                            "Innovative approaches to problem-solving",
                            "Seamless integration with existing systems"
                        ]}
                    />
                </div>



            </section>


        </>
    );
}

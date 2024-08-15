'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import CardHeader from '@/components/CardHeader';
import { useState, useEffect } from 'react';

export default function Header() {
    const router = useRouter();
    const [isServicesHover, setIsServicesHover] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleClick = () => {
        router.push('/contacts'); // Chuyển hướng đến trang /contacts
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) { // Thay đổi giá trị này theo ý muốn
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header 
            className={`transition-colors duration-300 ease-in-out fixed top-0 left-0 w-full z-50 ${
                isScrolled ? 'main-bg' : 'transparent'
            } text-white shadow-lg pt-5 pb-4
            
            `}
        >
            <div className="flex flex-row justify-around items-center h-16">
                <div className="w-[15%] xl:w-[10%] flex-shrink-0 flex items-center justify-center">
                    <Link href="/home">
                        <Image
                            src="/images/logo_white.svg"
                            alt="Logo"
                            width={130 }
                            height={130}
                            className="object-contain "
                        />
                    </Link>
                </div>

                <div className="flex items-center justify-between h-16">
                    <nav className="flex flex-row items-center space-x-6 mx-auto">
                        <Link
                            onMouseEnter={() => setIsServicesHover(true)}
                            onMouseLeave={() => setIsServicesHover(false)}
                            href="/services"
                            className="link text-white px-4 py-2 rounded-md text-lg font-semibold transition duration-300 ease-in-out"
                        >
                            SERVICES
                        </Link>
                        <Link href="/expertise" className="link text-white px-4 py-2 rounded-md text-lg font-semibold transition duration-300 ease-in-out">
                            EXPERTISE
                        </Link>
                        <Link href="/industries" className="link text-white px-4 py-2 rounded-md text-lg font-semibold transition duration-300 ease-in-out">
                            INDUSTRIES
                        </Link>
                        <Link href="#" className="link text-white px-4 py-2 rounded-md text-lg font-semibold transition duration-300 ease-in-out">
                            SUCCESS STORIES
                        </Link>
                        <Link href="/solution-hub" className="link text-white px-4 py-2 rounded-md text-lg font-semibold transition duration-300 ease-in-out">
                            SOLUTION HUB
                        </Link>
                        <Link href="#" className="link text-white px-4 py-2 rounded-md text-lg font-semibold transition duration-300 ease-in-out">
                            COMPANY
                        </Link>
                        <Link href="#" className="link text-white px-4 py-2 rounded-md text-lg font-semibold transition duration-300 ease-in-out">
                            INSIDE
                        </Link>
                    </nav>
                </div>
                <div className="ml-15">
                    <Button
                        onClick={handleClick}
                        className="border-2 border-orange-500 main-bg text-white hover:bg-orange-600 px-6 py-7 rounded-full text-lg font-semibold transition duration-300 ease-in-out">
                        CONTACT US
                    </Button>
                </div>
            </div>

            {isServicesHover && (
                <div className='main-bg mt-2'>
                    <hr className='text-gray-500'/>
                    <div className='flex flex-row px-20 pb-10 pt-10'>
                        <CardHeader className='bg-[#494b50] w-1/4 p-8 mx-1' title='Custom software development' content='Yalantis has been helping companies in the FinTech, healthcare, real estate, supply chain management, and other industries succeed with custom software solutions. Driven by our clients’ business-specific needs and time' />
                        <CardHeader className='bg-[#494b50] w-1/4 p-8 mx-1' title='Custom software development' content='Yalantis has been helping companies in the FinTech, healthcare, real estate, supply chain management, and other industries succeed with custom software solutions. Driven by our clients’ business-specific needs and time' />
                        <CardHeader className='bg-[#494b50] w-1/4 p-8 mx-1' title='Custom software development' content='Yalantis has been helping companies in the FinTech, healthcare, real estate, supply chain management, and other industries succeed with custom software solutions. Driven by our clients’ business-specific needs and time' />
                        <CardHeader className='bg-[#494b50] w-1/4 p-8 mx-1' title='Custom software development' content='Yalantis has been helping companies in the FinTech, healthcare, real estate, supply chain management, and other industries succeed with custom software solutions. Driven by our clients’ business-specific needs and time' />
                    </div>
                </div>
            )}
        </header>
    );
}

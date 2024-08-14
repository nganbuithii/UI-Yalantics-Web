'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';

export default function Header() {
    const router = useRouter();
    const handleClick = () => {
        router.push('/contacts'); // Chuyển hướng đến trang /contacts
    };
    return (
        <header className="main-bg text-white shadow-lg pt-5 pb-4 fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center space-x-16 justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <Image
                                src="/images/logo_white.svg"
                                alt="Logo"
                                width={130}
                                height={130}
                                className="object-contain"
                            />
                        </Link>
                    </div>
                    <nav className="flex flex-row items-center space-x-6">
                        <Link href="/services" className="text-white hover:text-gray-300 px-4 py-2 rounded-md text-lg font-semibold transition duration-300 ease-in-out">
                            SERVICES
                        </Link>
                        <Link href="/expertise" className="text-white hover:text-gray-300 px-4 py-2 rounded-md text-lg font-semibold transition duration-300 ease-in-out">
                            EXPERTISE
                        </Link>
                        <Link href="/industries" className="text-white hover:text-gray-300 px-4 py-2 rounded-md text-lg font-semibold transition duration-300 ease-in-out">
                            INDUSTRIES
                        </Link>
                        <Link href="#" className="text-white hover:text-gray-300 px-4 py-2 rounded-md text-lg font-semibold transition duration-300 ease-in-out">
                            SUCCESS STORIES
                        </Link>
                        <Link href="#" className="text-white hover:text-gray-300 px-4 py-2 rounded-md text-lg font-semibold transition duration-300 ease-in-out">
                            SOLUTION HUB
                        </Link>
                        <Link href="#" className="text-white hover:text-gray-300 px-4 py-2 rounded-md text-lg font-semibold transition duration-300 ease-in-out">
                            COMPANY
                        </Link>
                        <Link href="#" className="text-white hover:text-gray-300 px-4 py-2 rounded-md text-lg font-semibold transition duration-300 ease-in-out">
                            INSIDE
                        </Link>
                    </nav>
                    <Button
                        onClick={handleClick}
                        className="border-2 border-orange-500 main-bg text-white hover:bg-orange-600 px-6 py-7 rounded-full text-lg font-semibold transition duration-300 ease-in-out">
                        CONTACT US
                    </Button>
                </div>
            </div>
        </header>
    );
}

'use client'
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { IoAttachSharp } from 'react-icons/io5';


export default function ContactForm() {
    return (
        <div className="w-full h-full p-6 rounded-lg pb-20">
            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                    <div>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            className="text-xl w-full border-b-2 border-gray-400 bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none focus:border-yellow-500 p-2 my-5"
                            placeholder="Fullname *"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            className=" text-xl w-full border-b-2 border-gray-400 bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none focus:border-yellow-500 p-2 my-5"
                            placeholder="Email address *"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            className="text-xl w-full border-b-2 border-gray-400 bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none focus:border-yellow-500 p-2 my-5"
                            placeholder="Enter your company"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            id="project"
                            name="project"
                            className="text-xl w-full border-b-2 border-gray-400 bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none focus:border-yellow-500 p-2 my-5"
                            placeholder="About a project *"
                        />
                    </div>
                </div>
                <div>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            className="text-xl w-full border-b-2 border-gray-400 bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none focus:border-yellow-500 p-2"
                            placeholder="Email address *"
                        />
                    </div>
                <div className="flex items-center">
                    <label htmlFor="file-upload" className="flex items-center cursor-pointer">
                        <IoAttachSharp className="text-xl mr-2 text-gray-700" />
                        <p className="text-gray-700 text-lg">Attach the file</p>
                        <input
                            id="file-upload"
                            type="file"
                            className="sr-only"
                            onChange={(e) => console.log(e.target.files[0])}
                        />
                    </label>
                </div>

                <p className="text-gray-600 text-sm">
                    Please upload a file with one of the following extensions: .pdf, .docx, .odt, .ods, .ppt/x, .xls/x, .rtf, .txt
                </p>

                <div className="flex items-center space-x-3">
                    <Checkbox id="terms1" />
                    <label
                        htmlFor="terms1"
                        className="text-sm text-black"
                    >
                        Accept terms and conditions
                    </label>
                </div>

                <div className="flex items-center space-x-3">
                    <Checkbox id="terms2" />
                    <label
                        htmlFor="terms2"
                        className="text-sm text-black"
                    >
                        I agree to receive marketing materials about news, events, and proposals from Yalantis
                    </label>
                </div>

                <Button type="submit" className="w-full bg-orange-500 text-white py-2 rounded-full hover:bg-orange-600 focus:outline-none p-6">
                    SEND A MESSAGE
                </Button>
            </form>
        </div>
    );
}

import React from 'react'
import { Link } from 'react-router-dom'
import { SlLocationPin, SlPhone, SlEnvolope } from 'react-icons/sl'

const Footer = () => {
    return (
        <footer className="text-gray-500 body-font bg-gray-900 mt-16">
            <div className="w-full lg:w-10/12 mx-auto px-5 pt-24 pb-16 flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <Link to="/" className="flex title-font font-medium items-center md:justify-start justify-center text-white text-xl lg:text-3xl">JobCrushers
                    </Link>
                    <p className="my-5 text-sm text-gray-500">There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>

                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <a className="text-gray-500">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span>
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-white tracking-widest text-base md:text-xl mb-4">Company</h2>
                        <nav className="list-none mb-10 space-y-3">
                            <li>
                                <a className="text-gray-500">About Us</a>
                            </li>
                            <li>
                                <a className="text-gray-500">Work</a>
                            </li>
                            <li>
                                <a className="text-gray-500">Latest News</a>
                            </li>
                            <li>
                                <a className="text-gray-500">Careers</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-white tracking-widest text-base md:text-xl mb-4">Product</h2>
                        <nav className="list-none mb-10 space-y-3">
                            <li>
                                <a className="text-gray-500">Prototype</a>
                            </li>
                            <li>
                                <a className="text-gray-500">Plans & Pricing</a>
                            </li>
                            <li>
                                <a className="text-gray-500">Customer</a>
                            </li>
                            <li>
                                <a className="text-gray-500">Integration</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-white tracking-widest text-base md:text-xl mb-4">Support</h2>
                        <nav className="list-none mb-10 space-y-3">
                            <li>
                                <a className="text-gray-500">Help Desk</a>
                            </li>
                            <li>
                                <a className="text-gray-500">Sales</a>
                            </li>
                            <li>
                                <a className="text-gray-500">Become a Partner</a>
                            </li>
                            <li>
                                <a className="text-gray-500">Developer</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-white tracking-widest text-base md:text-xl mb-4">Contact</h2>
                        <nav className="list-none mb-10 space-y-3">
                            <p className="text-gray-500 flex items-center gap-2 justify-center md:justify-start ">
                                <SlLocationPin /> <span>Dhaka, Bangladesh</span>
                            </p>
                            <p className="text-gray-500 flex items-center gap-2 justify-center md:justify-start ">
                                <SlPhone /> <span>+880 115 033 8042</span>
                            </p>
                            <p className="text-gray-500 flex items-center gap-2 justify-center md:justify-start ">
                                <SlEnvolope /> <span>info@gmail.com</span>
                            </p>
                        </nav>
                    </div>
                </div>

            </div>


            <div className="w-full lg:w-10/12 mx-auto px-5 border-t pt-16 pb-20">
                <div className="flex flex-wrap flex-col sm:flex-row justify-between">
                    <p className="text-gray-500 text-sm text-center sm:text-left">© 2023 JobCrushers — All Rights Reserved</p>
                    <p className="text-gray-500 text-sm text-center sm:text-left">Powered by JobCrushers</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
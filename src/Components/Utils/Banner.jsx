import React from 'react'

const Banner = () => {
    return (
        <>
            <section className="text-gray-600 body-font relative bg-blue-50 mb-16">
                <div className="pt-24 md:pt-0 w-full lg:w-10/12 mx-auto flex px-5 md:flex-row flex-col items-center">
                    <div className=" md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl lg:text-6xl text-3xl mb-4 font-medium lg:font-bold text-gray-900">
                            One Step <br className="hidden lg:inline-block" /> Closer To Your <br className="hidden lg:inline-block" />  <span className="text-blue-500">Dream Job</span>
                        </h1>
                        <p className="mb-8 text-lg leading-relaxed font-medium">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-blue-500 border-0 py-3 px-6 focus:outline-none hover:bg-blue-600 rounded text-md  lg:text-xl font-medium ">Get Started</button>

                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 lg:ml-auto">
                        <img className="object-cover object-center rounded" alt="hero" src="https://i.ibb.co/jDQM9hy/hero.png" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner
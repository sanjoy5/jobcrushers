import React from 'react'
import { SlLocationPin } from 'react-icons/sl'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const FeaturedJobs = ({ jobsData, seeMorejobs, toggleBtn }) => {
    return (
        <section className='py-16'>

            <h1 className="sm:text-3xl lg:text-4xl text-2xl font-medium lg:font-semibold title-font text-gray-900 mb-4 text-center">Featured Jobs</h1>
            <p className="text-base w-11/12 mx-auto text-center font-medium text-gray-500">Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full lg:w-10/12 mx-auto mt-10 px-5">

                {
                    jobsData?.map(jobs => {
                        const { id, company_logo, job_title, company_name, remote_or_onsite, location, fulltime_or_parttime, salary } = jobs;
                        return (

                            <div key={id} className="border rounded p-5 lg:p-10">
                                <img src={company_logo} alt={company_name} className="w-28 h-10 object-contain" />
                                <h2 className="mt-8 text-xl font-medium md:text-2xl md:font-semibold mb-2">{job_title}</h2>
                                <p className="text-lg md:text-xl text-gray-500 font-medium mb-5">{company_name}</p>

                                <span className="py-2 px-4 text-base font-medium border-2 rounded border-blue-500 text-blue-500 leading-none mr-4">{remote_or_onsite}</span>
                                <span className="py-2 px-4 text-base font-medium border-2 rounded border-blue-500 text-blue-500 leading-none mr-4">{fulltime_or_parttime}</span>

                                <div className="flex flex-col lg:flex-row flex-wrap lg:items-center gap-1 lg:gap-4 mt-5 mb-7">
                                    <div className='flex items-center text-lg md:text-xl gap-2 text-gray-500 font-medium'>
                                        <SlLocationPin /> <span className="">{location}</span>
                                    </div>

                                    <div className='flex items-center text-lg md:text-xl gap-2 text-gray-500 font-medium'>
                                        <AiOutlineDollarCircle /> <span className="">Salary : {salary}</span>
                                    </div>

                                </div>

                                <Link to={`/job-details/${id}`} className='py-3 px-5 rounded bg-blue-500 text-white text-lg md:text-xl font-medium leading-none'>View Details</Link>
                            </div>
                            // py-3 px-5 rounded bg-blue-500 text-white text-lg md:text-xl font-medium leading-none

                        )
                    })
                }

            </div>

            <div className="text-center">
                <button onClick={seeMorejobs} className={toggleBtn ? 'hidden' : 'mt-16 inline-flex items-center bg-blue-500 border-0 py-3 px-6 focus:outline-none text-white hover:bg-blue-600 rounded text-xl font-medium'} >See All Jobs
                </button>
            </div>
        </section>
    )
}

export default FeaturedJobs
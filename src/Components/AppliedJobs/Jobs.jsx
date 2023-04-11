import React from 'react'
import { SlLocationPin } from 'react-icons/sl'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Jobs = ({ jobs }) => {
    const { id, company_name, company_logo, job_title, remote_or_onsite, fulltime_or_parttime, salary, location } = jobs;
    return (
        <>

            <div className="border p-5 md:p-8 rounded-md my-6">
                <div className="flex flex-wrap items-center justify-center sm:justify-between sm:gap-10">
                    <div className="flex items-center flex-wrap gap-8">

                        <div className="w-60 h-60 rounded-md bg-gray-100 flex items-center justify-center mx-auto">
                            <img src={company_logo} className='w-36 h-12 object-contain' alt="" />
                        </div>

                        <div className="text-center sm:text-left mx-auto">
                            <h2 className="text-xl md:text-2xl font-medium">{job_title}</h2>

                            <h2 className="text-gray-500 text-xl md:text-2xl mt-2 mb-5">{company_name}</h2>

                            <span className="py-2 px-4 text-base font-medium border-2 rounded border-blue-500 text-blue-500 leading-none mr-4">{remote_or_onsite}</span>
                            <span className="py-2 px-4 text-base font-medium border-2 rounded border-blue-500 text-blue-500 leading-none mr-4">{fulltime_or_parttime}</span>

                            <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-6 mt-5 mb-7">
                                <div className='flex items-center text-lg md:text-xl gap-2 text-gray-500 font-medium mx-auto sm:mx-0'>
                                    <SlLocationPin /> <span className="">{location}</span>
                                </div>

                                <div className='flex items-center text-lg md:text-xl gap-2 text-gray-500 font-medium mx-auto sm:mx-0'>
                                    <AiOutlineDollarCircle /> <span className="">Salary : {salary}</span>
                                </div>

                            </div>
                        </div>

                    </div>


                    <Link to={`/job-details/${id}`} className="inline-flex text-white bg-blue-500 border-0 py-3 px-6 focus:outline-none hover:bg-blue-600 rounded text-md  lg:text-xl font-medium">View Details</Link>

                </div>
            </div>

        </>
    )
}

export default Jobs
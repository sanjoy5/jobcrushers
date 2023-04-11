import React from 'react'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { RxCalendar } from 'react-icons/rx'
import { SlLocationPin, SlPhone, SlEnvolope } from 'react-icons/sl'

const JobDetails = ({ jobDetails, addDatatoLocalStorage }) => {

    const { id, job_title, salary, location, job_description, job_responsibility, educational_requirements, experiences, contact_information } = jobDetails;

    return (
        <div className='w-full lg:w-10/12 mx-auto px-5 pt-28 pb-16'>


            <div className="grid grid-cols-1 lg:grid-cols-10 gap-10">


                <div className="col-span-full lg:col-span-6">
                    <p className="text-gray-600 mb-8 text-justify"> <strong className='text-gray-900'>Job Description</strong> {job_description} </p>
                    <p className="text-gray-600 mb-8 text-justify"> <strong className='text-gray-900'>Job Responsibility</strong> {job_responsibility} </p>
                    <p className="text-gray-900 mb-4 text-justify font-semibold"> Educational Requirements:</p>
                    <p className="text-gray-600 mb-8 text-justify"> {educational_requirements} </p>
                    <p className="text-gray-900 mb-4 text-justify font-semibold">Experiences:</p>
                    <p className="text-gray-600 mb-8 text-justify"> {experiences} </p>
                </div>




                <div className="col-span-full lg:col-span-4">
                    <div className="p-5 md:p-8 rounded-md bg-blue-100">
                        <h2 className="text-xl font-semibold pb-5 border-b border-blue-200">Job Details</h2>

                        <p className="flex items-center gap-2 text-base md:text-lg mt-6">
                            <AiOutlineDollarCircle className='text-blue-600 text-xl' />
                            <strong>Salary :</strong> <span className="text-gray-600">{salary}</span>
                        </p>

                        <p className="flex items-center gap-2 text-base md:text-lg mt-4">
                            <RxCalendar className='text-blue-600 text-xl' />
                            <strong>Job Title :</strong> <span className="text-gray-600">{job_title}</span>
                        </p>

                        <h2 className="text-xl font-semibold pb-5 border-b border-blue-200 mt-8">Contact Information</h2>

                        <p className="flex items-center gap-2 text-base md:text-lg mt-6">
                            <SlPhone className='text-blue-600 text-xl' />
                            <strong>Phone :</strong> <span className="text-gray-600">{contact_information?.phone}</span>
                        </p>

                        <p className="flex items-center gap-2 text-base md:text-lg mt-4">
                            <SlEnvolope className='text-blue-600 text-xl' />
                            <strong>Email :</strong> <span className="text-gray-600">{contact_information?.email}</span>
                        </p>
                        <p className="flex items-center gap-2 text-base md:text-lg mt-4">
                            <SlLocationPin className='text-blue-600 text-xl' />
                            <strong>Address :</strong> <span className="text-gray-600">{location}</span>
                        </p>
                    </div>

                    <button onClick={() => addDatatoLocalStorage(id)} className="bg-blue-500 mt-6 font-medium py-3 w-full text-center rounded-md text-white text-xl">Apply Now</button>

                </div>
            </div>

        </div>
    )
}

export default JobDetails
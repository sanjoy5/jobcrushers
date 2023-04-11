import React from 'react'
import Jobs from './Jobs'


const AppliedJob = ({ filteredData, sorting }) => {



    return (
        <>

            <div className="w-full h-32 md:h-48 flex items-center justify-center bg-blue-100 relative">
                <h2 className="text-2xl lg:text-4xl font-semibold">Applied Jobs</h2>
            </div>


            <div className='w-full lg:w-10/12 mx-auto px-5 pt-28 pb-16'>

                <div className="flex justify-end">
                    <select onChange={sorting} name="filter" id="filter" className='border-0 bg-gray-100 py-3 px-5 rounded outline-none text-lg text-gray-800 font-medium'>
                        <option value="all">Filter By</option>
                        <option value="Remote">Remote Jobs</option>
                        <option value="Onsite">Onsite Jobs</option>
                    </select>
                </div>

                <div className="mt-2">

                    {
                        filteredData?.map(jobs => {
                            return (
                                <Jobs key={jobs.id} jobs={jobs} ></Jobs>
                            )
                        })
                    }


                </div>

            </div>

        </>
    )
}

export default AppliedJob
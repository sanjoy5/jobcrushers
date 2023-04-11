import React, { useEffect, useState } from 'react'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import JobDetails from './JobDetails';
import toast from 'react-hot-toast';


const FeaturedJobsDetails = () => {

    const featurejobsdetails = useLoaderData()
    const [jobDetails, setJobDetails] = useState({})
    const { jobid } = useParams()

    const navigate = useNavigate()

    const addDatatoLocalStorage = (id) => {
        const previousJobId = JSON.parse(localStorage.getItem('jobsid'))
        if (previousJobId) {
            if (previousJobId.includes(id)) {
                toast('Already Applied...!!!')
                return
            } else {
                localStorage.setItem('jobsid', JSON.stringify([...previousJobId, id]))
                navigate('/appliedjobs')
            }
        } else {
            localStorage.setItem('jobsid', JSON.stringify([id]))
            navigate('/appliedjobs')
        }
    }


    useEffect(() => {
        const data = featurejobsdetails?.find(job => job.id === parseInt(jobid))
        setJobDetails(data)
    }, [jobid])

    return (
        <>
            <div className="w-full h-32 md:h-48  flex items-center justify-center bg-blue-100 relative">
                <h2 className="text-2xl lg:text-4xl font-semibold">Job Details</h2>
            </div>

            <JobDetails jobDetails={jobDetails} addDatatoLocalStorage={addDatatoLocalStorage}></JobDetails>


        </>
    )
}

export default FeaturedJobsDetails
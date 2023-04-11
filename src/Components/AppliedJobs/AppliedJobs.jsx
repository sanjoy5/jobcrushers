import React, { useEffect, useState } from 'react'
import AppliedJob from './AppliedJob'
import { useLoaderData } from 'react-router-dom'



const AppliedJobs = () => {
    const alljobs = useLoaderData()

    const addedJobData = JSON.parse(localStorage.getItem('jobsid'))

    const appliedjobs = []
    if (addedJobData) {
        for (const id of addedJobData) {
            const applied = alljobs.find(data => data.id == id)
            appliedjobs.push(applied)
        }
    }

    const [filterJobData, setFilterJobData] = useState(appliedjobs)
    const [filter, setFilter] = useState('all');


    const sorting = (e) => {
        setFilter(e.target.value)
    }

    function filterData() {
        if (filter === 'all') {
            return filterJobData;
        } else {
            return filterJobData.filter(item => item.remote_or_onsite === filter);
        }
    }

    const filteredData = filterData();



    return (
        <>
            <AppliedJob filteredData={filteredData} sorting={sorting}></AppliedJob>
        </>
    )
}

export default AppliedJobs
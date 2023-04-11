import React, { useEffect, useState } from 'react'
import Banner from '../Utils/Banner'
import Category from '../Category/Category'
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs'
import { useLoaderData } from 'react-router-dom'

const Home = () => {

    const featuredjobs = useLoaderData()

    const [categories, setCategories] = useState([])
    const [jobsData, setJobsData] = useState(featuredjobs.slice(0, 4))
    const [toggleBtn, setToggleBtn] = useState(false)

    const seeMorejobs = () => {
        setJobsData(featuredjobs)
        setToggleBtn(true)
    }

    useEffect(() => {
        const getCatdata = async () => {
            const res = await fetch('category.json')
            const category = await res.json()
            // console.log('Category : ', category);
            setCategories(category)
        }
        getCatdata()
    }, [])





    return (
        <>
            {/* Banner  */}
            <Banner></Banner>

            {/* Categories  */}
            <Category categories={categories}></Category>

            {/* Featured Jobs  */}
            <FeaturedJobs jobsData={jobsData} seeMorejobs={seeMorejobs} toggleBtn={toggleBtn}></FeaturedJobs>

        </>
    )
}

export default Home
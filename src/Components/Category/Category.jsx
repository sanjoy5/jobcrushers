import React from 'react'

const Category = ({ categories }) => {
    return (
        <section className='py-16'>

            <h1 className="sm:text-3xl lg:text-4xl text-2xl font-medium lg:font-semibold title-font text-gray-900 mb-4 text-center">Job Category List</h1>
            <p className="text-base w-11/12 mx-auto text-center font-medium text-gray-500">Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full lg:w-10/12 mx-auto mt-10 px-5">

                {
                    categories?.map(category => {
                        const { id, category_logo, category_name, jobs_available } = category
                        return (
                            <div key={id} className="p-6 md:p-10 rounded bg-blue-50">
                                <div className="p-4 bg-blue-100 inline-block rounded">
                                    <img src={category_logo} className='w-10 h-10' alt={category_name} border="0" />
                                </div>
                                <div className="pt-5">
                                    <h2 className="text-xl font-medium lg:font-semibold">{category_name}</h2>
                                    <p className="text-gray-500 mt-2 font-medium">{jobs_available}</p>
                                </div>
                            </div>
                        )
                    })
                }




            </div>
        </section>
    )
}

export default Category
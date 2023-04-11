import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { PieChart, Pie, Sector, Cell, } from 'recharts';



const Statistics = () => {

    const assignmentMarks = useLoaderData()
    console.log('assignmentMarks: ', assignmentMarks);


    return (
        <>
            <div className="w-full h-32 md:h-48  flex items-center justify-center bg-blue-100 relative">
                <h2 className="text-2xl lg:text-4xl font-semibold">Statistics</h2>
            </div>

            <div className='w-full lg:w-10/12 mx-auto pt-28 pb-16'>

                <ResponsiveContainer width="100%" height={400}>
                    <AreaChart
                        data={assignmentMarks}
                        margin={{
                            top: 10,
                            right: 30,
                            left: -20,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="assignment-marks" stroke="#2563EB" fill="#2563EB" />
                    </AreaChart>

                </ResponsiveContainer>

            </div >
        </>
    )
}

export default Statistics
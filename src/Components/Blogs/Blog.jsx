import React from 'react'

const Blog = () => {
    return (
        <>
            <div className="w-full h-32 md:h-48  flex items-center justify-center bg-blue-100 relative">
                <h2 className="text-2xl lg:text-4xl font-semibold">Blogs</h2>
            </div>


            <div className='w-full lg:w-10/12 mx-auto px-5 pt-28 pb-16'>

                <div className="">
                    <h2 className="text-xl md:text-3xl font-medium text-blue-500">Qus: When we use Context API ? </h2>
                    <p className="text-gray-600 text-lg mt-5"><span className="font-medium">Answer:  </span> In big project when we want to send data to any file or component without using props then  we use Context API. By using Context api we can easily send data to the down child component and any component without facing any props drilling issue.  </p>
                </div>

                <div className="mt-10">
                    <h2 className="text-xl md:text-3xl font-medium text-blue-500">Qus: What is Coustom Hook ? </h2>
                    <p className="text-gray-600 text-lg mt-5"><span className="font-medium">Answer: </span>The main reason to write a custom hook is for code reusability. Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications.</p>
                </div>

                <div className="mt-10">
                    <h2 className="text-xl md:text-3xl font-medium text-blue-500">Qus: What is useRef ? </h2>
                    <p className="text-gray-600 text-lg mt-5"><span className="font-medium">Answer: </span>useRef hook is part of the React Hooks API. It is a function which takes a maximum of one argument and returns an Object. The returned object has a property called current whose value is the argument passed to useRef.</p>
                </div>

                <div className="mt-10">
                    <h2 className="text-xl md:text-3xl font-medium text-blue-500">Qus: What is useMemo ? </h2>
                    <p className="text-gray-600 text-lg mt-5"><span className="font-medium">Answer: </span>The basic purpose of useMemo hook is related to the fact that we try to avoid the unnecessary re-rendering of components and props in our program, so we make sure that only those components are re-rendered which witness a change in their values otherwise no need to re-render the component and slow down the performance, this will make your program efficient and improves the overall performance of your React app.</p>
                </div>

            </div>
        </>
    )
}

export default Blog
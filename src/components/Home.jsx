import React from 'react'

import {Link} from 'react-router-dom'

export const Home = () => {
    return (
        <section className='bg-gray-200 h-[100vh] py-4  flex flex-col items-center'>
            <p className='max-w-[600px] font-[16px] p-2 px-5'>
                Hi, I'm Oduyale Enoch, a front end developer. Welcome to my API hub. Herein, you get to see the list of API projects I've worked on using Reactjs.
                Feel free to play around.
            </p>

            <ol className='mt-4 list-disc'>
                <li>
                    <Link className='underline' to="/github">Github Search API</Link>
                </li>
                <li>
                    <Link className='underline' to="/Weather">Weather API</Link>
                </li>

                <li>
                    <Link className='underline' to="/lat-and-lon">Lat and Lon Checker</Link>
                </li>

                <li>
                    <Link className='underline' to="/mealdb">Meal database</Link>
                </li>
            </ol>

            <em className='mt-4'>More coming soon</em>


        </section>
    )
}

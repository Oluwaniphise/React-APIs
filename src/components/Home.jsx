import React from 'react'

import {Link} from 'react-router-dom'

export const Home = () => {
    return (
        <section className='bg-gray-200 h-[100vh] py-4 text-center flex flex-col items-center'>
            <p className='max-w-[600px] font-[18px] p-2 px-5'>
                Hi, Welcome to my API hub. Herein, you get to see the list of API projects I've worked on using Reactjs.
                Feel free to play around.
            </p>

            <ul className='mt-4'>
                <li>
                    <Link className='underline' to="/Weather">Weather API</Link>
                </li>

                <li>
                    <Link className='underline' to="/lat-and-lon">Lat and Lon Checker</Link>
                </li>
            </ul>

            <em className='mt-4'>More coming soon</em>


        </section>
    )
}

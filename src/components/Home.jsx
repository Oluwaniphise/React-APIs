import React from 'react'

import {Link} from 'react-router-dom'

export const Home = () => {
    return (
        <section className='bg-gray-200 py-4 text-center flex flex-col items-center'>
            <p className='max-w-[600px]'>
                Hi, Welcome to my API hub. Herein, you get to see the list of API projects I've worked on using Reactjs.
                Feel free to play around.
            </p>

            <ul className=''>
                <li>
                    <Link className='underline' to="/Weather">Weather API</Link>
                </li>

                <li>
                    <Link className='underline' to="/lat-and-lon">Lat and Lon Checker</Link>
                </li>
            </ul>



        </section>
    )
}
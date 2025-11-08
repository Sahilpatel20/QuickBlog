import React from 'react'
import { assets, footer_data } from '../assets/assets'

const Footer = () => {
    return (
        <div className='px-6 md:px-16 lg:px-24 xl:px-32 bg-[#f9f9ff]'>
            {/* Top Section */}
            <div className='flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-300 text-gray-600'>
                {/* Logo and Description */}
                <div className='md:w-[35%]'>
                    <img src={assets.logo} alt='logo' className='w-32 sm:w-44' />
                    <p className='max-w-[410px] mt-6 leading-relaxed'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum unde
                        quaerat eveniet cumque accusamus atque qui error quo enim fugiat?
                    </p>
                </div>

                {/* Footer Links */}
                <div className='flex flex-wrap justify-between md:w-[60%] w-full gap-8'>
                    {footer_data.map((section, index) => (
                        <div key={index} className='min-w-[150px]'>
                            <h3 className='font-semibold text-base text-gray-900 mb-3'>
                                {section.title}
                            </h3>
                            <ul className='text-sm space-y-1'>
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <a
                                            href='#'
                                            className='hover:underline transition text-gray-600 hover:text-primary'
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Section */}
            <p className='py-4 text-center text-sm md:text-base text-gray-500'>
                Copyright 2025 © <span className='text-primary font-medium'>QuickBlog</span> Sahil Patel – All Rights Reserved.
            </p>
        </div>
    )
}

export default Footer

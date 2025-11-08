import React from 'react'
import { useNavigate } from 'react-router-dom'

const BlogCard = ({ blog }) => {
    const { title, description, category, image, _id } = blog
    const navigate = useNavigate()

    const handleClick = () => {
        console.log('BlogCard clicked:', _id)
        navigate(`/blog/${_id}`)
    }

    return (
        <div
            onClick={handleClick}
            className='blog-card relative w-full bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer border border-gray-100 z-10 pointer-events-auto'
        >
            <div className='w-full h-48 overflow-hidden'>
                <img
                    src={image}
                    alt={title}
                    className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
                    style={{ pointerEvents: 'none' }}  // ensures click registered on parent
                />
            </div>

            <div className='p-5'>
                <span
                    className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${{
                            Technology: 'bg-purple-100 text-purple-700',
                            Startup: 'bg-pink-100 text-pink-700',
                            Lifestyle: 'bg-blue-100 text-blue-700',
                            Finance: 'bg-yellow-100 text-yellow-700',
                        }[category] || 'bg-gray-100 text-gray-700'
                        }`}
                >
                    {category}
                </span>

                <h5 className='mt-3 mb-2 font-semibold text-gray-900 line-clamp-2'>
                    {title}
                </h5>
                <p
                    className='text-xs text-gray-600 line-clamp-3'
                    dangerouslySetInnerHTML={{
                        __html: description?.slice(0, 100) + (description.length > 100 ? '...' : ''),
                    }}
                ></p>
            </div>
        </div>
    )
}

export default BlogCard

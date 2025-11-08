import React, { useEffect, useState } from 'react'
import { blog_data, comments_data, assets } from '../assets/assets'
import { useParams } from 'react-router-dom'
import Moment from 'moment'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Loader from '../components/Loader'

const Blog = () => {
    const { id } = useParams()
    const [data, setData] = useState(null)
    const [comments, setComments] = useState([])
    const [name, setName] = useState('')
    const [content, setContent] = useState('')
    const FetchBlogData = async () => {
        const blog = blog_data.find((item) => item._id === id)
        setData(blog)
    }
    const FetchComments = async () => {
        setComments(comments_data)
    }
    const addComment = (e) => {
        e.preventDefault()
    }

    useEffect(() => {
        FetchBlogData()
        FetchComments()
    }, [])

    if (!data) return <Loader />

    return (
        <div className="relative bg-gradient-to-b from-white via-primary/5 to-white min-h-screen">
            {/* Background */}
            <img
                src={assets.gradientBackground}
                alt=""
                className="absolute top-0 left-0 w-full h-full object-cover opacity-40 -z-10 blur-[2px]"
            />

            <Navbar />

            {/* Blog Header */}
            <div className="text-center mt-28 text-gray-700 px-6 md:px-20">
                <p className="text-primary py-3 text-sm font-medium tracking-wide">
                    Published on{' '}
                    <span className="font-semibold text-gray-800">
                        {Moment(data.createdAt).format('MMMM Do YYYY')}
                    </span>
                </p>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold max-w-3xl mx-auto text-gray-900 leading-snug">
                    {data.title}
                </h1>
                <h2 className="my-4 text-base sm:text-lg text-gray-500 max-w-2xl mx-auto italic">
                    {data.subTitle}
                </h2>
                <p className="inline-block py-1.5 px-5 rounded-full mb-6 border border-primary/30 bg-primary/10 text-sm font-medium text-primary shadow-sm hover:bg-primary/20 transition-all duration-300">
                    ✍️ Michael Brown
                </p>
                <div className="w-24 h-[2px] bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full"></div>
            </div>

            {/* Blog Body */}
            <div className="mx-5 max-w-5xl md:mx-auto my-12">
                <img
                    src={data.image}
                    alt={data.title}
                    className="rounded-3xl mb-8 shadow-lg hover:shadow-2xl transition-all duration-500"
                />

                <div
                    className="rich-text max-w-3xl mx-auto text-gray-700 leading-relaxed text-[15px]"
                    dangerouslySetInnerHTML={{ __html: data.description }}
                ></div>

                {/* Comments Section */}
                <div className="max-w-3xl mx-auto mt-16 border-t border-gray-200 pt-8">
                    <p className="font-semibold mb-4 text-gray-800 text-lg">
                        Comments ({comments.length})
                    </p>

                    <div className="flex flex-col gap-4">
                        {comments.map((item, index) => (
                            <div
                                key={index}
                                className="relative bg-primary/5 border border-primary/10 p-4 rounded-lg text-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <img
                                        src={assets.user_icon}
                                        alt="user"
                                        className="w-6 h-6 rounded-full object-cover"
                                    />
                                    <p className="font-medium text-sm text-gray-800">{item.name}</p>
                                </div>
                                <p className="text-sm leading-relaxed ml-8">{item.content}</p>
                                <div className="absolute right-4 bottom-3 text-xs text-gray-500">
                                    {Moment(item.createdAt).fromNow()}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Add Comment Section */}
                    <div className="mt-12">
                        <p className="font-semibold mb-4 text-gray-800 text-lg">Add your comment</p>
                        <form
                            onSubmit={addComment}
                            className="flex flex-col items-start gap-4 max-w-lg w-full"
                        >
                            <input
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                type="text"
                                placeholder="Your Name"
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                            />

                            <textarea
                                onChange={(e) => setContent(e.target.value)}
                                value={content}
                                placeholder="Write your comment..."
                                className="w-full p-3 border border-gray-300 rounded-lg outline-none h-40 resize-none focus:ring-2 focus:ring-primary/50 transition-all"
                                required
                            ></textarea>

                            <button
                                type="submit"
                                className="bg-primary text-white rounded-lg px-6 py-2 font-medium hover:scale-105 hover:bg-primary/90 transition-all cursor-pointer shadow-md"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>

                {/* Share Section */}
                <div className="my-24 max-w-3xl mx-auto text-center">
                    <p className="font-semibold text-gray-800 mb-4 text-lg">
                        Share this article on social media
                    </p>

                    <div className="flex justify-center gap-6">
                        <img
                            src={assets.facebook_icon}
                            width={40}
                            alt="Facebook"
                            className="cursor-pointer hover:scale-110 transition-transform duration-300 hover:opacity-80"
                        />
                        <img
                            src={assets.twitter_icon}
                            width={40}
                            alt="Twitter"
                            className="cursor-pointer hover:scale-110 transition-transform duration-300 hover:opacity-80"
                        />
                        <img
                            src={assets.googleplus_icon}
                            width={40}
                            alt="Google+"
                            className="cursor-pointer hover:scale-110 transition-transform duration-300 hover:opacity-80"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Blog

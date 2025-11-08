import React from 'react'

const Loader = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-white">
            {/* Animated Spinner */}
            <div className="relative flex items-center justify-center">
                <div className="w-14 h-14 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                <span className="absolute text-primary font-semibold text-lg animate-pulse">
                    QB
                </span>
            </div>

            {/* Loading Text */}
            <p className="mt-6 text-gray-600 font-medium tracking-wide animate-fadeIn">
                Loading, please wait...
            </p>
        </div>
    )
}

export default Loader

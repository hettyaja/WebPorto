import React from 'react'

export default function Aboutme() {
  return (
    <div className=''>
        {/* ini section atas */}
        <div>
            {/* ini section about us */}
            <div className='ml-24'>
               <h1 className='text-4xl font-extrabold mb-2'>About</h1>
               <h1 className='text-4xl font-extrabold'>Me</h1>
            </div>
            {/* desc */}
            <div className = "w-150 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none">
                <p className="text-base ">
                    I enjoy creating user-friendly and visually appealing solutions, combining my technical skills with a creative mindset.
                </p>
                <p className="text-base ">
                    With hands-on experience in mobile development, I thrive in building responsive and interactive applications.
                </p>
                <p className="text-base">
                    I’m eager to continue learning and growing as I contribute to impactful projects.
                </p>
            </div>
        </div>
        
    </div>  
  )
}

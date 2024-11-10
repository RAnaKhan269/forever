import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler=(event)=> {
        event.preventDefault();
    }

  return (
    <div className='text-center'>
        <p className='tex-2xl font-medium text-gray-800'>Subscibe now & 20% off</p>
        <p className='text-gray-400 mt-3'>We offer a seamless and convenient exchange policy for a hassle-free shopping experience.</p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input type="email" placeholder="Enter your email" className="w-full sm:flex-1 outline-none" required/>
            <button type="submit" className="bg-black text-white text-xs px-10 py-4">SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsletterBox;
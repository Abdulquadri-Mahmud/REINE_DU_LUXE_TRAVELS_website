import React from 'react'
import {FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaXTwitter } from 'react-icons/fa6'

export default function Social_medial() {
  return (
    <div className='fixed left-0 top-[17rem] hidden md:block'>
        <div className="flex flex-col">
            <div className="w-10 h-10 bg-blue-500 text-white py-3 flex items-center justify-center">
                <FaFacebookF/>
            </div>
            <div className="w-10 h-10 bg-blue-400 text-white py-3 flex items-center justify-center">
                <FaXTwitter/>
            </div>
            <div className="w-10 h-10 bg-blue-300 text-red-500 py-3 flex items-center justify-center">
                <FaPinterestP />
            </div>
            <div className="w-10 h-10 bg-blue-200 text-blue-500 py-3 flex items-center justify-center">
            <FaLinkedinIn />
            </div>
            <div className="w-10 h-10 bg-blue-100 text-red-500 py-3 flex items-center justify-center">
                <FaInstagram/>
            </div>
        </div>
    </div>
  )
}

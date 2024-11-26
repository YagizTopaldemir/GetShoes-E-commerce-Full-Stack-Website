import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";


import shoesimg from "../images/homepageshoes.jpg"

export default function Footer() {
  return (
    <footer className="bg-[#000] text-gray-400  mt-10 pb-10">
      <div className='w-[100%] h-[50vh] flex justify-center items-center'>
        <h1 className='absolute z-10 text-white tracking-[30px] text-[5em] font-semibold'>GETSHOES</h1>
      <img src={shoesimg} className='w-full h-full object-cover  ' /> 
      </div>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 mt-10">
        <div>
          <h3 className="text-white font-semibold mb-4">ABOUT</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Submit an issue</a></li>
            <li><a href="#" className="hover:text-white">GitHub Repo</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">GETTING STARTED</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Introduction</a></li>
            <li><a href="#" className="hover:text-white">Documentation</a></li>
            <li><a href="#" className="hover:text-white">Usage</a></li>
            <li><a href="#" className="hover:text-white">Globals</a></li>
            <li><a href="#" className="hover:text-white">Elements</a></li>
            <li><a href="#" className="hover:text-white">Collections</a></li>
            <li><a href="#" className="hover:text-white">Themes</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">RESOURCES</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">API</a></li>
            <li><a href="#" className="hover:text-white">Form Validations</a></li>
            <li><a href="#" className="hover:text-white">Visibility</a></li>
            <li><a href="#" className="hover:text-white">Accessibility</a></li>
            <li><a href="#" className="hover:text-white">Community</a></li>
            <li><a href="#" className="hover:text-white">Design Defined</a></li>
            <li><a href="#" className="hover:text-white">Marketplace</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">SOCIAL MEDIA</h3>
          <p>Follow us on social media to find out the latest updates on our progress.</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"><FaSquareXTwitter /></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-github"><AiFillInstagram /></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook"><FaFacebookSquare /></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-dribbble"><FaYoutube /></i>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-6 text-center">
        <p>© 2024 GetShoes. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Security</a>
          <a href="#" className="hover:text-white">Sitemap</a>
        </div>
      </div>
    </footer>
  )
}

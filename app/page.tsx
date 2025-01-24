"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react"
import { DragCards } from "@/components/ourworks";


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a className="text-3xl font-bold text-teal-500" href="#">
          BimsArt
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <a href="#home" className="text-white hover:text-teal-400 transition duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#gallery" className="text-white hover:text-teal-400 transition duration-300">
                Gallery
              </a>
            </li>
            <li>
              <a href="#about" className="text-white hover:text-teal-400 transition duration-300">
                About
              </a>
            </li>
            <li>
              <a href="#works" className="text-white hover:text-teal-400 transition duration-300">
                Works
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white hover:text-teal-400 transition duration-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Desktop Order Now Button */}
        <a
          href="https://www.instagram.com/bimsarts_/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-600 transition"
        >
          Order Now
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="absolute top-full left-0 w-full bg-gray-800 md:hidden">
            <ul className="flex flex-col space-y-4 p-6">
              <li>
                <a href="#home" className="text-white hover:text-teal-400 transition duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-white hover:text-teal-400 transition duration-300">
                  Gallery
                </a>
                </li>
              <li>
                <a href="#about" className="text-white hover:text-teal-400 transition duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#works" className="text-white hover:text-teal-400 transition duration-300">
                  Works
                </a>
              </li> 
              <li>
                <a href="#contact" className="text-white hover:text-teal-400 transition duration-300">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/bimsarts_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-600 transition inline-block"
                >
                  Order Now
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center text-center"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/image3.webp"
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
            className="z-0"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>{" "}
        </div>

        {/* Content */}
        <div className="z-10 text-white animate-fadeIn">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to My <span className="text-teal-500">Art World</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300">
            Explore my collection of creative works
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#gallery"
              className="mt-6 inline-block bg-teal-500 text-white py-2 px-6 rounded-full hover:bg-teal-600 transition"
            >
              View Gallery
            </a>
           
          </div>
        </div>
      </section>

    
      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-6 text-teal-400">
            Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
            {/* Add your own images here */}
            {[
              { path: "/art1.jpg", customized: true },
              { path: "/art2.jpg", forSale: true },
              { path: "/krishna.jpg", soldOut: true },
              { path: "/art4.jpg", forSale: true },
              { path: "/art4.jpg", forSale: true },
              { path: "/krishna.jpg", soldOut: true },
              { path: "/art2.jpg", forSale: true },
              { path: "/krishna.jpg", soldOut: true },
            ].map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg"
              >
                <Image
                  src={image.path}
                  alt={`Art ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  width={500}
                  height={500}
                />
                {/* "For Sale" badge */}
                {image.forSale && (
                  <div className="absolute top-2 right-2 bg-red-600 text-white text-sm font-semibold px-2 py-1 rounded shadow">
                    For Sale
                  </div>
                )}
                {image.soldOut && (
                  <div className="absolute top-2 right-2 bg-gray-800 text-white text-sm font-semibold px-2 py-1 rounded shadow">
                    Sold Out
                  </div>
                )}
                {image.customized && (
                  <div className="absolute top-2 right-2 bg-teal-400 text-gray-600 text-sm font-semibold px-2 py-1 rounded shadow">
                    Customized
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

 {/* About Section */}
      <section id="about" className="py-16 bg-gray-800 mt-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-teal-400">About Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I am a passionate artist who loves to bring ideas to life through
            vibrant and unique creations. My work reflects a deep connection to
            nature, emotions, and the beauty of everyday life. Welcome to my
            artistic journey.
          </p>
        </div>
      </section>

      {/* our-Works */}
      <DragCards/>

      <section id="testimonials" className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-6">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-teal-400">
              Customer Satisfaction
            </h2>
            <p className="text-gray-400 mt-4">
              Hear what my customers have to say about working with me!
            </p>
          </div>

          {/* Testimonial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial Card 1 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <p className="text-gray-300 italic mb-4">
                &quot;BimsArt turned my ideas into reality! Their work is
                exceptional.&quot;
              </p>
              <h4 className="text-lg font-semibold text-teal-400">
                Bijay Devkota
              </h4>
              <p className="text-gray-500 text-sm">Software Developer</p>
            </div>

            {/* Testimonial Card 2 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <p className="text-gray-300 italic mb-4">
                &quot;I couldn&apos;t be happier with my custom artwork. Highly
                recommend!&quot;
              </p>
              <h4 className="text-lg font-semibold text-teal-400">
                Bishal Paudel
              </h4>
              <p className="text-gray-500 text-sm">Graphic Designer</p>
            </div>

            {/* Testimonial Card 3 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <p className="text-gray-300 italic mb-4">
                &quot;Incredible attention to detail. BimsArt is amazing! Thank
                You BimsArt&quot;
              </p>
              <h4 className="text-lg font-semibold text-teal-400">
                Agreema Khanal
              </h4>
              <p className="text-gray-500 text-sm">Bsc.Ag Student</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-800 mt-8">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-teal-400">Contact Me</h2>
          <form className="max-w-lg mx-auto space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-teal-500"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-teal-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-3 rounded-md hover:bg-teal-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 mt-8">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold  mb-4 text-teal-400">
            Connect with Me
          </h3>
          <p className="text-gray-400 mb-6">
            Feel free to reach out via email or follow me on social media.
          </p>
          <div className="space-y-3">
            {/* Email */}
            <p className="text-gray-400">
              <span className="font-bold text-white">Email:</span>{" "}
              <a
                href="mailto:your-email@gmail.com"
                target="_blank"
                className="text-teal-400 hover:underline"
              >
                bims50064@gmail.com
              </a>
            </p>
            {/* Social Media Links */}
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.instagram.com/bimsarts_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 2h8.5C19.544 2 22 4.456 22 7.75v8.5C22 19.544 19.544 22 16.25 22h-8.5C4.456 22 2 19.544 2 16.25v-8.5C2 4.456 4.456 2 7.75 2zm8.5 2h-8.5c-2.008 0-3.75 1.742-3.75 3.75v8.5c0 2.008 1.742 3.75 3.75 3.75h8.5c2.008 0 3.75-1.742 3.75-3.75v-8.5c0-2.008-1.742-3.75-3.75-3.75zm-4.25 4c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm6.5.875a.875.875 0 1 1-1.75 0 .875.875 0 0 1 1.75 0zM12 9.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-6 text-gray-500 text-sm">
            &copy; 2025 BimsArt. All rights reserved.
          </div> 
          <p className="mt-4">Designed & Developed By <a href="https://www.devkotabijay.com.np/" target="_blank">Bijay Devkota</a></p>
        </div>
      </footer>
    </div>
  );
}

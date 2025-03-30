"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../public/logo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Handle scroll effect for header
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
            ? 'bg-white text-gray-800 shadow-md py-2'
            : 'bg-transparent text-white py-4'
            }`}>
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
                <div className="flex items-center justify-between h-14">
                    {/* Logo - made smaller */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            <div className="relative w-8 h-8 mr-2">
                                <Image
                                    src={logo}
                                    alt="Guildely Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <span className={`text-lg font-bold ${isScrolled ? 'text-indigo-600' : 'text-white'}`}>
                                Guildely
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation - more compact */}
                    <nav className="hidden md:flex flex-1 justify-center">
                        <ul className="flex space-x-4 lg:space-x-6">
                            <li>
                                <Link href="/" className={`text-sm font-medium hover:text-blue-500 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                                    Home
                                </Link>
                            </li>
                            <li className="relative">
                                <button
                                    onClick={toggleDropdown}
                                    className={`flex items-center text-sm font-medium hover:text-blue-500 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}
                                >
                                    <span>Mentorship</span>
                                    <FaChevronDown className="ml-1 h-3 w-3" />
                                </button>
                                {isDropdownOpen && (
                                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                                        <Link href="/find-mentor" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            Find a Mentor
                                        </Link>
                                        <Link href="/become-mentor" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            Become a Mentor
                                        </Link>
                                        <Link href="/categories" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            Browse Categories
                                        </Link>
                                    </div>
                                )}
                            </li>
                            <li>
                                <Link href="/pricing" className={`text-sm font-medium hover:text-blue-500 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className={`text-sm font-medium hover:text-blue-500 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className={`text-sm font-medium hover:text-blue-500 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* CTA Buttons - more compact */}
                    <div className="hidden md:flex items-center space-x-2 flex-shrink-0">
                        <Link href="/login" className={`text-sm font-medium hover:text-blue-500 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                            Log in
                        </Link>
                        <Link
                            href="/signup"
                            className={`px-2 py-1 text-sm rounded-lg font-medium transition-all duration-300 ${isScrolled
                                ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:shadow-md'
                                : 'bg-white text-indigo-700 hover:bg-opacity-90'
                                }`}
                        >
                            Sign up
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${isScrolled ? 'text-gray-700 hover:text-blue-500' : 'text-white hover:text-blue-200'
                                }`}
                        >
                            {isMenuOpen ? (
                                <FaTimes className="h-5 w-5" />
                            ) : (
                                <FaBars className="h-5 w-5" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                            href="/"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-50"
                        >
                            Home
                        </Link>
                        <div>
                            <button
                                onClick={toggleDropdown}
                                className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-50"
                            >
                                <span>Mentorship</span>
                                <FaChevronDown className="ml-1 h-3 w-3" />
                            </button>
                            {isDropdownOpen && (
                                <div className="pl-6 space-y-1">
                                    <Link
                                        href="/find-mentor"
                                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-50"
                                    >
                                        Find a Mentor
                                    </Link>
                                    <Link
                                        href="/become-mentor"
                                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-50"
                                    >
                                        Become a Mentor
                                    </Link>
                                    <Link
                                        href="/categories"
                                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-50"
                                    >
                                        Browse Categories
                                    </Link>
                                </div>
                            )}
                        </div>
                        <Link
                            href="/pricing"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-50"
                        >
                            Pricing
                        </Link>
                        <Link
                            href="/about"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-50"
                        >
                            About
                        </Link>
                        <Link
                            href="/blog"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-50"
                        >
                            Blog
                        </Link>
                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-200">
                        <div className="flex items-center px-5">
                            <Link
                                href="/login"
                                className="block w-full px-3 py-2 rounded-md text-center text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-50"
                            >
                                Log in
                            </Link>
                        </div>
                        <div className="mt-3 px-5 pb-3">
                            <Link
                                href="/signup"
                                className="block w-full px-3 py-2 rounded-md text-center text-base font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:shadow-md"
                            >
                                Sign up
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;

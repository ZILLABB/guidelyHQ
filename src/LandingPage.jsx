"use client"

import React from 'react';
import {
    FaRocket, FaUsers, FaChartLine, FaLaptopCode, FaHandshake, FaGraduationCap,
    FaCalendarCheck, FaVideo, FaComments, FaStar, FaCheckCircle, FaQuestionCircle,
    FaTwitter, FaLinkedinIn, FaGithub
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Animation variants
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const scaleUp = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.5 }
    }
};

function LandingPage() {
    return (
        <div className="bg-[#f9fafb] font-sans">
            {/* Hero Section */}
            <div className="relative min-h-screen flex items-center">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2d3282] to-[#5357b6]"></div>
                <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')]"></div>
                <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            className="text-white space-y-8"
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                        >
                            <div className="flex items-center mb-6">
                                <h4 className="font-semibold tracking-wider text-[#a5b4fc] uppercase text-sm">Guildely</h4>
                            </div>
                            <h1 className="font-satoshi text-5xl md:text-7xl font-bold tracking-tight">
                                Guiding You to
                                <span className="block text-[#a5b4fc]">Greatness</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-[#e3e2f7] font-light">
                                Mentorship Management Platform
                            </p>
                            <p className="text-lg text-[#e3e2f7] max-w-xl font-light leading-relaxed">
                                Connect with industry experts, accelerate your growth, and unlock your full potential through meaningful mentorship relationships.
                            </p>
                            <motion.div
                                className="flex flex-col sm:flex-row gap-4 pt-4"
                                variants={staggerContainer}
                            >
                                <motion.button
                                    className="bg-[#a5b4fc] text-[#2d3282] px-8 py-4 rounded-md font-medium hover:bg-white transition-all shadow-lg"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    variants={fadeIn}
                                >
                                    Find a Mentor
                                </motion.button>
                                <motion.button
                                    className="border-2 border-[#a5b4fc] text-[#a5b4fc] px-8 py-4 rounded-md font-medium hover:bg-[#a5b4fc] hover:text-[#2d3282] transition-all"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    variants={fadeIn}
                                >
                                    Become a Mentor
                                </motion.button>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            className="hidden md:block relative"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                        >
                            <div className="relative z-10 bg-white rounded-2xl shadow-2xl overflow-hidden">
                                <Image
                                    src="/landing.jpg"
                                    alt="Landing Page"
                                    width={600}
                                    height={400}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <motion.div
                                className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#a5b4fc] rounded-lg opacity-50"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                            ></motion.div>
                            <motion.div
                                className="absolute -top-6 -right-6 w-32 h-32 bg-[#5357b6] rounded-lg opacity-40"
                                animate={{ rotate: -360 }}
                                transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                            ></motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Key Benefits Section */}
            <section className="py-24 px-6 bg-white">
                <motion.div
                    className="max-w-7xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeIn}
                >
                    <div className="text-center mb-20">
                        <h2 className="text-[#2d3282] text-4xl md:text-5xl font-bold mb-6 font-satoshi">
                            Transform Your Growth Journey
                        </h2>
                        <p className="text-gray-600 text-xl max-w-3xl mx-auto">
                            Our platform facilitates meaningful mentorship relationships across multiple disciplines, accelerating your professional and personal development.
                        </p>
                    </div>
                    <motion.div
                        className="grid md:grid-cols-4 gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {[
                            {
                                icon: <FaUsers className="text-[#5357b6] text-4xl" />,
                                title: "AI-Powered Matching",
                                description: "Our intelligent algorithm connects you with the perfect mentor based on your goals, skills, and preferences.",
                                image: "/logo.png"
                            },
                            {
                                icon: <FaCalendarCheck className="text-[#5357b6] text-4xl" />,
                                title: "Seamless Scheduling",
                                description: "Easily book sessions with your mentor through our integrated calendar system with timezone support.",
                                image: "/one.jpg"
                            },
                            {
                                icon: <FaVideo className="text-[#5357b6] text-4xl" />,
                                title: "Virtual Meeting Space",
                                description: "Connect through our integrated video platform with screen sharing and collaborative tools.",
                                image: "/two.jpg"
                            },
                            {
                                icon: <FaChartLine className="text-[#5357b6] text-4xl" />,
                                title: "Progress Tracking",
                                description: "Set goals, track milestones, and visualize your growth journey with detailed analytics.",
                                image: "/landing.jpg"
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                className="bg-[#f9fafb] p-8 rounded-xl hover:shadow-xl transition-all duration-300 border border-gray-100"
                                variants={scaleUp}
                                whileHover={{ y: -10 }}
                            >
                                <div className="mb-6 bg-[#eef2ff] p-4 rounded-lg inline-block">{feature.icon}</div>
                                <h3 className="text-xl font-bold text-[#2d3282] mb-3 font-satoshi">{feature.title}</h3>
                                <p className="text-gray-600 mb-4">{feature.description}</p>
                                <div className="h-40 overflow-hidden rounded-lg">
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
                                        width={300}
                                        height={200}
                                        className="w-full h-full object-cover transition-transform hover:scale-105"
                                        unoptimized
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </section>

            {/* How It Works Section */}
            <section className="py-24 px-6 bg-[#f9fafb]">
                <motion.div
                    className="max-w-7xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeIn}
                >
                    <div className="text-center mb-20">
                        <h2 className="text-[#2d3282] text-4xl md:text-5xl font-bold mb-6 font-satoshi">
                            How Guildely Works
                        </h2>
                        <p className="text-gray-600 text-xl max-w-3xl mx-auto">
                            Getting started is simple. Follow these steps to begin your mentorship journey.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="grid md:grid-cols-3 gap-12">
                            {[
                                {
                                    step: "1",
                                    title: "Create Your Profile",
                                    description: "Sign up and build your profile highlighting your goals, interests, and areas where you seek guidance.",
                                    image: "/logo.png"
                                },
                                {
                                    step: "2",
                                    title: "Get Matched",
                                    description: "Our AI algorithm will suggest mentors who align with your objectives and professional aspirations.",
                                    image: "/one.jpg"
                                },
                                {
                                    step: "3",
                                    title: "Connect & Grow",
                                    description: "Schedule sessions, set goals, and begin your personalized growth journey with expert guidance.",
                                    image: "/two.jpg"
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="flex flex-col items-center text-center relative z-10"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                >
                                    <div className="mb-6 h-48 w-full rounded-xl overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={400}
                                            height={300}
                                            className="w-full h-full object-cover"
                                            unoptimized
                                        />
                                    </div>
                                    <motion.div
                                        className="w-16 h-16 rounded-full bg-[#2d3282] text-white flex items-center justify-center text-2xl font-bold mb-4 -mt-10 border-4 border-white"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        {item.step}
                                    </motion.div>
                                    <h3 className="text-2xl font-bold text-[#2d3282] mb-4 font-satoshi">{item.title}</h3>
                                    <p className="text-gray-600 max-w-xs mx-auto">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 px-6 bg-white">
                <motion.div
                    className="max-w-7xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeIn}
                >
                    <div className="text-center mb-20">
                        <h2 className="text-[#2d3282] text-4xl md:text-5xl font-bold mb-6 font-satoshi">
                            Success Stories
                        </h2>
                        <p className="text-gray-600 text-xl max-w-3xl mx-auto">
                            Hear from people who have transformed their careers through mentorship on our platform.
                        </p>
                    </div>

                    <motion.div
                        className="grid md:grid-cols-3 gap-8"
                        variants={staggerContainer}
                    >
                        {[
                            {
                                quote: "Finding a mentor in my field completely changed my career trajectory. My mentor helped me navigate complex industry challenges and opened doors I never thought possible.",
                                name: "Sarah Johnson",
                                role: "UX Designer",
                                company: "Design Co.",
                                image: "/logo.png"
                            },
                            {
                                quote: "As someone transitioning into tech, having a mentor who understood my background was invaluable. The personalized guidance helped me land my dream job within 4 months.",
                                name: "Michael Chen",
                                role: "Software Engineer",
                                company: "TechGiant",
                                image: "/one.jpg"
                            },
                            {
                                quote: "Being a mentor on this platform has been as rewarding for me as it has been for my mentees. I've refined my leadership skills while helping others grow in their careers.",
                                name: "Priya Sharma",
                                role: "Product Manager",
                                company: "InnovateCorp",
                                image: "/two.jpg"
                            }
                        ].map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className="bg-[#f9fafb] p-8 rounded-xl border border-gray-100 shadow-sm"
                                variants={scaleUp}
                            >
                                <div className="flex mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className="text-yellow-400 mr-1" />
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-8 italic">"{testimonial.quote}"</p>
                                <div className="flex items-center">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        width={48}
                                        height={48}
                                        className="w-12 h-12 rounded-full mr-4 object-cover"
                                        unoptimized
                                    />
                                    <div>
                                        <h4 className="font-bold text-[#2d3282]">{testimonial.name}</h4>
                                        <p className="text-gray-600 text-sm">{testimonial.role}, {testimonial.company}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </section>

            {/* Mentor Showcase Section (Updated) */}
            <section className="py-24 px-6 bg-[#f9fafb] overflow-hidden">
                <motion.div
                    className="max-w-7xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeIn}
                >
                    <div className="text-center mb-20">
                        <h2 className="text-[#2d3282] text-4xl md:text-5xl font-bold mb-6 font-satoshi">
                            Meet Our Mentors
                        </h2>
                        <p className="text-gray-600 text-xl max-w-3xl mx-auto">
                            Learn from industry experts with proven track records of success.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            {
                                name: "Dr. Emily Rodriguez",
                                role: "AI Research Scientist",
                                company: "TechInnovate",
                                image: "/logo.png"
                            },
                            {
                                name: "James Wilson",
                                role: "Marketing Director",
                                company: "Global Brands",
                                image: "/one.jpg"
                            },
                            {
                                name: "Aisha Patel",
                                role: "Senior Product Manager",
                                company: "ProductHQ",
                                image: "/two.jpg"
                            },
                            {
                                name: "Robert Kim",
                                role: "Startup Advisor",
                                company: "VentureX",
                                image: "/landing.jpg"
                            }
                        ].map((mentor, index) => (
                            <motion.div
                                key={index}
                                className="group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                            >
                                <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all group-hover:shadow-lg">
                                    <div className="h-64 overflow-hidden">
                                        <Image
                                            src={mentor.image}
                                            alt={mentor.name}
                                            width={300}
                                            height={400}
                                            className="w-full h-full object-cover transition-transform group-hover:scale-105"
                                            unoptimized
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="font-bold text-[#2d3282] text-xl mb-1">{mentor.name}</h3>
                                        <p className="text-gray-600">{mentor.role}</p>
                                        <p className="text-gray-500 text-sm">{mentor.company}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <motion.button
                            className="bg-[#5357b6] text-white px-8 py-4 rounded-md font-medium hover:bg-[#2d3282] transition-all shadow-md"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View All Mentors
                        </motion.button>
                    </div>
                </motion.div>
            </section>

            {/* Image Gallery Section (Updated) */}
            <section className="py-24 px-6 bg-white">
                <motion.div
                    className="max-w-7xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeIn}
                >
                    <div className="text-center mb-20">
                        <h2 className="text-[#2d3282] text-4xl md:text-5xl font-bold mb-6 font-satoshi">
                            The Guildely Experience
                        </h2>
                        <p className="text-gray-600 text-xl max-w-3xl mx-auto">
                            See how our platform brings mentors and mentees together in meaningful ways.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            "/logo.png",
                            "/one.jpg",
                            "/two.jpg",
                            "/landing.jpg",
                            "/logo.png",
                            "/one.jpg",
                            "/two.jpg",
                            "/landing.jpg"
                        ].map((image, index) => (
                            <motion.div
                                key={index}
                                className={`overflow-hidden rounded-xl ${index === 0 || index === 3 ? 'md:col-span-2 md:row-span-2' : ''}`}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ scale: 1.03 }}
                            >
                                <Image
                                    src={image}
                                    alt={`Guildely experience ${index + 1}`}
                                    width={600}
                                    height={600}
                                    className="w-full h-full object-cover transition-transform hover:scale-110"
                                    unoptimized
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Pricing Section */}
            <section className="py-24 px-6 bg-[#f9fafb]">
                <motion.div
                    className="max-w-7xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeIn}
                >
                    <div className="text-center mb-20">
                        <h2 className="text-[#2d3282] text-4xl md:text-5xl font-bold mb-6 font-satoshi">
                            Simple, Transparent Pricing
                        </h2>
                        <p className="text-gray-600 text-xl max-w-3xl mx-auto">
                            Choose the plan that fits your needs. No hidden fees or commitments.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 justify-center">
                        {[
                            {
                                name: "Basic",
                                price: "$0",
                                period: "Free forever",
                                description: "Perfect for individuals just getting started",
                                features: [
                                    "Match with 1 mentor",
                                    "1 session per month",
                                    "Basic goal tracking",
                                    "Community access"
                                ],
                                buttonText: "Get Started",
                                popular: false
                            },
                            {
                                name: "Growth",
                                price: "$49",
                                period: "per month",
                                description: "For serious professionals seeking consistent growth",
                                features: [
                                    "Match with up to 3 mentors",
                                    "4 sessions per month",
                                    "Advanced goal setting",
                                    "Progress analytics",
                                    "Resource library access",
                                    "Priority support"
                                ],
                                buttonText: "Start Growing",
                                popular: true
                            },
                            {
                                name: "Pro",
                                price: "$99",
                                period: "per month",
                                description: "The ultimate mentorship experience",
                                features: [
                                    "Unlimited mentor matches",
                                    "Unlimited sessions",
                                    "Comprehensive career roadmapping",
                                    "Personalized development plan",
                                    "Executive mentorship access",
                                    "24/7 dedicated support"
                                ],
                                buttonText: "Go Pro",
                                popular: false
                            }
                        ].map((plan, index) => (
                            <motion.div
                                key={index}
                                className={`bg-white rounded-xl border ${plan.popular ? 'border-[#5357b6]' : 'border-gray-200'} 
                                           p-8 flex flex-col ${plan.popular ? 'md:-mt-4 md:mb-4' : ''} relative flex-1`}
                                variants={scaleUp}
                                whileHover={{ y: -10 }}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#5357b6] text-white px-4 py-1 rounded-full text-sm font-medium">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold text-[#2d3282] mb-2 font-satoshi">{plan.name}</h3>
                                <div className="mb-4">
                                    <span className="text-4xl font-bold text-[#2d3282]">{plan.price}</span>
                                    <span className="text-gray-500 ml-2">{plan.period}</span>
                                </div>
                                <p className="text-gray-600 mb-6">{plan.description}</p>
                                <div className="space-y-4 mb-8 flex-grow">
                                    {plan.features.map((feature, i) => (
                                        <div key={i} className="flex items-center">
                                            <FaCheckCircle className="text-[#5357b6] mr-3" />
                                            <span className="text-gray-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <motion.button
                                    className={`w-full py-4 rounded-md font-medium ${plan.popular
                                        ? 'bg-[#5357b6] text-white hover:bg-[#4b4da3]'
                                        : 'bg-[#f9fafb] text-[#2d3282] border border-[#2d3282] hover:bg-[#eef2ff]'
                                        } transition-all`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {plan.buttonText}
                                </motion.button>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 px-6 bg-white">
                <motion.div
                    className="max-w-5xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeIn}
                >
                    <div className="text-center mb-20">
                        <h2 className="text-[#2d3282] text-4xl md:text-5xl font-bold mb-6 font-satoshi">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-gray-600 text-xl max-w-3xl mx-auto">
                            Got questions? We've got answers.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                question: "How does the mentor matching process work?",
                                answer: "Our AI-powered algorithm analyzes your profile, goals, and preferences to suggest mentors who align with your needs. You can browse mentor profiles, read reviews, and request connections with those who resonate with you."
                            },
                            {
                                question: "Can I be both a mentor and a mentee?",
                                answer: "Absolutely! Many professionals on our platform both give and receive mentorship. You can maintain separate profiles for each role or combine them, depending on your preference."
                            },
                            {
                                question: "What if the mentorship isn't working out?",
                                answer: "We understand that not every match is perfect. You can end a mentorship relationship at any time and request a new match. We encourage providing feedback to help improve future matching."
                            },
                            {
                                question: "How are sessions conducted?",
                                answer: "Sessions can be conducted through our integrated video platform or in person if both parties agree. Our platform includes tools for note-taking, goal-setting, and progress tracking to maximize the value of each session."
                            },
                            {
                                question: "Is my information secure?",
                                answer: "Yes, we take data privacy seriously. All communications are encrypted, and we never share your personal information without consent. You can review our privacy policy for more details."
                            }
                        ].map((faq, index) => (
                            <motion.div
                                key={index}
                                className="border border-gray-200 rounded-lg overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <details className="group">
                                    <summary className="flex justify-between items-center p-6 cursor-pointer bg-[#f9fafb]">
                                        <h3 className="text-lg font-medium text-[#2d3282] pr-8">{faq.question}</h3>
                                        <span className="text-[#5357b6] group-open:rotate-180 transition-transform">
                                            <FaQuestionCircle />
                                        </span>
                                    </summary>
                                    <div className="px-6 pb-6 text-gray-600">
                                        <p>{faq.answer}</p>
                                    </div>
                                </details>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 bg-gradient-to-br from-[#2d3282] to-[#5357b6] text-white">
                <motion.div
                    className="max-w-5xl mx-auto text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 font-satoshi">
                        Start Your Mentorship Journey Today
                    </h2>
                    <p className="text-xl text-[#e3e2f7] max-w-3xl mx-auto mb-12">
                        Join thousands of professionals who are accelerating their careers through meaningful mentorship relationships.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <motion.button
                            className="bg-white text-[#2d3282] px-8 py-4 rounded-md font-medium hover:bg-[#e3e2f7] transition-all shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Find Your Mentor
                        </motion.button>
                        <motion.button
                            className="border-2 border-white text-white px-8 py-4 rounded-md font-medium hover:bg-white hover:text-[#2d3282] transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Become a Mentor
                        </motion.button>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}

export default LandingPage;

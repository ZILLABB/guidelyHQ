import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBriefcase, FaBuilding, FaCode, FaUsers, FaHeart, FaPalette, FaGraduationCap, FaDollarSign, FaGlobe } from 'react-icons/fa';

const AboutPage = () => {
    const teamMembers = [
        {
            id: 1,
            name: 'Sarah Chen',
            role: 'Co-Founder & CEO',
            image: '/team/sarah-chen.jpg',
            bio: 'Former tech executive passionate about democratizing access to quality mentorship across industries.'
        },
        {
            id: 2,
            name: 'Michael Okafor',
            role: 'Co-Founder & CTO',
            image: '/team/michael-okafor.jpg',
            bio: 'Engineering leader with expertise in building scalable platforms that connect people and facilitate knowledge transfer.'
        },
        {
            id: 3,
            name: 'Elena Rodriguez',
            role: 'Head of Mentor Experience',
            image: '/team/elena-rodriguez.jpg',
            bio: 'Dedicated to creating meaningful mentor-mentee relationships that drive professional growth and development.'
        },
        {
            id: 4,
            name: 'David Park',
            role: 'Head of Community',
            image: '/team/david-park.jpg',
            bio: 'Community builder focused on creating supportive environments for learning and professional advancement.'
        }
    ];

    const mentorshipCategories = [
        { id: 1, name: 'Career Development', icon: <FaBriefcase /> },
        { id: 2, name: 'Business & Entrepreneurship', icon: <FaBuilding /> },
        { id: 3, name: 'Technology & Digital Skills', icon: <FaCode /> },
        { id: 4, name: 'Leadership & Management', icon: <FaUsers /> },
        { id: 5, name: 'Health & Wellness', icon: <FaHeart /> },
        { id: 6, name: 'Creative Arts & Design', icon: <FaPalette /> },
        { id: 7, name: 'Education & Academia', icon: <FaGraduationCap /> },
        { id: 8, name: 'Personal Finance', icon: <FaDollarSign /> },
        { id: 9, name: 'Diversity & Inclusion', icon: <FaGlobe /> }
    ];

    const coreValues = [
        {
            id: 1,
            title: 'Access',
            description: 'Democratizing mentorship by connecting experts with those seeking guidance, regardless of background or location.'
        },
        {
            id: 2,
            title: 'Growth',
            description: 'Fostering continuous personal and professional development through meaningful mentorship relationships.'
        },
        {
            id: 3,
            title: 'Community',
            description: 'Building a supportive environment where knowledge sharing and collaboration thrive.'
        },
        {
            id: 4,
            title: 'Excellence',
            description: 'Delivering quality mentorship experiences through innovative technology and thoughtful program design.'
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Guiding You to Greatness</h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                            At Guildely, we're transforming how mentorship works—connecting experts with learners to accelerate growth and unlock potential.
                        </p>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0% 100%)' }}></div>
            </section>

            {/* Mission Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
                            <p className="text-lg text-gray-700 mb-6">
                                We believe in a world where quality mentorship is accessible to everyone. Guildely was born from a simple idea: connect people seeking guidance with those who have valuable experience to share.
                            </p>
                            <p className="text-lg text-gray-700">
                                Our platform facilitates meaningful mentorship relationships across various fields, tracks progress, and provides a seamless experience for both mentors and mentees. Whether you're looking to advance your career, change industries, or develop specific skills, Guildely connects you with experts who've been there before.
                            </p>
                        </div>
                        <div className="mt-10 lg:mt-0 relative h-64 md:h-80 lg:h-96">
                            <div className="bg-indigo-100 rounded-lg w-full h-full flex items-center justify-center overflow-hidden">
                                <span className="text-indigo-300 text-6xl">Mastery Through Mentorship</span>
                                {/* Replace with actual image: <Image src="/about/vision.jpg" alt="Our vision" fill className="object-cover rounded-lg" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mentorship Categories */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Mentorship Categories</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                            Our platform supports mentorship across a wide range of professional and personal development areas.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {mentorshipCategories.map((category) => (
                            <div key={category.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-3">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">How Guildely Works</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                            Our platform makes finding and connecting with the right mentor simple and effective.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mx-auto mb-4">
                                <span className="text-2xl font-bold">1</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Join & Create Profile</h3>
                            <p className="text-gray-600">Sign up and create your personalized profile, highlighting your goals or expertise.</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mx-auto mb-4">
                                <span className="text-2xl font-bold">2</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Find Your Match</h3>
                            <p className="text-gray-600">Our intelligent matching algorithm connects mentees with the right mentors based on skills, goals, and compatibility.</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mx-auto mb-4">
                                <span className="text-2xl font-bold">3</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Grow Together</h3>
                            <p className="text-gray-600">Schedule sessions, track progress, and build meaningful relationships that accelerate growth.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 bg-indigo-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                            The principles that guide us in building a platform that transforms mentorship.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {coreValues.map((value) => (
                            <div key={value.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
                                <h3 className="text-xl font-bold text-indigo-600 mb-3">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                            We're a diverse team of professionals passionate about the power of mentorship to transform lives and careers.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member) => (
                            <div key={member.id} className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform duration-300 hover:shadow-md hover:-translate-y-1">
                                <div className="bg-gradient-to-r from-indigo-100 to-purple-100 h-48 flex items-center justify-center">
                                    <span className="text-indigo-300 text-xl">{member.name}</span>
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={300}
                                        height={200}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                                    <p className="text-indigo-600 font-medium mb-2">{member.role}</p>
                                    <p className="text-gray-600">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to Learn, Lead, and Level Up?</h2>
                    <p className="text-xl max-w-3xl mx-auto mb-8">
                        Join thousands of mentors and mentees who are transforming their careers and lives through meaningful mentorship.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/join-as-mentee" className="bg-white text-indigo-600 hover:bg-indigo-50 font-medium px-6 py-3 rounded-md shadow-sm transition-colors duration-300">
                            Find a Mentor
                        </Link>
                        <Link href="/join-as-mentor" className="bg-indigo-500 hover:bg-indigo-400 text-white font-medium px-6 py-3 rounded-md shadow-sm transition-colors duration-300">
                            Become a Mentor
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials (placeholder) */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Success Stories</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                            Hear from mentors and mentees who've experienced the power of Guildely.
                        </p>
                    </div>

                    <div className="italic text-center text-gray-500">
                        Testimonials will be displayed here as they become available
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;

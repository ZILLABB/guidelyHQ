'use client'

import React from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';

const tiers = [
    {
        name: 'Mentee Basic',
        id: 'tier-mentee-basic',
        price: {
            monthly: '$19',
            annually: '$190',
        },
        savings: 'Save $38/year',
        frequency: {
            monthly: '/month',
            annually: '/year',
        },
        description: 'Perfect for individuals looking to connect with mentors and grow their skills.',
        features: [
            'Connect with 2 mentors',
            '4 mentorship sessions/month',
            'Basic skills assessment',
            'Community forum access',
            'Learning resource library',
            'Email support'
        ],
        mostPopular: false,
        buttonText: 'Start free trial',
        buttonVariant: 'outline'
    },
    {
        name: 'Growth Path',
        id: 'tier-growth',
        price: {
            monthly: '$49',
            annually: '$490',
        },
        savings: 'Save $98/year',
        frequency: {
            monthly: '/month',
            annually: '/year',
        },
        description: 'Enhanced mentorship experience with advanced features for serious career growth.',
        features: [
            'Connect with 5 mentors',
            '8 mentorship sessions/month',
            'Advanced skill tracking',
            'Priority mentor matching',
            'Career roadmap planning',
            'Progress analytics dashboard',
            'Priority support',
            'Exclusive workshops access'
        ],
        mostPopular: true,
        buttonText: 'Start free trial',
        buttonVariant: 'solid'
    },
    {
        name: 'Mentor Pro',
        id: 'tier-mentor-pro',
        price: {
            monthly: '$99',
            annually: '$990',
        },
        savings: 'Save $198/year',
        frequency: {
            monthly: '/month',
            annually: '/year',
        },
        description: 'Comprehensive solution for organizations and professional mentors to scale impact.',
        features: [
            'Unlimited mentor connections',
            'Unlimited mentorship sessions',
            'Team mentorship capabilities',
            'Mentor certification program',
            'Custom branding options',
            'Advanced analytics & reports',
            'API access for integration',
            'Dedicated account manager',
            'Training & onboarding support',
            'Custom mentorship programs'
        ],
        mostPopular: false,
        buttonText: 'Contact sales',
        buttonVariant: 'outline'
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Pricing() {
    const [billingFrequency, setBillingFrequency] = React.useState('monthly');

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="text-base font-semibold leading-7 text-indigo-600">Pricing Plans</h1>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        The right price for your needs
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Choose the perfect plan for your business. Get started risk-free with our 14-day trial - no credit card required.
                    </p>
                </div>

                {/* Billing toggle */}
                <div className="mt-16 flex justify-center">
                    <div className="relative flex rounded-full bg-gray-100 p-1">
                        <button
                            type="button"
                            className={`${billingFrequency === 'monthly' ? 'bg-white shadow-sm' : 'bg-transparent'
                                } relative rounded-full py-2 px-6 text-sm font-medium text-gray-700 focus:outline-none`}
                            onClick={() => setBillingFrequency('monthly')}
                        >
                            Monthly
                        </button>
                        <button
                            type="button"
                            className={`${billingFrequency === 'annually' ? 'bg-white shadow-sm' : 'bg-transparent'
                                } relative ml-0.5 rounded-full py-2 px-6 text-sm font-medium text-gray-700 focus:outline-none`}
                            onClick={() => setBillingFrequency('annually')}
                        >
                            Annually
                            <span className="absolute -right-1 -top-2 rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-600">
                                Save 25%
                            </span>
                        </button>
                    </div>
                </div>

                <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-y-8 sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 xl:gap-x-12">
                    {tiers.map((tier) => (
                        <div
                            key={tier.id}
                            className={classNames(
                                tier.mostPopular ? 'ring-2 ring-indigo-600' : 'ring-1 ring-gray-200',
                                'rounded-3xl p-8 xl:p-10 relative'
                            )}
                        >
                            <div className="flex items-center justify-between gap-x-4">
                                <h2 className="text-lg font-semibold leading-8 text-gray-900">{tier.name}</h2>
                                {tier.mostPopular ? (
                                    <p className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600">
                                        Most popular
                                    </p>
                                ) : null}
                            </div>
                            <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                            <p className="mt-6 flex items-baseline gap-x-1">
                                <span className="text-4xl font-bold tracking-tight text-gray-900">
                                    {tier.price[billingFrequency]}
                                </span>
                                <span className="text-sm font-semibold leading-6 text-gray-600">
                                    {tier.frequency[billingFrequency]}
                                </span>
                            </p>
                            {billingFrequency === 'annually' && (
                                <p className="mt-1 text-sm text-green-600 font-medium">{tier.savings}</p>
                            )}
                            <button
                                type="button"
                                className={classNames(
                                    tier.mostPopular
                                        ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500'
                                        : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                                    'mt-6 block w-full rounded-md px-3 py-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                )}
                            >
                                {tier.buttonText}
                            </button>
                            <p className="mt-2 text-xs text-center text-gray-500">
                                No credit card required
                            </p>
                            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex gap-x-3">
                                        <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Testimonial section */}
                <div className="mt-24 border-t border-gray-200 pt-16">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                            Transforming careers through guided mentorship
                        </h2>
                        <figure className="mt-10">
                            <blockquote className="text-lg font-medium leading-8 text-gray-900">
                                <p>"GuildelyHQ completely transformed my career trajectory. The mentor matching algorithm connected me with industry leaders I never would have met otherwise. Within 6 months, I landed my dream job thanks to the guidance and networking opportunities."</p>
                            </blockquote>
                            <figcaption className="mt-8">
                                <div className="font-semibold text-gray-900">Jamie Chen</div>
                                <div className="text-gray-600">Software Engineer, promoted to Tech Lead</div>
                            </figcaption>
                        </figure>
                    </div>
                </div>

                {/* FAQ section */}
                <div className="mx-auto mt-24 max-w-3xl">
                    <h2 className="text-2xl font-bold tracking-tight text-center text-gray-900">Frequently asked questions</h2>
                    <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                        <div className="pt-6">
                            <dt className="text-lg font-medium leading-7 text-gray-900">How does mentor matching work?</dt>
                            <dd className="mt-2 text-base leading-7 text-gray-600">
                                Our proprietary algorithm matches you with mentors based on your career goals, skills you want to develop, industry focus, and personal preferences. You can also browse our mentor directory and request specific connections.
                            </dd>
                        </div>
                        <div className="pt-6">
                            <dt className="text-lg font-medium leading-7 text-gray-900">What's included in a mentorship session?</dt>
                            <dd className="mt-2 text-base leading-7 text-gray-600">
                                Mentorship sessions are 45-minute video calls where you can discuss career challenges, get feedback on projects, develop skills, or plan your professional growth. Our platform provides session agendas, note-taking, and action item tracking.
                            </dd>
                        </div>
                        <div className="pt-6">
                            <dt className="text-lg font-medium leading-7 text-gray-900">Can I become a mentor on GuildelyHQ?</dt>
                            <dd className="mt-2 text-base leading-7 text-gray-600">
                                Yes! Experienced professionals can apply to become mentors. Once approved, you can choose between our free tier with basic tools or our Mentor Pro plan for advanced features and monetization options.
                            </dd>
                        </div>
                    </dl>
                </div>

                <div className="mx-auto mt-24 max-w-2xl text-center">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Ready to accelerate your career?</h2>
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        Join thousands of professionals who've found success through structured mentorship on GuildelyHQ.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="#"
                            className="rounded-md bg-indigo-600 px-6 py-3 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Find your mentor
                        </a>
                        <a
                            href="#"
                            className="text-md font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                        >
                            Become a mentor <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

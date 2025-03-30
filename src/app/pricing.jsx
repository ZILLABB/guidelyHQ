import React from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';

const tiers = [
    {
        name: 'Basic',
        id: 'tier-basic',
        price: '$9',
        frequency: '/month',
        description: 'Perfect for individuals and small projects.',
        features: [
            '5 projects',
            'Up to 10,000 subscribers',
            'Basic analytics',
            'Email support',
            '24-hour response time'
        ],
        mostPopular: false,
        buttonText: 'Get started',
        buttonVariant: 'outline'
    },
    {
        name: 'Pro',
        id: 'tier-pro',
        price: '$29',
        frequency: '/month',
        description: 'Ideal for growing businesses and teams.',
        features: [
            'Unlimited projects',
            'Up to 100,000 subscribers',
            'Advanced analytics',
            'Priority email support',
            '12-hour response time',
            'API access',
            'Custom integrations'
        ],
        mostPopular: true,
        buttonText: 'Get started',
        buttonVariant: 'solid'
    },
    {
        name: 'Enterprise',
        id: 'tier-enterprise',
        price: '$99',
        frequency: '/month',
        description: 'For large organizations with complex needs.',
        features: [
            'Unlimited everything',
            'Dedicated account manager',
            'Phone support',
            '1-hour response time',
            'Advanced security features',
            'Custom reporting',
            'SLA agreement',
            'White-label options'
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
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="text-base font-semibold leading-7 text-indigo-600">Pricing</h1>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Plans for teams of all sizes
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Choose the perfect plan for your needs. Always know what you'll pay with our transparent pricing.
                    </p>
                </div>

                <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 xl:gap-x-12">
                    {tiers.map((tier) => (
                        <div
                            key={tier.id}
                            className={classNames(
                                tier.mostPopular ? 'ring-2 ring-indigo-600' : 'ring-1 ring-gray-200',
                                'rounded-3xl p-8 xl:p-10'
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
                                <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.price}</span>
                                <span className="text-sm font-semibold leading-6 text-gray-600">{tier.frequency}</span>
                            </p>
                            <button
                                type="button"
                                className={classNames(
                                    tier.mostPopular
                                        ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500'
                                        : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                                    'mt-6 block w-full rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                )}
                            >
                                {tier.buttonText}
                            </button>
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

                <div className="mx-auto mt-20 max-w-2xl text-center">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Still have questions?</h2>
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        Can't find the answer you're looking for? Please contact our customer support team.
                    </p>
                    <div className="mt-6">
                        <a
                            href="#"
                            className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                        >
                            Contact support <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

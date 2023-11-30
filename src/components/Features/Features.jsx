import { GlobeAsiaAustraliaIcon, LockClosedIcon, ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Various ways to exchange.',
    description:
      'In May 2023, AlphaBit became the first crypto company to be able to trade through Discord.',
    icon: GlobeAsiaAustraliaIcon,
  },
  {
    name: 'Your assets are secure.',
    description: "We offer the most secure and multifaceted risk management programs designed to protect our customers' assets.",
    icon: LockClosedIcon,
  },
  {
    name: 'Help when you need.',
    description: "You can always contact our support team. 24 hours a day,  365 days a year. We're ready to assist.",
    icon: ChatBubbleOvalLeftEllipsisIcon,
  },
]

export default function Example() {
  return (
    <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-blue-600">Reliable and easy</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">The most trusted cryptocurrency exchange</p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Millions of users around the world trust us, and so can you. The proof is in our platform:
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-blue-600">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-blue-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}

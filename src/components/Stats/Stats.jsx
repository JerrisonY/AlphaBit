import './Stats.css'

const stats = [
    { id: 1, name: 'Transactions every 24 hours', value: '2 million' },
    { id: 2, name: 'Countries supported', value: '165+' },
    { id: 3, name: 'Quarterly trading volume', value: '$107 billion' },
  ]
  
  export default function Stats() {
    return (
      <div className="bg-gray-900 py-24 sm:py-32 stats-header">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="text-blue-600 text-4xl font-semibold stats-header">At AlphaBit, cryptocurrency trading is open to all</p>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-blue-600 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  
export default function Example() {
    return (
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold leading-8 text-white">
            The official crypto exchange for the world's best e-sports teams
          </h2>
          <div className="mx-auto mt-14 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-0 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
              src="/logos/clg.png"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-14 w-full object-contain lg:col-span-1"
              src="/logos/tsm.png"
              alt="Reform"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-14 w-full object-contain lg:col-span-1"
              src="/logos/teamliquid.png"
              alt="Tuple"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-14 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="/logos/100thieves.png"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-14 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="/logos/cloud9.png"
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    )
  }
  
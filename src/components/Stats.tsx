import wotopus from "../assets/woctopus.png";

export const Stats = () => (
  <section className="bg-black min-h-screen w-full p-10 lg:py-44 lg:px-32 relative flex items-center">
    <div className="flex flex-col gap-20 justify-between font-proxima text-2xl relative z-20">
      <div className="flex flex-col gap-5">
        <h1 className="font-actay text-secondary text-6xl">
          $1-2 trillion per year
        </h1>
        <p className="max-w-[60%] text-white">
          The total market size of trading platforms and brokers in the CIS is
          about
        </p>
      </div>
      <div>
        <h1 className="font-actay text-secondary text-6xl">0,12% - 0,24%</h1>
        <p className="max-w-[60%] text-white">
          Ward Broker's share of the CIS market of trading platforms and brokers
        </p>
      </div>
    </div>
    <img
      src={wotopus}
      alt={wotopus}
      className="absolute top-1/2 -translate-y-1/2 right-0 object-right w-3/5 z-10 max-lg:hidden"
    />
  </section>
);

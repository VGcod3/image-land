import octopus from "./assets/octopus.png";
// import TelegramIcon from "./assets/telegram.svg";
import wotopus from "./assets/woctopus.png";

function App() {
  return (
    <main>
      <div
        className="relative h-[80vh] w-screen bg-cover bg-center bg-no-repeat min-h-screen"
        style={{
          backgroundImage: `url(${octopus})`,
        }}
      >
        <header className="flex p-4 gap-2 items-center text-black">
          <h1 className="text-2xl uppercase py-1 px-1.5 border-2 font-actay border-primary rounded-3xl">
            Ads Control
          </h1>
          <p className="font-proxima text-2xl">Trading Platform study case</p>
        </header>
        <section className="flex flex-col gap-4 p-4 mt-32">
          <h2 className="text-6xl text-primary font-actay uppercase max-w-5xl text-wrap">
            how we attracted more{" "}
            <span className="drop-shadow-[5px_2px_5px_#7300F4] drop-shadow-primary text-white outlined-text">
              $200mln
            </span>{" "}
            for 3 months?
          </h2>
          <p className="text-black text-3xl font-proxima max-w-4xl">
            or how we implemented profitable marketing solutions for trading
            platform?
          </p>
          <div className="flex flex-row justify-between text-3xl mt-40 max-w-[60%] mx-8">
            <div className="bg-white px-32 py-8 rounded-full text-black flex flex-row">
              Telegram
            </div>
            <div className="bg-white px-32 py-8 rounded-full text-black">
              WhatsApp
            </div>
          </div>
        </section>
      </div>
      <section className="bg-black min-h-screen w-full p-10 lg:py-44 lg:px-32 relative flex items-center">
        <div className="flex flex-col gap-20 justify-between font-proxima text-2xl relative z-20">
          <div className="flex flex-col gap-5">
            <h1 className="font-actay text-secondary text-6xl">
              $1-2 trillion per year
            </h1>
            <p className="max-w-[60%] text-white">
              The total market size of trading platforms and brokers in the CIS
              is about
            </p>
          </div>
          <div>
            <h1 className="font-actay text-secondary text-6xl">
              0,12% - 0,24%
            </h1>
            <p className="max-w-[60%] text-white">
              Ward Broker's share of the CIS market of trading platforms and
              brokers
            </p>
          </div>
        </div>
        <img
          src={wotopus}
          alt={wotopus}
          className="absolute top-1/2 -translate-y-1/2 right-0 object-right w-3/5 z-10 max-lg:hidden"
        />
      </section>
    </main>
  );
}

export default App;

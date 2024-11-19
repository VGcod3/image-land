import octopus from "./assets/octopus.png";
// import TelegramIcon from "./assets/telegram.svg";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import Marquee from "react-fast-marquee";

function App() {
  return (
    <main>
      <div
        className="relative h-[80vh] w-screen bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage: `url(${octopus})`,
        }}
      >
        <Header />
        <Hero />
      </div>

      <Stats />

      <section className="min-h-screen w-full p-12 md:p-32 font-proxima text-lg md:text-3xl flex flex-col gap-5">
        <h1 className="font-bold font-actay text-center text-3xl md:text-5xl p-8">
          How we achieved the result:
        </h1>
        <p>
          <span className="font-bold">1. Increase social media</span> engagement
          rate from 0.06% to 1.5% using trending content.
        </p>
        <p>
          <span className="font-bold">2. Attract new traders</span> through lead
          magnets.
        </p>
        <p>
          <span className="font-bold">3. Provide mentors</span> to help increase
          each trader's trading volume.
        </p>
        <p>
          <span className="font-bold">4. Onboard new exchanges</span> from our
          partner network, reaching a broader audience.
        </p>
        <Marquee
          className="speed-90 py-3 flex z-10 mb-8"
          speed={7}
          autoFill={true}
        >
          <div className="flex flex-row justify-center items-center mr-6 gap-6 z-20">
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <img
                  src={`/Slider${index + 1}.png`}
                  width={449}
                  height={313}
                  alt=" "
                  draggable="false"
                  className="rounded-xl hover:scale-105 transition-all duration-500"
                  key={index}
                />
              ))}
          </div>
        </Marquee>
      </section>
    </main>
  );
}

export default App;

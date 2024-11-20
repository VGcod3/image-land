import octopus from "./assets/octopus.png";
// import TelegramIcon from "./assets/telegram.svg";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { HowWeAchieve } from "./components/HowWeAchieve";
import { Solutions } from "./components/Solutions";
import { Stats } from "./components/Stats";
import { SpaceOctopus } from "./components/Space";
import { RunningLine } from "./components/RunnigLine";
import { Results } from "./components/Results";

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
      <Solutions />
      <Stats />
      <Results />
      <HowWeAchieve />
      <RunningLine />
      <SpaceOctopus />
    </main>
  );
}

export default App;

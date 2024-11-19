import octopus from "./assets/octopus.png";
// import TelegramIcon from "./assets/telegram.svg";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";

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
    </main>
  );
}

export default App;

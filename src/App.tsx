import octopus from "./assets/octopus.png";

function App() {
  return (
    <main>
      <div
        className="relative h-[80vh] w-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${octopus})`,
        }}
      >
        <header className="flex p-4 gap-2 items-center">
          <h1 className="text-2xl text-black uppercase py-1 px-1.5 border-2 font-actay border-primary rounded-3xl">
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
          <p className="text-3xl font-proxima max-w-4xl">
            or how we implemented profitable marketing solutions for trading
            platform?
          </p>
        </section>
      </div>
      <section className="bg-black h-96 w-full"></section>
    </main>
  );
}

export default App;

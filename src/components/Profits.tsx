import profits1 from "../assets/profits1.png";
import profits2 from "../assets/profits2.png";

export const Profits = () => {
  return (
    <section className="min-h-screen p-8 lg:p-24 bg-black text-white text-3xl lg:text-5xl flex flex-col items-center">
      <div className="grid grid-col my-12">
        <h1 className="font-actay">
          ADS CONTROL on controlling your{" "}
          <span className="text-secondary">profits.</span>
        </h1>
        <h2 className="font-proxima text-end text-sm md:text-3xl">
          Well, how? Let's keep it a secret for now)
        </h2>
      </div>
      <div className="relative grid grid-col justify-center h-full">
        <img
          src={profits2}
          alt="profits"
          className="w-full max-w-md lg:max-w-xl mr-0"
        />
        <img
          src={profits1}
          alt="profits"
          className="w-full max-w-md lg:max-w-2xl lg:absolute lg:left-28 top-28 max-lg:mt-4"
        />
      </div>
    </section>
  );
};

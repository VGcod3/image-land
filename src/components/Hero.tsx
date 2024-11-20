export const Hero = () => {
  return (
    <section className="flex flex-col gap-4 p-4 mt-12 lg:mt-32">
      <h2 className="text-4xl lg:text-6xl text-primary font-actay uppercase max-w-5xl text-wrap">
        how we attracted more{" "}
        <span className="drop-shadow-[5px_2px_5px_#7300F4] drop-shadow-primary text-white outlined-text">
          $200mln
        </span>{" "}
        for 3 months?
      </h2>
      <p className="text-black text-xl lg:text-3xl font-proxima max-w-4xl">
        or how we implemented profitable marketing solutions for trading
        platform?
      </p>
      <div className="flex flex-col lg:flex-row justify-between text-3xl mt-40 lg:max-w-[60%] mx-8 gap-2">
        <button className="bg-white px-12 lg:px-28 py-6 rounded-full text-center text-black">
          Telegram
        </button>
        <button className="bg-white px-12 lg:px-28 py-6 rounded-full text-center text-black">
          WhatsApp
        </button>
      </div>
    </section>
  );
};

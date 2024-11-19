export const Hero = () => {
  return (
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
  );
};

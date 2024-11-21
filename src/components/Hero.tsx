import telegram from "../assets/telegram.svg";
import whatsapp from "../assets/WhatsApp.svg";

/*
      <div className=" h-screen w-screen bg-cover bg-center bg-no-repeat bg-[url(./assets/mobile-octopus.png)] lg:bg-[url(./assets/octopus.png)] ">

*/

export const Hero = () => {
  return (
    <section className="h-screen bg-[url(./assets/mobile-octopus.png)] lg:bg-[url(./assets/octopus.png)] bg-no-repeat bg-cover sm:bg-cover bg-bottom">
      <div className="h-screen flex flex-col gap-4 p-4 pt-20 pb-8 lg:pb-20 lg:pt-32 justify-between ">
        <div className="flef flex-col gap-4">
          <h2 className="text-4xl sm:text-6xl text-primary font-actay uppercase max-w-5xl text-wrap">
            how we attracted more{" "}
            <span className="drop-shadow-[5px_2px_5px_#7300F4] drop-shadow-primary text-white outlined-text">
              $200mln
            </span>{" "}
            for 3 months?
          </h2>
          <p className="text-black text-md lg:text-3xl font-proxima max-w-md lg:max-w-4xl">
            or how we implemented profitable marketing solutions for trading
            platform?
          </p>
        </div>
        <div className=" flex flex-col md:flex-row justify-between text-3xl lg:max-w-[60%] mx-8 gap-6">
          <a href="http://t.me/adscontrol_manager" className="w-full">
            <button className="w-full rounded-full hover:scale-105 transition-all duration-500 bg-white h-20 font-proxima text-black text-3xl relative">
              Telegram
              <img
                src={telegram}
                alt="telegram"
                className="absolute top-2 right-2 w-16 h-16"
              />
            </button>
          </a>
          <a href="tel:+380684266961" className="w-full">
            <button className="w-full rounded-full hover:scale-105 transition-all duration-500 bg-white h-20 font-proxima text-black text-3xl relative">
              WhatsApp
              <img
                src={whatsapp}
                alt="whatsapp"
                className="absolute top-2 right-2 w-16 h-16"
              />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

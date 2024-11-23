import conversion from "../assets/conversion.png";
import volume from "../assets/volume.png";
import activity from "../assets/activity.png";
import telegram from "../assets/telegram.svg";
import whatsapp from "../assets/WhatsApp.svg";

export const Results = () => {
  return (
    <section className="flex flex-col gap-4 p-4  bg-black">
      <div className="mx-auto max-w-7xl w-full">
        <h2 className="font-bold font-actay text-center text-2xl md:text-5xl p-8 mb-10 text-white">
          Results from the First 3 Months of Work:
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 p-8">
          <img
            src={conversion}
            alt="conversion"
            className="w-full max-w-sm mx-auto col-span-2"
          />
          <img
            src={volume}
            alt="volume"
            className="w-full max-w-sm mx-auto col-span-2"
          />
          <img
            src={activity}
            alt="activity"
            className="w-full  max-w-sm mx-auto col-span-2"
          />

          <a
            href="https://calendly.com/adscontrol_ceo"
            className="col-span-full w-full"
          >
            <button className="w-full bg-secondary hover:scale-105 transition-all duration-500 h-20 font-proxima uppercase text-black text-3xl col-span-full rounded-full">
              Book a call
            </button>
          </a>
          <a
            href="http://t.me/adscontrol_manager"
            className="col-span-full lg:col-span-3 w-full"
          >
            <button className="w-full rounded-full hover:scale-105 transition-all duration-500 bg-white h-20 font-proxima text-black text-3xl relative">
              Telegram
              <img
                src={telegram}
                alt="telegram"
                className="absolute top-2 right-2 w-16 h-16"
              />
            </button>
          </a>
          <a
            href="tel:+380684266961"
            className="col-span-full lg:col-span-3 w-full"
          >
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

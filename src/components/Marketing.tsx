import telegram from "../assets/telegram.svg";
import whatsapp from "../assets/whatsapp.svg";

export const Marketing = () => {
  return (
    <section className="p-8 lg:p-32 pb-0 bg-black text-white text-3xl lg:text-5xl flex flex-col gap-6 items-center">
      <h1 className="font-actay">
        Do you want your <span className="text-secondary">marketing</span> to be
        more than just a pretty picture and actually drive{" "}
        <span className="text-secondary">profit?</span>
      </h1>
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-8 w-full">
        <a href="calendly.com/adscontrol_ceo" className="col-span-full w-full">
          <button className="hover:scale-105 transition-all duration-500 w-full bg-secondary h-20 font-proxima uppercase text-black text-3xl col-span-full rounded-full">
            Go to free marketing consult
          </button>
        </a>
        <a
          href="http://t.me/adscontrol_manager"
          className="col-span-full lg:col-span-3 w-full"
        >
          <button className="hover:scale-105 transition-all duration-500 w-full rounded-full bg-white h-20 font-proxima text-black text-3xl relative">
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
          <button className="hover:scale-105 transition-all duration-500 w-full rounded-full bg-white h-20 font-proxima text-black text-3xl relative">
            WhatsApp
            <img
              src={whatsapp}
              alt="whatsapp"
              className="absolute top-2 right-2 w-16 h-16"
            />
          </button>
        </a>
      </div>
      <p className="font-actay text-2xl self-start mt-16 mb-4">
        2024 All rights are reserved by ADS CONTROL
      </p>
    </section>
  );
};

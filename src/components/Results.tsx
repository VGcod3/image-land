import conversion from "../assets/conversion.png";
import volume from "../assets/volume.png";
import activity from "../assets/activity.png";

export const Results = () => {
  return (
    <section className="flex flex-col gap-4 p-4  bg-black">
      <div className="mx-auto max-w-7xl w-full">
        <h2 className="font-bold font-actay text-center text-3xl md:text-5xl p-8 mb-10 text-white">
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

          <button className="w-full bg-secondary h-20 font-proxima uppercase text-black text-3xl col-span-full rounded-full">
            Contact us
          </button>
          <button className="w-full bg-white h-20 font-proxima text-black text-3xl col-span-full lg:col-span-3 rounded-full">
            Telegram
          </button>
          <button className="w-full bg-white h-20 font-proxima text-black text-3xl col-span-full lg:col-span-3 rounded-full">
            WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

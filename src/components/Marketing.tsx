export const Marketing = () => {
  return (
    <section className="p-8 lg:p-32 pb-0 bg-black text-white text-3xl lg:text-5xl flex flex-col gap-6 items-center">
      <h1 className="font-actay">
        Do you want your <span className="text-secondary">marketing</span> to be
        more than just a pretty picture and actually drive{" "}
        <span className="text-secondary">profit?</span>
      </h1>
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-8 w-full">
        <button className="w-full bg-secondary h-20 font-proxima uppercase text-black text-3xl col-span-full rounded-full">
          Contact us
        </button>
        <button className="w-full bg-white h-20 font-proxima text-black text-3xl col-span-3 rounded-full">
          Telegram
        </button>
        <button className="w-full bg-white h-20 font-proxima uppercase text-black text-3xl col-span-3 rounded-full">
          WhatsApp
        </button>
      </div>
      <p className="font-actay text-2xl self-start mt-16 mb-4">
        2024 All rights are reserved by ADS CONTROL
      </p>
    </section>
  );
};

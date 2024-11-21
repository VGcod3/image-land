export const Header = () => {
  return (
    <header className="flex p-4 gap-2 items-center max-md:justify-between text-black absolute top-0 w-full">
      <a href="https://adscontrol.io">
        <h1 className="texl-lg lg:text-2xl uppercase py-1 px-1.5 border-2 font-actay border-primary rounded-3xl w-max">
          Ads Control
        </h1>
      </a>
      <p className="font-proxima text-sm lg:text-2xl">
        Trading Platform study case
      </p>
    </header>
  );
};

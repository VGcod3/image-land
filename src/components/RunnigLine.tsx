import Marquee from "react-fast-marquee";

export const RunningLine = () => {
  return (
    <div className="bg-primary text-white uppercase py-2">
      <Marquee autoFill={true} speed={100}>
        {Array.from({
          length: 19,
        }).map((_, index) => (
          <img
            src={`/logos/logo${index + 1}.svg`}
            alt={`logo${index + 1}`}
            draggable="false"
            key={index}
            className="w-auto max-h-12 p-2 object-contain mr-2"
          />
        ))}
      </Marquee>
    </div>
  );
};

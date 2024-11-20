import clientChallenges from "../assets/client-challenges.svg";
import ourSolutions from "../assets/our-solutions.svg";

export const Solutions = () => (
  <section className="bg-black text-white p-4 grid grid-cols-1 lg:grid-cols-2 pt-32 ">
    <img
      src={clientChallenges}
      alt={clientChallenges}
      className="col-span-1 p-5"
    />
    <img
      src={ourSolutions}
      alt={ourSolutions}
      className="col-span-1 p-5 lg:mt-32"
    />
  </section>
);

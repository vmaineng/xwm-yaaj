import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsEpk from "./components/StatsEpk";
import Discograph from "./components/Discograph";
import Videos from "./components/Videos";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsEpk />
      <Discograph />
      <Videos />
    </main>
  );
}

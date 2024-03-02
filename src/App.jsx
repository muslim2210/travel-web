import React from "react";
import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import TopDestination from "./sections/TopDestination";
import TravelPoint from "./sections/TravelPoint";
import Features from "./sections/Features";

function App() {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r">
        <Hero />
      </section>
      <section className="padding">
        <Services />
      </section>
      <section className="padding">
        <TopDestination />
      </section>
      <section className="padding">
        <TravelPoint />
      </section>
      <section className="padding">
        <Features />
      </section>
    </main>
  );
}

export default App;

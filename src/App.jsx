import React from "react";
import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import TopDestination from "./sections/TopDestination";
import TravelPoint from "./sections/TravelPoint";

function App() {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
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
    </main>
  );
}

export default App;

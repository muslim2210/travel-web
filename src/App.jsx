import React from "react";
import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import TopDestination from "./sections/TopDestination";
import TravelPoint from "./sections/TravelPoint";
import Features from "./sections/Features";
import Testimoni from "./sections/Testimoni";
import Subscribe from "./sections/Subscribe";
import Footer from "./sections/Footer";

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
      <section className="padding md:bg-testi bg-cover bg-center">
        <Testimoni />
      </section>
      <section className="padding-subs">
        <Subscribe />
      </section>
      <section className="padding">
        <Footer />
      </section>
    </main>
  );
}

export default App;

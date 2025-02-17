import Nav from "./components/Nav";
import CustomersRevwies from "./sections/CustomersRevwies";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import PopularPrpducts from "./sections/PopularPrpducts";
import Services from "./sections/Services";
import SpecialOffer from "./sections/SpecialOffer";
import Subscribe from "./sections/Subscribe";
import SuperQuality from "./sections/SuperQuality";

export default function App() {
  return (
    <main className="relative">
      <Nav />

      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>

      <section className="padding">
        <PopularPrpducts />
      </section>

      <section className="padding">
        <SuperQuality />
      </section>

      <section className="padding-x py-10">
        <Services/>
      </section>

      <section className="padding">
        <SpecialOffer /> 
      </section>

      <section  className="bg-pale-blue padding">
        <CustomersRevwies />
      </section>

      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>

      <section  className="padding-x bg-black padding-t pb-8">
        <Footer/>
      </section>

    </main>
  )
}
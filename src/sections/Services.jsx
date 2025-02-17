import ServicesCard from "../components/ServicesCard";
import { services } from "../constants";


export default function Services() {
  return (
    <section className="flex flex-wrap justify-center max-conatiner gap-9">
      {services.map((service , index)=> (
        <ServicesCard key={index} {...service}/>
      ))}
    </section>
  )
}

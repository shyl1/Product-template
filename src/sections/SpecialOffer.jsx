import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

export default function SpecialOffer() {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">

      <div className="flex-1">
        <img src={offer} width={773} height={687} 
          className="object-contain w-full"
        />
      </div>

      <div className="flex flex-col flex-1">
              
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer collection
          </p>

        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold max-sm:leading-2 lg:max-w-lg">
          We Provide You
          <span className="text-coral-red "> Super</span>
          <span className="text-coral-red "> Quality</span> Shoes
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation , and a touch of elegance.
        </p>

        <p className="mt-6 lg:max-w-lg info-text">Our dediction to detail and excellence ensures your satisfaction</p>

        <div className=" flex mt-11 flex-wrap gap-5">
          <Button label="Shop now" iconURL={arrowRight}/>

          <Button label="Learn more" />

        </div>
        </div>

    </section>
  )
}

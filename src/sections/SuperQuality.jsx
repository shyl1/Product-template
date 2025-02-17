import { shoe8 } from "../assets/images"
import Button from "../components/Button"

export default function SuperQuality() {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">

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

        <div className="mt-11">
          <Button label="view details"/>
        </div>
      </div>


      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="shoe" width={570} height={522} className="object-contain"/>
      </div>

    </section>
  )
}

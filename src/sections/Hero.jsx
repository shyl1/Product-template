import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import ShoeCrad from "../components/ShoeCrad";
import { shoes, statistics } from "../constants";

export default function Hero() {

    const [bigShoeImg , setBigShoeImg] = useState(bigShoe1);

  return (
    <section 
      id="home"
      className="w-full 
      flex 
      xl:flex-row flex-col 
      justify-center 
      min-h-screen
      gap-10 
      max-container
      "
    >
      
      <div className="relative xl:w-2/5
        w-full
        flex
        flex-col
        justify-center
        items-start
        max-xl:padding-x pt-28
        ">

        <p className="text-xl font-montserrat text-coral-red">
          Our Summer collection
          </p>

        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[52px]            font-bold max-sm:leading-2">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 ">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3 max-sm:mt-2">Nike</span> Shoes
        </h1>

        <p className="font-montserrat text-slate-gray text-lg mt-9 mb-14 leading-8 sm:max-w-sm">
          Discover stylish Nike quality, comfort ,and innovation for your active life.
        </p>

        <Button label="Shop now" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 
        gap-16
        ">
          {statistics.map((stat , index)=> (
            <div key={index} className="">
              <p className="text-4xl font-montserrat font-bold">{stat.value}</p>
              <p className="leading-7 text-slate-gray font-montserrat">{stat.label}</p>
            </div>
          ))}

        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center max-xl:py-40 xl:min-h-screen bg-primary bg-hero bg-cover bg-center ">
        <img src={bigShoeImg} alt="shoe"  width={610} height={500}
          className="object-contain relative z-10"
        />

        <div className="flex absolute gap-4 sm:gap-6 -bottom-[5%] sm:left-[10%] max-sm:px-6">

          {shoes.map((shoe , index) => (
            <div key={index}>
              <ShoeCrad 
                imgURL={shoe}
                /*setter function */
                changeBigShoe = {(shoe) => setBigShoeImg(shoe)}
                /*the current image that its displaying */
                bigShoeImg = {bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>

      


    </section>
  )
}

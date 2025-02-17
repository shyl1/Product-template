export default function Button({label ,iconURL }) {
  return (
    <button className= {`flex justify-center items-center border rounded-full border-coral-red 
    px-7 py-4 gap-2 leading-none text-lg font-montserrat 
    text-white bg-coral-red` }>
      {label}

      {iconURL && <img src={iconURL} alt="arrow right" 
      className="ml-2 rounded-full w-5 h-5 "
      />}
    </button>
  )
}

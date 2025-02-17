
export default function ShoeCrad({imgURL , changeBigShoe ,bigShoeImg }) {

  const handleChangeBigShoe =() => {
    if(bigShoeImg !== imgURL.bigShoe){
      changeBigShoe(imgURL.bigShoe);
    }

  }
  return (
    <div className={`cursor-pointer max-sm:flex-1
      border-2 rounded-xl ${bigShoeImg === imgURL.bigShoe ? 'border-coral-red' : 'border-transparent'} 
    `} onClick={handleChangeBigShoe}>
  
      <div className="flex justify-center items-center  bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4" >
        <img src={imgURL.thumbnail} alt="shoe collection" />
      </div>
    </div>
  )
}

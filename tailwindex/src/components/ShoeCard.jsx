const ShoeCard = ( imgURL, changeBigShoeImage, bigShoeImg) => {
    const handleClick = () => {
        if(bigShoeImg !== imgURL.bigShoe){
            changeBigShoeImage(imgURL.bigShoe)
        }
    }
  return (
    <div className={`border-2 rounded-xl
    ${bigShoeImg === imgURL 
        ? 'border-corall-red'
        : 'border-transparent'
    } cursor-pointer max-sm:flex-1
    `}onClick={handleClick}>
        <div className="flex justify-center item-center bg-card bf-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
            <img src={imgURL.thumbnail}
            alt="shoecollection"
            width={127}
            height={102}
            className="object-contain"/>
        </div>
    </div>
  )
}

export default ShoeCard
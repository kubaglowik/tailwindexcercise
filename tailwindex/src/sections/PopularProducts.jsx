import PopularProductCard from '../components/PopularProductCard'
import { products } from "../constance"
const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12 ">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">our <span className="text-coral-red">popular</span> product</h2>
        <p className="lg:max--lg mt-2 text-slate-gray">ecperience top-notch quaility and tyle with your sought-after selections.discover a world of comfort,design and value</p>

      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product)=>(
          <PopularProductCard key= 
          {product.name} {...product} />
        ))}
      </div>
    </section>
  )
}

export default PopularProducts
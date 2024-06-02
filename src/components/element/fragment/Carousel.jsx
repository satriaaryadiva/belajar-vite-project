import { useEffect } from "react"
import { Carousel } from "react-responsive-carousel"
import { Link } from "react-router-dom"
 const  CarouselFragment=({products})=>{
   useEffect(() => {
       fetch('https://fakestoreapi.com/products/categories')
       .then(res => res.json())
       .then(categories => setCategories(categories));
   },[]);

    return(  
        <div className="w-full shadow-md shadow-black md:w-4/5 lg:w-3/5 mx-auto py-5 bg-white rounded-lg mb-8">
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-8">Best Sellers</h2>
        {/* Carousel Section */}
        <Carousel
          showThumbs={false}
          infiniteLoop
          autoPlay
          interval={3000}
          showStatus={false}
          autoFocus={true}
          useKeyboardArrows={true}
          className="shadow-lg"
        >
          {products && products.slice(0, 6).map(product => (
            <div key={product.id} className="flex flex-col items-center">
              <Link to={`/detailproduct/${product.id}`}>
                <img src={product.image} alt={product.title} className="h-72 w-72 object-cover rounded-lg shadow-md mb-4" />
                <p className="legend text-center text-sm font-semibold text-gray-800 rounded-lg py-2 px-4 bg-gray-200">{product.title}</p>
              </Link>
            </div>
          ))}
        </Carousel>
        </div>
    )
}

export default CarouselFragment
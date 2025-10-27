import { useParams } from "react-router-dom";
import product from "../features/productData";
import ProductCard from "../features/productCard";
import LayOut from "../layout/LayOut";
import { useNavigate } from "react-router-dom";
function ProductType() {
  const { sort } = useParams();
  const navigate=useNavigate()
  const sortedProduct = product.filter((item) => item.sort === sort);
console.log(sortedProduct)
  return (
    <LayOut>
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        {sort}
      </h1>

      {sortedProduct.length > 0 ? (
        <div
          className="flex flex-wrap justify-center gap-6
          sm:justify-start md:gap-8 lg:gap-10 xl:gap-12"
        >
          {sortedProduct.map((item) => (
            <div
              key={item.id}
              className=" w-[80%] h-auto m-auto sm:w-[30%] md:w-[22%] lg:w-[18%] 
              flex justify-center"
              onClick={()=>navigate(`/productDetail?id=${item.id}`)}
            >
              <ProductCard
                name={item.name}
                img={item.image}
                price={item.price}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center mt-12 text-lg">
          هیچ محصولی در این دسته وجود ندارد.
        </p>
      )}
    </LayOut>
  );
}

export default ProductType;

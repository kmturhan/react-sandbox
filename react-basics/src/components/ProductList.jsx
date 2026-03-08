import { items } from "../data";
import Product from "./Product";

export default function ProductList() {
  
  return (
    <>
    <h2 className='title'>Product List</h2>
    {
      items.length > 0 ? (
        <div className='row row-cols-2 row-cols-md-3 row-cols-cl-4 g-4' id="product-list">
        {
          items.map((item, index) => (
            <div className='col' key={ index }>
              <Product productObj={ item } />
            </div>
          ))
        }
        </div>   
      ) : (
        <p>Şu anda satışta olan ürün yok!</p>
      )
    }
    </>
  )
}
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';

function App() {
    return (
      <>
        <Header />
        <div className='container'>
          <ProductList />
        </div>
      </>
    );
}

function Header() {
  return (
    <header>
      <nav className='navbar navbar-expand bg-dark border-bottom border-body' data-bs-theme="dark">
        <div className='container'>
          <a href="#" className='navbar-brand'>Store App</a>
        </div>
      </nav>
    </header>
  );
}

function ProductList() {
  const items = [
    {
      "image": "phone2.jpg",
      "title": "Iphone",
      "description": "Lorem ipsum",
      "price": 150000,
      "is_active": true
    },
    {
      "image": "phone2.jpg",
      "title": "Iphone",
      "description": "Lorem ipsum",
      "price": 40000,
      "is_active": true
    },
    {
      "image": "phone2.jpg",
      "title": "Iphone2",
      "description": "Lorem ipsum",
      "price": 10000,
      "is_active": true
    },
    {
      "image": "phone2.jpg",
      "title": "Iphone3",
      "description": "Lorem ipsum",
      "price": 20000,
      "is_active": true
    }
  ];
  return (
    <>
    <h2 className='title'>Product List</h2>
    {
      items.length > 0 ? (
        <div className='row row-cols-2 row-cols-md-3 row-cols-cl-4 g-4' id="product-list">
        {
          items.map((item, index) => (
            <div className='col'>
              <Product key={ index } productObj={ item } />
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

function Product({ productObj }) {
  console.log(productObj);
  if(!productObj.is_active) return null;
  return (
    <div className='card shadow-sm'>
      <img className='card-img-top p-2 p-md-3 border-bottom' src={ '/img/' + productObj.image }></img>
      <div className='card-body'>
        <h2 className='card-title'>{ productObj.title }</h2>
        <p className='card-text'>{ productObj.description }</p>
        <span className={ `badge text-bg-success f20 ${productObj.price < 100000 ? "discount" : "price"}`}>{ productObj.price } TL</span>
      </div>
      
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 20;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer>
      {
        isOpen ? (
          <p>Akşam {closeHour}'ye kadar sipariş verebilirsiniz.</p>
        ) : 
        (
          <p>Şu an kapalıyız. Açılş saati {openHour}</p>
        )
      }
    </footer>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)

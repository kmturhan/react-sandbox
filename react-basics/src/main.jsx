import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

function App() {
    return (
      <>
        <Header />
        <ProductList />
        <Footer />
      </>
    );
}

function Header() {
  return (<h1>Header</h1>);
}

function ProductList() {
  const items = [
    {
      "image": "phone1.webp",
      "title": "Iphone",
      "description": "Lorem ipsum",
      "price": 80000
    },
    {
      "image": "phone1.webp",
      "title": "Iphone",
      "description": "Lorem ipsum",
      "price": 40000
    },
    {
      "image": "phone1.webp",
      "title": "Iphone2",
      "description": "Lorem ipsum",
      "price": 10000
    },
    {
      "image": "phone1.webp",
      "title": "Iphone3",
      "description": "Lorem ipsum",
      "price": 20000
    }
  ]
  const product_item = {
    "image": "phone1.webp",
    "title": "Iphone",
    "description": "Lorem ipsum",
    "price": 80000
  };
  return (
    <>
    <h2>Product List</h2>
    {
      items.map((item, index) => (
        <Product 
        key={ index }
        productObj={ item } />
    ))}
    </>
  )
}

function Product({ productObj }) {
  console.log(productObj);

  return (
    <div>
      <img src={ '/img/' + productObj.image }></img>
      <h2>{ productObj.title }</h2>
      <p>{ productObj.description }</p>
      <span>{ productObj.price } TL</span>
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
          <p>Şu an kapalıyız.</p>
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

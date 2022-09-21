import { ProductCard } from './components'

const products = [
  {
    sku: 8162,
    color: 'hot pink'
  },
  {
    sku: 8523,
    color: 'black'
  },
  {
    sku: 8523,
    color: 'burgundy'
  },
  {
    sku: 8515,
    color: 'navy'
  },
  {
    sku: 8538,
    color: 'navy'
  },
  {
    sku: 8521,
    color: 'black'
  }
]
function App() {
  return <div className="container">
    <h1>The Perfect Fit</h1>
    <div className="product-list">
    {products.map(product => <ProductCard product={product} />)}
  </div>
  </div>
}

export default App;

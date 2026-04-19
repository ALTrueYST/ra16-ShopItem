import { FuncShop } from './components/fc/FuncShop'
import { ClassShop } from './components/cc/ClassShop'
import './Apps.css'

class Item {
  constructor(brand, title, description, descriptionFull, price, currency) {
    this.brand = brand;
    this.title = title;
    this.description = description;
    this.descriptionFull = descriptionFull;
    this.price = price;
    this.currency = currency;
  }

  formattedPrice() {
    return `${this.currency}${this.price.toFixed(2)}`
  }
}

const item = new Item (
  'Tiger of Sweden',
  'Leonard coat',
  'Minimalistic coat in cotton-blend',
  'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  399,
  '£'
)

function App() {
  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
      {/* <FuncShop item={item} /> */}
      <ClassShop item={item} />
      </div>
    </div>
  )
}

export default App

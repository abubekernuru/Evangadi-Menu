import FoodItem from './components/FoodItem/FoodItem'
import './App.css'
import './components/Header/Header'
import { Component } from 'react'
import Header from './components/Header/Header'
import userData from './assets/userData'

class App extends Component {
  render() {

    return (
      <div className="all-container">
        <Header />
        <div className="foods-container">
          {userData.map(({ title, price, img, description, id, category })=>{
            return(
              <FoodItem
                key={id}
                title= {title}
                price= {price}
                img= {img}
                description= {description}
                category= {category}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default App

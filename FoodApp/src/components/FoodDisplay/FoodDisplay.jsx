import {React,useContext} from 'react'
import {StoreContext} from '../../context/StoreContext'
import FoodItemCard from '../FoodItemCard/FoodItemCard'
import './FoodDisplay.css'

const FoodDisplay = ({category}) => {

    const {food_list}=useContext(StoreContext)
  return (
    <div className='food-display'>
        <h2>Top dishes near you </h2>
        <div className='food-display-list'>
            {
                food_list.map((food,index)=>{
                    if(category==="All" || category===food.category)
                    return <FoodItemCard 
                    key = {food._id}
                    id = {food._id} 
                    name ={food.name} 
                    price={food.price} 
                    description = {food.description} 
                    image= {food.image}
                    />
                })
            }
        </div>
  
      
    </div>
  )
}

export default FoodDisplay
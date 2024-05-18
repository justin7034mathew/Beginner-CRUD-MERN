import React, {useState, useEffect} from "react"
import axios  from 'axios'
import "./App.css"


const App = () => {

  const [food, setFood] = useState('')
  const [daysAte, setDaysAte] = useState(0)

  const [foodItems, setFoodItems] = useState([])

  const [updateItems, setUpdateItems] = useState([])

  console.log(foodItems);

  // pass the data to server side
  const addButton  = () => {
    console.log(food, daysAte);
    axios.post("http://localhost:3001/fooditems",{
        foodName : food,
        days : daysAte
    }).then(({data}) => {
      console.log(data);
    }).catch((error) => {
      console.log("Error",error);
    })
  }

  //update the new foodname and pass the data to server
  const updateButton = (id) => {
    axios.put("http://localhost:3001/update", {
      updateName : updateItems,
      id : id
    })
  }

  const DeleteButton = (id) => {
    axios.delete(`http://localhost:3001/delete/${id}`, {
    })
  }

  //acees the data from sever using useeffect
  useEffect(() => {
    axios.get("http://localhost:3001/inserted").then(({data}) => {
      setFoodItems(data)
    })
  },[])

    return (
      <div className="header">
        <div className="wrapper">
          <div className="food-section">
            <h1>Food Name</h1>
            <input type="text" name="" id="" onChange={(event) => setFood(event.target.value)} />
          </div>

        <div className="days-section">
            <h2>DaysSienceAtes</h2>
            <input type="number"onChange={(event) => setDaysAte(event.target.value)} />
          <button onClick={() => addButton()}>Click</button>
        </div>
       </div>
       <div className="listing-foodSection">
       <h1>Food Item</h1>
        {
           foodItems.map((item,key) => {     
            return(
              <div className="wrapping-foodItems">
                <h2 key={key}>{item.foodName} <h3>{item.daysScienceAtes}</h3>
                <input type="text" placeholder="Enter new foodname" onChange={(e) => setUpdateItems(e.target.value)} />
                <button onClick={() => updateButton(item._id)}>Update</button>
                <button style={{backgroundColor:'red'}} onClick={() => DeleteButton(item._id)}>Delete</button>
                 </h2>
                
              </div>
             
            
            )
          })
        }
       </div>
        
       
      </div>
            
    )
}

export default App
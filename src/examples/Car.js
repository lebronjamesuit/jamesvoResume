import { useState } from "react";

function Car() {
    const [car, setCar] = useState({
      brand: "Ford",
      model: "Mustang",
      year: "1964",
      color: "red"
    });


    const updateColor = () => {
        console.log(car.brand );
        setCar(truocState => {
            return {...truocState, color:"green"}
        }) 

    }    
  
    return (
      <>
        <h1>My {car.brand}</h1>
        <p>
          It is a {car.color} {car.model} from {car.year}.
        </p>
        <button
          type="button"
          onClick={updateColor}
        >Blue</button>
      </>
    )
  }

export default Car;
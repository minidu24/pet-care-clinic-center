import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useNavigate } from "react-router-dom";
const Sell = () => {
    const {id} =useParams()
    const navigate = useNavigate();
    const { workouts, dispatch } = useWorkoutsContext()

    let imageSrc;

 /* */ switch (workouts.Animal.toLowerCase()) {
    case 'dog':
      imageSrc = require('../image/dogs.jpg');
      break;
    case 'cat':
      imageSrc = require('../image/cat.jpg');
      break;
    case 'bird':
      imageSrc = require('../image/bird.jpg');
      break;
    default:
      imageSrc = require('../image/dogs.jpg'); // Default image if no match
      break;
  }

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(`http://localhost:4000/api/buypet/${id}`)
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    }

    fetchWorkouts()
  }, [dispatch])

    useEffect(()=>{

    },[])
  
 
    
    return <div className="add-details" key={id}>
      <div className="add-cover" style={{display:"flex"}}>
      <div>
    <h1>{workouts.Breed}</h1>
    <label><strong>Animal Type:</strong>{workouts.Animal}</label>
    <label><strong>Contact:</strong>0{workouts.Contact}</label>
    <label><strong>Quantity of Aniaml:</strong>{workouts.Quantity}</label></div>
    
   
    <div >
    <img src={imageSrc} style={{ width: "200px", height: "200px", paddingLeft: "800px" }} alt='home' className='img' />
    </div>
    </div>
    <label><strong>Details of Aniaml:</strong>{workouts.Details}</label>
    <button style={{marginLeft:"1100px",fontSize:"20px", width:"100px", height:"50px"}} onClick={()=>navigate("/petshop/buypet")}>Back</button>
    </div> ;
}

export default Sell;

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useNavigate } from "react-router-dom";
const AdminSell = () => {
    const {AddId} =useParams()
    const navigate = useNavigate();
    const { workouts, dispatch } = useWorkoutsContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(`http://localhost:4000/api/buypet/${AddId}`)
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    }

    fetchWorkouts()
  }, [dispatch])

    useEffect(()=>{

    },[])
  
    
    return <div className="add-details" key={AddId}>
     <h1>{workouts.Breed}</h1>
    <label><strong>Animal Type:</strong>{workouts.Animal}</label>
    <label><strong>Contact:</strong>0{workouts.Contact}</label>
    <label><strong>Quantity of Aniaml:</strong>{workouts.Quantity}</label>
    <label><strong>Details of Aniaml:</strong>{workouts.Details}</label>
    <button  onClick={()=>navigate("/petshop/AdminveiwAdd")}>Back</button>
    </div> ;
}

export default AdminSell;

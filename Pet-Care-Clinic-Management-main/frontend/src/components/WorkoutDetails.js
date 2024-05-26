import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import { useAuthContext } from '../hooks/useAuthContext'
import { useNavigate } from "react-router-dom";

import Swal from 'sweetalert2'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext()
  const { user } = useAuthContext()

  const navigate = useNavigate();

  const handleUpdateClick = () => {
    navigate(`/petshop/petsell/sellinfo/${workout._id}`);
  };
  const handleDeleteValidation = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    })
    .then(async (result) => {
      if (result.isConfirmed) {
        // Call handleClick function here
        await handleClick();
  
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        })
      }
    });
  }
  

  const handleClick = async () => {
    if (!user) {
      return
    }

    const response = await fetch('/api/petsell/' + workout._id, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()
    console.log('response',response)
    console.log('json',json)
    if (response.ok) {
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  }

  

  return (
  
    <div className="workout-details">
      <h4>{workout.Breed}</h4>
      <p><strong>Price (Rs): </strong>{workout.Price}</p>
      <p><strong>Quantity: </strong>{workout.Quantity}</p>
      <p><strong>Contact: </strong>{workout.Contact}</p>
      
      <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
      <span className="material-symbols-outlined" onClick={handleDeleteValidation}>delete</span><br/>
     <button style={{marginTop:"130px"}}  data={workout} onClick={handleUpdateClick} >Update</button>
    
    </div>
   
  )
}

export default WorkoutDetails
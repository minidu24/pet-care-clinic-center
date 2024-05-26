import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import { useAuthContext } from '../hooks/useAuthContext'
import { useNavigate } from "react-router-dom";

//import Swal from 'sweetalert2'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext()
  const { user } = useAuthContext()

 /* const handleDeleteValidation =async()=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    })
    .then((result) => {
      
      if (result.isConfirmed) {
       

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }*/

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

    if (response.ok) {
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  }

  
  const navigate =useNavigate();
  

  return (
  
    <div className="workout-details">
      <h4>{workout.Breed}</h4>
      <p><strong>Price (Rs): </strong>{workout.Price}</p>
      <p><strong>Quentity: </strong>{workout.Quentity}</p>
      <p><strong>Contact: </strong>{workout.Contact}</p>
      <p><strong>Discription: </strong>{workout.Details}</p>
      <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span><br/>
     <button  className='veiwbtn' data={workout} onClick={()=>navigate("/petsell/sellinfo") } >Veiw</button>
    
    </div>
   
  )
}

export default WorkoutDetails

import { useNavigate } from "react-router-dom";
// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const PetsellingDetails = ({ workout }) => {
  const navigate = useNavigate();
  
  const handleUpdateClick = () => {
    navigate(`/petshop/buypet/${workout._id}`);
  };

 

  return (
    <div className="selling-details">
     <h4>{workout.Breed}</h4>
      <p><strong>Price (Rs): </strong>{workout.Price}</p>
      <p><strong>Quentity: </strong>{workout.Quantity}</p>
      <p><strong>Contact: </strong>0{workout.Contact}</p><div>
      <p className="date">{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
      <button style={{marginLeft:"60px"}} onClick={handleUpdateClick}>Veiw</button></div>

    </div>
   
  )
}

export default PetsellingDetails
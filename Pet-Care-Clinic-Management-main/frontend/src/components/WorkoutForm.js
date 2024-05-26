import { useState } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useAuthContext } from '../hooks/useAuthContext'

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext()
  const { user } = useAuthContext()

  
  const [Animal, setAnimal] = useState('')
  const [Breed, setBreed] = useState('')
  
  const [Price, setPrice] = useState('')
  const [Quantity, setQuentity] = useState('')
  const [Details, setDetails] = useState('')
  const [Contact, setContact] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!user) {
      setError('You must be logged in')
      return
    }

    const workout = {Animal,Breed,Price,Quantity,Contact,Details}

    const response = await fetch('/api/petsell', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setAnimal('')
      setBreed('')
      
      setPrice('')
      setDetails('')
      setQuentity('')
      setContact('')
      setError(null)
      setEmptyFields([])
      dispatch({type: 'CREATE_WORKOUT', payload: json})
    }
  }

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add Selling Advertisment</h3>

      <label>Animal:</label>
      <select Name="animal" id="cars" onChange={(e) => setAnimal(e.target.value)}
        value={Animal}
        className={emptyFields.includes('Animal') ? 'error' : ''}>
      <option value="" >Select Animal</option>
      <option value="Cat">Cat</option>
      <option value="Dog">Dog</option>
      <option value="Bird">Bird</option>
    </select>
     

      
      <label>Breed Name:</label>
      <input 
        type="text" 
        onChange={(e) => setBreed(e.target.value)}
        value={Breed}
        className={emptyFields.includes('Breed') ? 'error' : ''}
      />
     

      <label>Price (in Rs.):</label>
      <input 
        type="number"
        onChange={(e) => setPrice(e.target.value)}
        value={Price}
        className={emptyFields.includes('Price') ? 'error' : ''}
      />
      <label>Quentity :</label>
      <input 
        type="number"
        onChange={(e) => setQuentity(e.target.value)}
        value={Quantity}
        className={emptyFields.includes('Quantity') ? 'error' : ''}
      />

     <label>Contact:</label>
      <input 
        type="tel" 
        pattern="[0-9]{9}"
        placeholder="Enter Number Without 0  eg-748454122"
        maxLength={9}
        onChange={(e) => setContact(e.target.value)}
        value={Contact}
        className={emptyFields.includes('Contact') ? 'error' : ''}
      />

      <label>Discription:</label>
      <textarea 
        rows={6} cols={40}
        onChange={(e) => setDetails(e.target.value)}
        value={Details}
        className={emptyFields.includes('Details') ? 'error' : ''}
      />
     
      

      <button>Add Advertisement</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default WorkoutForm
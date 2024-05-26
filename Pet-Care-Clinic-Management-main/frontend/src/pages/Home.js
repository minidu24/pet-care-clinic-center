import { useEffect,useState }from 'react'
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useAuthContext } from "../hooks/useAuthContext"

// components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {

  const {workouts, dispatch} = useWorkoutsContext()
  const {user} = useAuthContext()
  const [search,setSearch] =useState('')
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/petsell', {
        headers: {'Authorization': `Bearer ${user.token}`},
      })
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    }

    if (user) {
      fetchWorkouts()
    }
  }, [dispatch, user])

  return (
    <div>
      <input onChange ={(e)=>setSearch(e.target.value)}
     type="text"
     name="search"
     placeholder="search records" style={{width:'30%',marginLeft:"500px"}}/>
    <div className="home">
      
      <div className="workouts">
        {workouts && workouts.filter((workouts)=>{
          return (search.toLowerCase() === '' ?workouts: workouts.Breed.toLowerCase().includes(search)
                    
        )
        }
        
      ).map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
      </div>
      <WorkoutForm />
    </div></div>
  )
}

export default Home
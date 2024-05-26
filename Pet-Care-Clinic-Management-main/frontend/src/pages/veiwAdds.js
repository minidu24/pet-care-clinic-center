import { useEffect, useState } from "react"

// components
import WorkoutDetails from '../components/PetSellingAdds'

const BuyPet = () => {
  const [BuyPet, setBuyPet] = useState(null)

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/buypet')
      const json = await response.json()

      if (response.ok) {
        setBuyPet(json)
      }
    }

    fetchPosts()
  }, [])

  return (
    <div className="home">
      <div className="workouts">
        {BuyPet && BuyPet.map((Post) => (
            <WorkoutDetails key={Post._id} workout={Post} />
        ))}
      </div>
    </div>
  )
}

export default BuyPet
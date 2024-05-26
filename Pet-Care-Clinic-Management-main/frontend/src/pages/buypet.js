import { useEffect, useState } from "react"

// components
import WorkoutDetails from '../components/PetSellingAdds'

const BuyPet = () => {
  const [BuyPet, setBuyPet] = useState(null)
  const [search,setSearch] =useState('')
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
    <div>

<input onChange ={(e)=>setSearch(e.target.value)}
     type="text"
     name="search"
     placeholder="search records" style={{width:'30%',marginLeft:"500px"}}/>
    

    <div className="buyhome">
    <div className="buy">

        {BuyPet && BuyPet.filter((buypet)=>{
          return (search.toLowerCase() === '' ?buypet: buypet.Breed.toLowerCase().includes(search)
                    
        )
        }
        
      ).map((Post) => (
            <WorkoutDetails key={Post._id} workout={Post} />
        ))}
      </div>
    </div>
    </div>
  )
}

export default BuyPet
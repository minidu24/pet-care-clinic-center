import { useState } from "react"

const AddItemForm = () => {
  const [ItemName, setItemName] = useState('')
  const [Category, setCategory] = useState('')
  const [ForWhatPet, setForWhatPet] = useState('')
  const [Price, setPrice] = useState('')
  const [Discription, setDiscription] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const Item = {ItemName,ForWhatPet,Category, Price,Discription}
   
    const response = await fetch('/api/Items', {
      method: 'POST',
      body: JSON.stringify(Item),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setError(null)
      setItemName('')
      setCategory('')
      setForWhatPet('')
      setPrice('')
      setDiscription('')
      console.log('new Item added:', json)
    }

  }


    return ( 
        <div className="AddingForm">
            <form className="ItemForm"  onSubmit={handleSubmit}>
                <h1>Add New Item</h1><hr/>
                <label>Product Name :</label>
                <input
                    type='text'
                    onChange={(e)=>setItemName(e.target.value)}
                    value={ItemName}
                   
                />

                <label>ForWhatPet :</label>
                <select Name="animal" style={{
                  height:'40px',marginBottom:'15px'
                }} id="pet" onChange={(e) => setForWhatPet(e.target.value)}
                value={ForWhatPet}
               >
                  <option value="" >Select Animal</option>
                  <option value="cat">Cat</option>
                  <option value="dog">Dog</option>
                  
                </select>
     
               

                <label>Category :</label>
                <select Name="category" style={{
                  height:'40px',
                  marginBottom:'15px'
                }} id="category" onChange={(e) => setCategory(e.target.value)}
                value={Category}
               >
                  <option value="" >Select Category</option>
                  <option value="Wet-Food">Wet Food</option>
                  <option value="Dry-Food">Dry Food</option>
                  
                </select>
          

                <label>Price :</label>
                <input
                    type='number'
                    onChange={(e)=>setPrice(e.target.value)}
                    value={Price}
                   
                />

                <label>Discription :</label>
                <textarea onChange={(e)=>setDiscription(e.target.value)}
                    value={Discription} rows={10} cols={188}  style={{borderRadius:'5px'}}/>
                

                 <button>Add Item</button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
     );
}
 
export default AddItemForm
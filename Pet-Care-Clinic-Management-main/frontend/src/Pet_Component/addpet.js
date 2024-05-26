import { useState } from "react";
import axios from "axios";
import './add service.css'

function AddPet() {
    const [order, setOrder] = useState({
        select_doctor: "",
        select_method: "",
        t_pet_name: "",
        date: ""
    });
    const [errors, setErrors] = useState({
        t_pet_name: "",
        date: ""
    });

    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setOrder((prevOrder) => ({
            ...prevOrder,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if Pet Name and Date are empty
        const newErrors = {};
        if (!order.t_pet_name.trim()) {
            newErrors.t_pet_name = "Pet Name is required.";
        }
        if (!order.date.trim()) {
            newErrors.date = "Date is required.";
        }
        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return; // Stop submission if there are errors
        }

        // If Pet Name and Date are not empty, proceed with form submission
        try {
            const response = await axios.post("http://localhost:4000/create_pet", order);
            console.log(response.data);
            alert("Your details have been added!");
        } catch (error) {
            console.error("Error adding pet details:", error);
            alert("An error occurred while adding pet details. Please try again.");
        }
    };

    return (
        <div className="add-service">
            <h2>Add Pet Details</h2>
            <form onSubmit={handleSubmit}>
                <label>Select Doctor:</label>
                <select id="select_doctor" name="select_doctor" onChange={handleOnChange}>
                    <option>Doctor 1</option>
                    <option>Doctor 2</option>
                    <option>Doctor 3</option>
                </select>
                <label>Method:</label>
                <select id="select_method" name="select_method" onChange={handleOnChange}>
                    <option>Whatsapp Call</option>
                    <option>Normal Call</option>
                    <option>Meeting</option>
                </select>
                <label>Pet Name:</label>
                <input type="text" id="t_pet_name" name="t_pet_name" onChange={handleOnChange} />
                {errors.t_pet_name && <p className="error">{errors.t_pet_name}</p>}
                <label>Date:</label>
                <input type="date" id="date" name="date" onChange={handleOnChange} />
                {errors.date && <p className="error">{errors.date}</p>}
          
               <button><a href="adduserpayment">Add Details</a></button> 
            </form><br />
     
          
        
        </div>
    );
}

export default AddPet;
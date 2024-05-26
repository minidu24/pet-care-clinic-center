import { useState } from "react";
import axios from "axios";
import './add service.css'

function AddService(){
    const [order, setOrder] = useState({
        name:"",
        email:"",
        contact:"",
        doctor:"",
        date:"",
        time:""
    });

    const [errors, setErrors] = useState({}); // State to hold validation errors

    const handleOnChange = (e) => {
        const { value, name } = e.target;
        let error = ""; // Initialize error message
        // Validation for each field
        switch (name) {
            case "name":
                error = !/^[A-Za-z\s]+$/.test(value) ? "Name must contain only letters and spaces" : "";
                break;
            case "email":
                error = !/\S+@\S+\.\S+/.test(value) ? "Email address is invalid" : "";
                break;
            case "contact":
                error = !/^\d{10}$/.test(value) ? "Contact number must be 10 digits long" : "";
                break;
            case "date":
                // You can add more complex validation for date if needed
                error = value === "" ? "Date is required" : "";
                break;
            case "time":
                // You can add more complex validation for time if needed
                error = value === "" ? "Time is required" : "";
                break;
            default:
                break;
        }
        // Update the errors state
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: error
        }));
        
        setOrder(prevOrder => ({
            ...prevOrder,
            [name]: value
        }));
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if there are any validation errors
        for (const key in order) {
            handleOnChange({ target: { name: key, value: order[key] } });
        }

        // If there are errors, prevent form submission
        if (Object.values(errors).some(error => error !== "")) {
            return;
        }

        // If there are no errors, proceed with form submission
        const data = await axios.post("http://localhost:4000/create", order);
        console.log(data);
        alert("Your details added now!");

        // Send thank you email
        await axios.post("http://localhost:4000/send-email", { email: order.email });
        console.log("Thank you email sent to:", order.email);
    };

    return(
        <div className="body">
            <div className="add-service">
                <h2>Channelling Form</h2>
                <form onSubmit={handleSubmit}>
                    <label>Patient Name:</label>
                    <input type="text" id="name" name="name" value={order.name} onChange={handleOnChange}/>
                    {errors.name && <span className="error">{errors.name}</span>}<br/>

                    <label>Email:</label>
                    <input type="text" id="email" name="email" value={order.email} onChange={handleOnChange}/>
                    {errors.email && <span className="error">{errors.email}</span>}<br/>

                    <label>Contact :</label>
                    <input type="text" id="contact" name="contact" value={order.contact} onChange={handleOnChange}/>
                    {errors.contact && <span className="error">{errors.contact}</span>}<br/>

                    <label>Doctor:</label>
                    <select id="doctor" name="doctor" value={order.doctor} onChange={handleOnChange}>
                        <option>Doctor1</option>
                        <option>Doctor2</option>
                        <option>Doctor3</option>
                    </select><br/>

                    <label>Date:</label>
                    <input type="date" id="date" name="date" value={order.date} onChange={handleOnChange}/>
                    {errors.date && <span className="error">{errors.date}</span>}<br/>

                    <label>Time:</label>
                    <input type="time" id="time" name="time" value={order.time} onChange={handleOnChange}/>
                    {errors.time && <span className="error">{errors.time}</span>}<br/>

                    <button id="addservicebtn" >Order Place</button>
                </form>
            </div>
        </div>
    );
}
export default AddService;

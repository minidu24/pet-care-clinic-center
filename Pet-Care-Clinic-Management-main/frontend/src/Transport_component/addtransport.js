import { useState } from "react";
import axios from "axios";
import './add service.css';

function AddTransport() {
    const [order, setOrder] = useState({
        owner_name: "",
        email: "",
        t_pet_name: "",
        address: "",
        phone: "",
        description: ""
    });

    const [errors, setErrors] = useState({
        owner_name: "",
        email: "",
        phone: ""
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

        // Validation
        const newErrors = {};

        if (!order.owner_name.trim()) {
            newErrors.owner_name = "Owner Name is required.";
        }

        if (!order.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!isValidEmail(order.email)) {
            newErrors.email = "Invalid email format.";
        }

        if (!/^\d+$/.test(order.phone.trim())) {
            newErrors.phone = "Phone number must contain only numeric values.";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return; // Stop submission if there are errors
        }

        // If validation passes, proceed with form submission
        try {
            const data = await axios.post("http://localhost:4000/create_transport", order);
            console.log(data);
            alert("Your details have been added!");

            // Send thank you email
            await axios.post("http://localhost:4000/send-email", { email: order.email });
            console.log("Thank you email sent to:", order.email);
        } catch (error) {
            console.error("Error adding transport details:", error);
            alert("An error occurred while adding transport details. Please try again.");
        }
    };

    const isValidEmail = (email) => {
        // Email validation regular expression
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    return (
        <div className="add-service">
            <h2>Add Transport</h2>
            <form onSubmit={handleSubmit}>
                <label>Owner Name:</label>
                <input type="text" id="owner_name" name="owner_name" onChange={handleOnChange} />
                {errors.owner_name && <p className="error">{errors.owner_name}</p>}
                <label>Email:</label>
                <input type="text" id="email" name="email" onChange={handleOnChange} />
                {errors.email && <p className="error">{errors.email}</p>}
                <label>Pet Name:</label>
                <input type="text" id="t_pet_name" name="t_pet_name" onChange={handleOnChange} /><br />
                <label>Address:</label>
                <input type="text" id="address" name="address" onChange={handleOnChange} /><br />
                <label>Contact Details:</label>
                <input type="text" id="phone" name="phone" onChange={handleOnChange} />
                {errors.phone && <p className="error">{errors.phone}</p>}
                <label>Description:</label>
                <input type="text" id="description" name="description" onChange={handleOnChange} /><br />
                <button><a href="adduserpayment">Add Details</a></button> 
            </form><br />
        </div>
        
    );
}

export default AddTransport;
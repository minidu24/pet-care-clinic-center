import React, { useState } from "react";
import axios from "axios";
import "./addorder.css";

function AddUser() {
  
  const [order, setOrder] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postal: "",
    state: ""
  });

  const [errors, setErrors] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postal: "",
    state: ""
  });

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setOrder(prevState => ({
      ...prevState,
      [name]: value
    }));
    validateInput(name, value);
  };

  const validateInput = (name, value) => {
    switch (name) {
      case "first_name":
      case "last_name":
      case "city":
      case "state":
        setErrors(prevState => ({
          ...prevState,
          [name]: /^[a-zA-Z\s]*$/.test(value) ? "" : "Field must contain only letters and spaces"
        }));
        break;
      case "email":
        setErrors(prevState => ({
          ...prevState,
          email: /\S+@\S+\.\S+/.test(value) ? "" : "Invalid email address"
        }));
        break;
      case "phone":
        setErrors(prevState => ({
          ...prevState,
          phone: /^[0-9]{10}$/.test(value) ? "" : "Phone number must be 10 digits long"
        }));
        break;
      case "postal":
        setErrors(prevState => ({
          ...prevState,
          postal: /^[0-9]{6}$/.test(value) ? "" : "Postal code must be 6 digits long"
        }));
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check for any validation errors
    for (const key in order) {
      validateInput(key, order[key]);
    }
    // If there are no errors, submit the form
    if (Object.values(errors).every(error => error === "")) {
      const data = await axios.post("http://localhost:4000/create_users", order);
      console.log(data);
      alert("Order added to Cart!");
    } else {
      alert("Please fill in the required fields correctly");
    }
  };

  return (
    <div className="add-order">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>First Name:</label>
          <input type="text" id="first_name" name="first_name" onChange={handleOnChange} />
          {errors.first_name && <span className="error">{errors.first_name}</span>}
        </div>
        <div className="input-group">
          <label>Last Name:</label>
          <input type="text" id="last_name" name="last_name" onChange={handleOnChange} />
          {errors.last_name && <span className="error">{errors.last_name}</span>}
        </div>
        <div className="input-group">
          <label>Email:</label>
          <input type="text" id="email" name="email" onChange={handleOnChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="input-group">
          <label>Contact Number:</label>
          <input type="text" id="phone" name="phone" style={{width:"200px"}} onChange={handleOnChange} />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>
        <div className="input-group">
          <label>Address:</label>
          <input type="text" id="address" name="address" className="big-input" onChange={handleOnChange} />
          {errors.address && <span className="error">{errors.address}</span>}
        </div>
        <div className="input-group">
          <label>City:</label>
          <input type="text" id="city" name="city" onChange={handleOnChange} />
          {errors.city && <span className="error">{errors.city}</span>}
        </div>
        <div className="input-group">
          <label>Postal Code:</label>
          <input type="text" id="postal" name="postal" style={{width:"200px"}} onChange={handleOnChange} />
          {errors.postal && <span className="error">{errors.postal}</span>}
        </div>
        <div className="input-group">
          <label>State:</label>
          <input type="text" id="state" name="state" onChange={handleOnChange} />
          {errors.state && <span className="error">{errors.state}</span>}
        </div>
        <button id="btnad">Save and Continue</button>
      </form>
      <br />
      <a href="addpayment">Add Payment</a>
    </div>
  );
}

export default AddUser;
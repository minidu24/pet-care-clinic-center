import React, { useState } from "react";
import axios from "axios";
import "./addorder.css";

function AddPayment() {
  const [payment, setPayment] = useState({
    U_name: "",
    card_number: "",
    card_holder: "",
    expir_date: "",
    cvc: "",
    coupon_code: "",
  });

  const [errors, setErrors] = useState({
    U_name: "",
    card_number: "",
    card_holder: "",
    expir_date: "",
    cvc: "",
    coupon_code: "",
  });

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setPayment((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    validateInput(name, value);
  };

  const validateInput = (name, value) => {
    switch (name) {
      case "U_name":
        setErrors((prevState) => ({
          ...prevState,
          U_name: /^[a-zA-Z\s]*$/.test(value) ? "" : "Username must contain only letters and spaces",
        }));
        break;
      case "card_number":
        setErrors((prevState) => ({
          ...prevState,
          card_number: value.length !== 16 ? "Card number must be 16 digits long" : "",
        }));
        break;
      case "card_holder":
        setErrors((prevState) => ({
          ...prevState,
          card_holder: /^[a-zA-Z\s]*$/.test(value) ? "" : "Card holder name must contain only letters and spaces",
        }));
        break;
      case "expir_date":
        const currentDate = new Date();
        const selectedDate = new Date(value);
        setErrors((prevState) => ({
          ...prevState,
          expir_date: selectedDate < currentDate ? "The card is expired" : "",
        }));
        break;
      case "cvc":
        setErrors((prevState) => ({
          ...prevState,
          cvc: value.length !== 3 ? "CVC must be 3 digits long" : "",
        }));
        break;
      case "coupon_code":
        setErrors((prevState) => ({
          ...prevState,
          coupon_code: /^\d{5}$/.test(value) ? "" : "Promo code must be 5 digits",
        }));
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if there are any validation errors
    for (const key in payment) {
      validateInput(key, payment[key]);
    }

    // If there are no errors, proceed with submitting the form
    if (Object.values(errors).every((error) => error === "")) {
      const data = await axios.post("http://localhost:4000/create_payment", payment);
      console.log(data);
      alert("Payment confirmed!");
    } else {
      alert("Please fill in the required fields correctly");
    }
  };

  return (
    <div className="add-order">
      <h2>Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>User Name:</label>
          <input type="text" id="U_name" name="U_name" onChange={handleOnChange} />
          {errors.U_name && <span className="error">{errors.U_name}</span>}
        </div>
        <div className="input-group">
          <div>
            <label>Card Holder:</label>
            <input type="text" id="card_holder" name="card_holder" onChange={handleOnChange} />
            {errors.card_holder && <span className="error">{errors.card_holder}</span>}
          </div>
          <div>
            <label>Card Number:</label>
            <input type="text" id="card_number" name="card_number" maxLength={16} onChange={handleOnChange} />
            {errors.card_number && <span className="error">{errors.card_number}</span>}
          </div>
        </div>
        <div className="input-group">
          <div>
            <label>Expiry Date:</label>
            <input type="date" id="expir_date" name="expir_date" onChange={handleOnChange} />
            {errors.expir_date && <span className="error">{errors.expir_date}</span>}
          </div>
          <div>
            <label>CVC:</label>
            <input type="text" id="cvc" maxLength={3} name="cvc" onChange={handleOnChange} />
            {errors.cvc && <span className="error">{errors.cvc}</span>}
          </div>
        </div>
        <div className="input-group">
          <label>Coupon Code:</label>
          <input type="text" id="coupon_code" style={{width:"200px"}} name="coupon_code"maxLength={5}  onChange={handleOnChange} />
          {errors.coupon_code && <span className="error">{errors.coupon_code}</span>}
        </div>
        <button style={{marginTop:"150px",marginLeft:"-50px"}}>Confirm Payment</button>
      </form>
    </div>
  );
}

export default AddPayment;
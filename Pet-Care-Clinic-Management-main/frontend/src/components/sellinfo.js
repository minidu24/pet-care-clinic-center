import React, { useEffect, useState } from 'react';
import { useParams, useNavigate  } from 'react-router-dom';

const SellInfo = () => {
    const { workoutId } = useParams();
    const [initialValues, setInitialValues] = useState(null);
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [contact, setContact] = useState('');
    const [details, setDetails] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchWorkoutDetails = async () => {
            try {
                const response = await fetch(`http://localhost:4000/api/buypet/${workoutId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch workout details');
                }
                const data = await response.json();
                setInitialValues(data);
                setPrice(data.Price);
                setQuantity(data.Quantity);
                setContact(data.Contact);
                setDetails(data.Details);
            } catch (error) {
                console.error('Error fetching workout details:', error);
            }
        };

        fetchWorkoutDetails();
    }, [workoutId]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Input validation
        if (!price || !quantity || !contact || !details) {
            alert('Please fill in all fields');
            return;
        }

        const updatedDocument = {
            Price: parseFloat(price),
            Quantity: parseInt(quantity),
            Contact: contact,
            Details: details
        };

        fetch(`http://localhost:4000/api/buypet/${workoutId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedDocument)
        })
        .then(response => {
            if (response.ok) {
                console.log('Document updated successfully');
                alert('Document updated successfully');
                // Redirect to another page after successful update
                navigate("/petshop/petsell");
            } else {
                throw new Error('Failed to update document');
            }
        })
        .catch(error => {
            console.error('Error updating document:', error);
            alert('Failed to update document');
        });
    };

    if (!initialValues) {
        return <div>Loading...</div>;
    }

    return ( 
        <div className="petinfo">
            <form onSubmit={handleSubmit}>
                <label>
                    Price:
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Quantity:
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Contact:
                    <input
                        type="text"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Details:
                    <input
                        type="text"
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Update</button>
            </form>
        </div>
     );
}
 
export default SellInfo;

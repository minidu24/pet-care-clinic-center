import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ScheduleEdit = () => {
  const { id } = useParams();
  const [schedule, setSchedule] = useState({});
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const response = await axios.get(`/api/schedule/edit/${id}`);
        setSchedule(response.data);
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching schedule:', error);
      }
    };

    fetchSchedule();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/schedule/update/${id}`, formData);
      // Redirect or show success message
    } catch (error) {
      console.error('Error updating schedule:', error);
    }
  };

  return (
    <div>
      <h1>Edit Schedule</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="employeeName">Employee Name:</label>
        <input type="text" id="employeeName" name="employeeName" value={formData.employeeName} onChange={handleChange} required /><br/><br/>

        <label htmlFor="shiftDate">Shift Date:</label>
        <input type="date" id="shiftDate" name="shiftDate" value={formData.shiftDate} onChange={handleChange} required /><br/><br/>

        <label htmlFor="shiftTime">Shift Time:</label>
        <input type="time" id="shiftTime" name="shiftTime" value={formData.shiftTime} onChange={handleChange} required /><br/><br/>

        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default ScheduleEdit;

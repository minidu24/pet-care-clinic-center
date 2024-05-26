/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ScheduleList = () => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const response = await axios.get('/api/schedule');
        setSchedules(response.data);
      } catch (error) {
        console.error('Error fetching schedules:', error);
      }
    };

    fetchSchedules();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/schedule/delete/${id}`);
      setSchedules(schedules.filter((schedule) => schedule._id !== id));
    } catch (error) {
      console.error('Error deleting schedule:', error);
    }
  };

  return (
    <div>
      <h1>Schedule List</h1>
      <ul>
        {schedules.map((schedule) => (
          <li key={schedule._id}>
            <Link to={`/schedule/${schedule._id}`}>{schedule.employeeName}</Link>
            <button onClick={() => handleDelete(schedule._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScheduleList;*/
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ScheduleList = () => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const response = await axios.get('/api/schedule');
        setSchedules(response.data);
      } catch (error) {
        console.error('Error fetching schedules:', error);
      }
    };

    fetchSchedules();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/schedule/delete/${id}`);
      setSchedules(schedules.filter((schedule) => schedule._id !== id));
    } catch (error) {
      console.error('Error deleting schedule:', error);
    }
  };

  return (
    <div>
      <h1>Schedule List</h1>
      <ul>
        {schedules.map((schedule) => (
          <li key={schedule._id}>
            <Link to={`/schedule/${schedule._id}`}>{schedule.employeeName}</Link>
            <button onClick={() => handleDelete(schedule._id)}>Delete</button>
            <Link to={`/schedule/edit/${schedule._id}`}>
              <button>Update</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScheduleList;

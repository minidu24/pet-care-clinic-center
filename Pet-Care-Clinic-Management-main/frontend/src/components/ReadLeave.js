
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/realleave.css';

const ReadLeave = () => {
  const [leaves, setLeaves] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [noResults, setNoResults] = useState(false);

  const fetchLeaves = async () => {
    try {
      const res = await axios.get('http://localhost:4000/leave');
      setLeaves(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchLeaves();
  }, []);

  const handleApprove = () => {
    const phoneNumber = "+94762427122";
    const message = 'Request Approved';
    const WhatsAppUrl = `https://web.whatsapp.com/send?phone=${encodeURIComponent(phoneNumber)}&text=${encodeURIComponent(message)}`;
    window.open(WhatsAppUrl, "_blank");
  };

  const handleReject = () => {
    const phoneNumber = "+94762427122";
    const message = 'Request Rejected';
    const WhatsAppUrl = `https://web.whatsapp.com/send?phone=${encodeURIComponent(phoneNumber)}&text=${encodeURIComponent(message)}`;
    window.open(WhatsAppUrl, "_blank");
  };

  const handleSearch = async () => {
    try {
      await fetchLeaves();
      const filteredleaves = leaves.filter((leave) =>
        Object.values(leave).some((field) =>
          field.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setLeaves(filteredleaves);
      setNoResults(filteredleaves.length === 0);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>All Leave Requests</h2>
      <p><input
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        name="search"
        placeholder="Search Leave Requests Details"
        style={{width:'500px'}}/>
      <button onClick={handleSearch} style={{width:'10%',marginLeft:'10px'}}>Search</button></p>
      {noResults ? (
        <div>
          <p>No Users Found</p>
        </div>
      ) : (
      <table className="leaves">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Position</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Reason</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {leaves.map((leave) => (
            <tr key={leave._id}>
              <td>{leave.employeename}</td>
              <td>{leave.position}</td>
              <td>{leave.startDate}</td>
              <td>{leave.endDate}</td>
              <td>{leave.reason}</td>
              <td>
                <button className="approve" onClick={handleApprove}>Approve</button>
                <button className="reject" onClick={handleReject}>Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      )}
    </div>
  );
};

export default ReadLeave;

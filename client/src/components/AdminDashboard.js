import { useEffect, useState } from "react";
import "./AdminDashboard.css";

function AdminDashboard() {
  const [rsvps, setRsvps] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/rsvp")
      .then((res) => res.json())
      .then((data) => setRsvps(data))
      .catch((err) => console.log(err));
  }, []);

  const totalGuests = rsvps.reduce(
    (sum, item) => sum + item.guests,
    0
  );

  return (
    <div className="dashboard">

      <h1>📊 EventEase Admin Dashboard</h1>

      <div className="cards">

        <div className="card">
          <h3>👥 Registrations</h3>
          <h2>{rsvps.length}</h2>
        </div>

        <div className="card">
          <h3>🎫 Guests</h3>
          <h2>{totalGuests}</h2>
        </div>

        <div className="card">
          <h3>📧 Emails</h3>
          <h2>{rsvps.length}</h2>
        </div>

      </div>

      <table>

        <thead>

          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Guests</th>
          </tr>

        </thead>

        <tbody>

          {rsvps.map((item) => (

            <tr key={item._id}>

              <td>{item.name}</td>

              <td>{item.email}</td>

              <td>{item.phone}</td>

              <td>{item.guests}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default AdminDashboard;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

function AdminDashboard() {
  const [rsvps, setRsvps] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  // Fetch RSVP data automatically every 5 seconds
  useEffect(() => {
    const fetchRSVPs = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/rsvp"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch RSVP data");
        }

        const data = await response.json();
        setRsvps(data);
      } catch (error) {
        console.error("Error fetching RSVPs:", error);
      }
    };

    fetchRSVPs();

    const interval = setInterval(fetchRSVPs, 5000);

    return () => clearInterval(interval);
  }, []);

  // Calculate total guests
  const totalGuests = rsvps.reduce(
    (sum, item) => sum + Number(item.guests || 0),
    0
  );

  // Search registrations by name or email
  const filteredRSVPs = rsvps.filter((item) => {
    const name = item.name || "";
    const email = item.email || "";
    const searchText = search.toLowerCase();

    return (
      name.toLowerCase().includes(searchText) ||
      email.toLowerCase().includes(searchText)
    );
  });

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("isAdmin");
    navigate("/admin-login");
  };

  return (
    <div className="admin-dashboard">
      {/* Dashboard Header */}
      <div className="dashboard-header">
        <div>
          <h1>📊 EventEase Admin Dashboard</h1>
          <p>Manage and monitor event registrations</p>
        </div>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          🚪 Logout
        </button>
      </div>

      {/* Statistics Cards */}
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

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="🔍 Search by name or email..."
          className="search-box"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* RSVP Table */}
      <div className="table-container">
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
            {filteredRSVPs.length > 0 ? (
              filteredRSVPs.map((item) => (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.guests}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">
                  No RSVP found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDashboard;
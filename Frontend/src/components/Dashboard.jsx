import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");  // Redirect to login if not authenticated
      return;
    }

    axios.get("http://localhost:4001/api/protected", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(response => {
      setData(response.data);
    })
    .catch(error => {
      console.error("Error fetching protected data:", error);
    });
  }, [token, navigate]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
}

export default Dashboard;

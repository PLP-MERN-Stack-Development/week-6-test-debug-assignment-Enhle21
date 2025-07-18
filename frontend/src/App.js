import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [bugs, setBugs] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const fetchBugs = async () => {
    const res = await axios.get("http://localhost:5000/api/bugs");
    setBugs(res.data);
  };

  useEffect(() => { fetchBugs(); }, []);

  const addBug = async () => {
    await axios.post("http://localhost:5000/api/bugs", { title, description });
    fetchBugs();
  };

  return (
    <div>
      <h1>Bug Tracker</h1>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
      <input value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />
      <button onClick={addBug}>Report Bug</button>
      <ul>
        {bugs.map(bug => (
          <li key={bug._id}>{bug.title} - {bug.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
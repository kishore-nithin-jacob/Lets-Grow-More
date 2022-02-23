import { useState } from "react";
import "./styles.css";

export default function App() {
  const [apiData, apiDetails] = useState([]);
  const loadData = async () => {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const jsonResponse = await response.json();
    apiDetails(jsonResponse.data);
  };
  return (
    <div className="App">
      <div id="section1">
        <span> LetsGrowMore Task-2 </span>
        <input type="button" onClick={loadData} value="Get Users" />
      </div>
      <div id="credits">-Task done by Kishore Nithin Jacob</div>
      <div id="userDetailsContainer">
        {apiData.map((fetchData) => (
          <div id="userDetails">
            <img src={fetchData.avatar} alt="img" />
            <p id="name">
              {" "}
              {fetchData.first_name} {fetchData.last_name}
            </p>
            <p id="email"> {fetchData.email} </p>
          </div>
        ))}
      </div>
    </div>
  );
}

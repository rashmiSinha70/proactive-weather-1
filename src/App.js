import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [inputLocation, setInputLocation] = useState("");
  const [search, setSearch] = useState(false);

  async function fetchapi(inputLocation) {
    const options = {
      method: "POST",
      body: JSON.stringify({
        location: inputLocation,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    let data = await fetch("http://localhost:8000/search", options);
    let jsonData = await data.json();

    console.log(jsonData);
  }

  useEffect(() => {
    if (search) {
      fetchapi(inputLocation);
      setSearch(false)
    }
  }, [inputLocation, search]);
  return (
    <div className="App">
      <input
        type="text"
        id="searchbox"
        value={inputLocation}
        onChange={(e) => {
          setInputLocation(e.target.value);
          
        }}
      ></input>
      <button onClick={()=>{
        setSearch(true);
        setTimeout(()=>{setInputLocation("")},0)
      }}>Submit</button>
    </div>
  );
}

export default App;

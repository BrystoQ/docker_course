import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

interface ApiResponse {
  code: number;
  success: boolean;
  message: string;
  data: {
    _id: string;
    text: string;
  }[];
}

function useDataFetcher(apiUrl: string) {
  const [data, setData] = useState<ApiResponse | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`${apiUrl}/messageText`);
      if (response.ok) {
        const jsonData = await response.json();
        setData(jsonData);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("An error occurred while fetching data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [apiUrl]);

  return { data, fetchData };
}

function App() {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const apiUrl = "http://localhost:3001/api";
  const { data, fetchData } = useDataFetcher(apiUrl);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(`${apiUrl}/messageText`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: inputValue }),
      });

      if (response.ok) {
        console.log("Data sent successfully");
        fetchData();
      } else {
        console.error("Failed to send data");
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <span>
          API:{" "}
          <a style={{ color: "red" }} href="http://localhost:3001/">
            http://localhost:3001/
          </a>
        </span>
        <img src={logo} className="App-logo" alt="logo" />

        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter data"
              value={inputValue}
              onChange={handleInputChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>

        <div>
          <h2>Message in DB:</h2>
          <ul>
            {data &&
              data.data.map((item: any, index: number) => (
                <li key={index}>{JSON.stringify(item.text)}</li>
              ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;

import "./App.css";
import "./styles.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Search />
      <p>
        <a href="https://github.com/Evelinanazarenko/react-weather-app.git" target="_blank" rel="noreferrer">Open-source code </a>by Evelina Nazarenko
      </p>
    </div>
  );
}
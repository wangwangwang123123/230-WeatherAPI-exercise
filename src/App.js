import { Component, React } from "react";
import "./styles.css";

import Headline from "./components/Headline";
import { useWeather } from "./api";

export function App() {
  const { loading, headlines, error } = useWeather();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <h1>Brisbane Weather Forecast Today</h1>
      {headlines.map((headline) => (
        <Headline
          key={headline.time}
          time={headline.time}
          text={headline.text}
          temp={headline.temp}
          wind={headline.wind}
        />
      ))}
    </div>
  );
}

import Headline from "./Headline";
import { useWeather } from "../api";
import ReactDOM from "react-dom";

export default function App() {
  const { loading, headlines, error } = useWeather();

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }

  return (
    <div className="App">
      <h1>Brisbane Weather Forecast Today</h1>
      {headlines.map((headline) => (
        <Headline key={headline.temp} {...headline} />
      ))}
    </div>
  );
}

import "./App.css";
import Counter from "@/components/Counter";

function App() {
  return (
    <div className="App">
      <Counter />
      {import.meta.env.VITE_MESSAGE}
    </div>
  );
}

export default App;

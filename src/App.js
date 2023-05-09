import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import IncomeForm from "./components/IncomeForm";

function App() {
  const [income, setIncome] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);

  return (
    <div className="App">
      <Header totalIncome={totalIncome} />
      <IncomeForm income={income} setIncome={setIncome} />
    </div>
  );
}

export default App;

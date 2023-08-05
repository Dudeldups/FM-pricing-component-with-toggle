import { useState } from "react";
import Form from "./components/Form/Form";

export default function App() {
  const [isMonthlyPayment, setIsMonthlyPayment] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { type } = e.target;

    if (type === "checkbox") {
      setIsMonthlyPayment(prev => !prev);
    }
  };

  return (
    <main className="main-container">
      <h1 className="sr-only">
        This is a component from a Frontend Mentor challenge
      </h1>
      <Form isMonthlyPayment={isMonthlyPayment} handleChange={handleChange} />
    </main>
  );
}

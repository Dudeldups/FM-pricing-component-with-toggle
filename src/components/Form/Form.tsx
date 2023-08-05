import { useState } from "react";
import CardContainer from "../CardContainer/CardContainer";
import ToggleButton from "../ToggleButton/ToggleButton";

import "./Form.scss";

export default function Form() {
  const [isMonthlyPayment, setIsMonthlyPayment] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { type } = e.target;

    if (type === "checkbox") {
      setIsMonthlyPayment(prev => !prev);
    }
  };

  return (
    <form className="form" action="#">
      <fieldset>
        <legend>
          <h2 className="form__title">Our Pricing</h2>
        </legend>

        <ToggleButton
          isMonthlyPayment={isMonthlyPayment}
          setIsMonthlyPayment={setIsMonthlyPayment}
          handleChange={handleChange}
        />
      </fieldset>

      <CardContainer
        isMonthlyPayment={isMonthlyPayment}
        handleChange={handleChange}
      />
    </form>
  );
}

import React, { useState } from "react";
import Form from "./components/Form/Form";

export default function App() {
  const [isMonthlyPayment, setIsMonthlyPayment] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { type } = e.target;

    if (type === "checkbox") {
      setIsMonthlyPayment(oldState => !oldState);
    }
  };

  return (
    <div>
      <h1 className="sr-only">
        This is a component from a Frontend Mentor challenge
      </h1>

      <Form handleChange={handleChange} />

      <form className="form" action="#">
        <fieldset>
          <legend>
            <h2 className="form__title">Our Pricing</h2>
          </legend>

          <div className="toggle">
            <label className="sr-only" htmlFor="togglePaymentMethod">
              Switch to {isMonthlyPayment ? "annual" : "monthly"} payment method
            </label>
            <input
              className="toggle__input sr-only"
              type="checkbox"
              name="togglePaymentMethod"
              id="togglePaymentMethod"
              checked={isMonthlyPayment}
              onChange={handleChange}
            />
            <span className="toggle__text" aria-hidden="true">
              Annually
            </span>
            <div className="toggle__container"></div>
            <span className="toggle__text" aria-hidden="true">
              Monthly
            </span>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

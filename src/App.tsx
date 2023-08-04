import { useState } from "react";

export default function App() {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <div>
      <h1 className="sr-only">
        This is a component from a Frontend Mentor challenge
      </h1>

      <form className="form" action="#">
        <fieldset>
          <legend>
            <h2 className="form__title">Our Pricing</h2>
          </legend>

          <div className="toggle">
            <label className="sr-only" htmlFor="toggleMonthly">
              Switch to {isMonthly ? "annual" : "monthly"} payment method
            </label>
            <input
              className="toggle__input sr-only"
              type="checkbox"
              name="toggleMonthly"
              id="toggleMonthly"
              checked={isMonthly}
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

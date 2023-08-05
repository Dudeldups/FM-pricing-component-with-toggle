import "./ToggleButton.scss";

type Props = {
  isMonthlyPayment: boolean;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
};

export default function ToggleButton({
  isMonthlyPayment,
  handleChange,
}: Props) {
  return (
    <div className="outer">
      <label className="toggle" htmlFor="togglePaymentMethod">
        <span className="sr-only">
          {isMonthlyPayment ? "monthly" : "annual"} payment method is active
        </span>
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
        <div className="toggle__container">
          <div className="toggle__circle"></div>
        </div>
        <span className="toggle__text" aria-hidden="true">
          Monthly
        </span>
      </label>
    </div>
  );
}

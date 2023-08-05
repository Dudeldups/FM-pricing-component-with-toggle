import "./ToggleButton.scss";

type Props = {
  isMonthlyPayment: boolean;
  setIsMonthlyPayment: React.Dispatch<React.SetStateAction<boolean>>;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
};

export default function ToggleButton({
  isMonthlyPayment,
  setIsMonthlyPayment,
  handleChange,
}: Props) {
  const handleClick = (newState: boolean) => {
    setIsMonthlyPayment(newState);
  };

  return (
    <div className="toggle">
      <p
        className="toggle__text"
        aria-hidden="true"
        onClick={() => handleClick(false)}>
        Annually
      </p>

      <input
        className="toggle__input sr-only"
        type="checkbox"
        name="togglePaymentMethod"
        id="togglePaymentMethod"
        checked={isMonthlyPayment}
        onChange={handleChange}
      />

      <label className="toggle__label" htmlFor="togglePaymentMethod">
        <span className="sr-only">
          {isMonthlyPayment ? "monthly" : "annual"} payment method is active
        </span>
        <span className="toggle__circle"></span>
      </label>

      <p
        className="toggle__text"
        aria-hidden="true"
        onClick={() => handleClick(true)}>
        Monthly
      </p>
    </div>
  );
}

import CardContainer from "../CardContainer/CardContainer";
import ToggleButton from "../ToggleButton/ToggleButton";

import "./Form.scss";

type Props = {
  isMonthlyPayment: boolean;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
};

export default function Form({ isMonthlyPayment, handleChange }: Props) {
  return (
    <form className="form" action="#">
      <fieldset>
        <legend>
          <h2 className="form__title">Our Pricing</h2>
        </legend>

        <ToggleButton
          isMonthlyPayment={isMonthlyPayment}
          handleChange={handleChange}
        />
      </fieldset>

      <CardContainer isMonthlyPayment={isMonthlyPayment} />
    </form>
  );
}

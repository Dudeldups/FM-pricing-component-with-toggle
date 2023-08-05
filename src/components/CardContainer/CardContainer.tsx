import { useEffect, useState } from "react";
import Btn from "../Btn/Btn";
import "./CardContainer.scss";

type Props = {
  isMonthlyPayment: boolean;
};

interface Plan {
  name: string;
  price: {
    monthly: string;
    annually: string;
  };
  features: {
    storageAmount: string;
    userAmount: string;
    transferAmount: string;
  };
}

export default function CardContainer({ isMonthlyPayment }: Props) {
  const [subscriptionData, setSubscriptionData] = useState<Plan[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data/data.json");
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        setSubscriptionData(data);
      } catch (error) {
        console.error("Error fetching .json file:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="card-container">
      {!subscriptionData ? (
        <p>Loading...</p>
      ) : (
        subscriptionData.map(card => {
          const { name, price, features } = card;
          const { storageAmount, userAmount, transferAmount } = features;

          return (
            <div key={name} className="card">
              <fieldset>
                <legend>
                  <h3 className="card__title">{name}</h3>
                </legend>

                <input
                  className="sr-only"
                  type="radio"
                  name="subscription"
                  id={name}
                  value={name}
                  defaultChecked={name === "Professional"}
                />

                <div className="card__price">
                  <p className="card__dollar-sign">$</p>
                  <p className="card__amount">
                    {isMonthlyPayment ? price.monthly : price.annually}
                  </p>
                </div>
                <ul className="card__list">
                  <li className="card__feature">{storageAmount} Storage</li>
                  <li className="card__feature">{userAmount} Users Allowed</li>
                  <li className="card__feature">Send up to {transferAmount}</li>
                </ul>
                <label className="sr-only" htmlFor={name}>
                  {name} plan
                </label>
                <Btn />
              </fieldset>
            </div>
          );
        })
      )}
    </div>
  );
}

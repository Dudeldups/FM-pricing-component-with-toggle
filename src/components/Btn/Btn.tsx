import "./Btn.scss";

type Props = {
  name: string;
};

export default function Btn({ name }: Props) {
  return (
    <button className="btn" type="button">
      Learn more <span className="sr-only">about the {name} plan</span>
    </button>
  );
}

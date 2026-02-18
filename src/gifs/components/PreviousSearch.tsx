interface Props {
  title: string;
}

export const PreviousSearch = ({ title }: Props) => {
  return (
    <div className="previous-searches">
      <h2>{title}</h2>
      <ul className="previous-searches-list">
        <li>Goku</li>
        <li>Vegeta</li>
        <li>Broli</li>
      </ul>
    </div>
  );
};

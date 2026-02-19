import type { FC } from "react";

interface Props {
  searches: string[];
  onLabelClicked: (term: string) => void;
}

export const PreviousSearch: FC<Props> = ({ searches, onLabelClicked }) => {
  return (
    <div className="previous-searches">
      <h2>Búsquedas previas</h2>
      <ul className="previous-searches-list">
        {searches.map((search) => (
          <li onClick={() => onLabelClicked(search)} key={search}>
            {search}
          </li>
        ))}
      </ul>
    </div>
  );
};

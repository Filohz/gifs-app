import type { FC } from "react";

interface Props {
  searches:string[];
}

export const PreviousSearch: FC<Props> = ({searches}) => {
  return (
    <div className="previous-searches">
      <h2>Búsquedas previas</h2>
      <ul className="previous-searches-list">
        {
          searches.map((search) => (
            <li key={search}>{search}</li>
          ))
        }
      </ul>
    </div>
  );
};

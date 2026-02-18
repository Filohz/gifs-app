interface Props {
  placeHolder: string;
}

export const SearchBar = ({ placeHolder }: Props) => {
  return (
    <div className="search-container">
      <input type="test" placeholder={placeHolder} />
      <button>Buscar</button>
    </div>
  );
};

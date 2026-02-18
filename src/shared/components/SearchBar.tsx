interface Props {
  placeholder?: string;
}

export const SearchBar = ({ placeholder = 'Buscar' }: Props) => {
  return (
    <div className="search-container">
      <input type="test" placeholder={placeholder} />
      <button>Buscar</button>
    </div>
  );
};

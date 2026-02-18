import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

export const GifsApp = () => {
  return (
    <>
      {/* header */}

      <CustomHeader
        title="Buscador de Gifs"
        // description="Descubre y comparte el gif perfecto"
      />

      {/* search */}
     <SearchBar placeHolder="Buscar gifs"/>

      {/* previous search */}
      <div className="previous-searches">
        <h2>Búsquedas previas</h2>
        <ul className="previous-searches-list">
          <li>Goku</li>
          <li>Vegeta</li>
          <li>Broli</li>
        </ul>
      </div>

      {/* gifs */}
      <div className="gifs-container">
        {mockGifs.map((gif) => (
          <div className="gif-card" key={gif.id}>
            <img src={gif.url} alt={gif.title} />
            <h3>{gif.title}</h3>
            <p>
              {gif.width}x{gif.height}(1.5mb)
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

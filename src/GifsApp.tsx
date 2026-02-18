import { PreviousSearch } from "./gifs/components/PreviousSearch";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

export const GifsApp = () => {
  return (
    <>
      {/* header */}
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el gif perfecto"
      />

      {/* search */}
     <SearchBar placeholder="Buscar gifs"/>

      {/* previous search */}
     <PreviousSearch title="Búsquedas previas"/>

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

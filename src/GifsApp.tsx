import { mockGifs } from "./mock-data/gifs.mock";

export const GifsApp = () => {
  return (
    <>
      {/* header */}
      <div className="content-center">
        <h1>Buscador de Gifs</h1>
        <p>Descubre y comparte el gif perfecto</p>
      </div>

      {/* search */}
      <div className="search-container">
        <input type="test" placeholder="Buscar gifs" />
        <button>Buscar</button>
      </div>

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

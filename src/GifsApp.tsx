import { GifList } from "./gifs/components/GifList";
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
     <PreviousSearch searches={["Goku", "Vegeta"]}/>

      {/* gifs */}
      <GifList gifs={mockGifs}/>
    </>
  );
};

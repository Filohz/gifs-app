
import { GifList } from "./gifs/components/GifList";
import { PreviousSearch } from "./gifs/components/PreviousSearch";
import { useGifs } from "./gifs/hooks/useGifs";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

export const GifsApp = () => {

  const { gifs, previousTerms, handleSearch, handleTermCliked } = useGifs();
  
  return (
    <>
      {/* header */}
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el gif perfecto"
      />

      {/* search */}
      <SearchBar placeholder="Buscar gifs" onQuery={handleSearch} />

      {/* previous search */}
      <PreviousSearch
        searches={previousTerms}
        onLabelClicked={handleTermCliked}
      />

      {/* gifs */}
      <GifList gifs={gifs} />
    </>
  );
};

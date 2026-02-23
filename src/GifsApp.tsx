import { useState } from "react";
import { GifList } from "./gifs/components/GifList";
import { PreviousSearch } from "./gifs/components/PreviousSearch";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";
import type { Gif } from "./gifs/interfaces/gif.interface";

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);

  const handleTermCliked = (term: string) => {
    console.log(term);
  };

  const handleSearch = async (query: string = "") => {
    query.trim().toLocaleLowerCase();
    if (query.length === 0) return;
    if (previousTerms.includes(query)) return;

    setPreviousTerms([query, ...previousTerms].splice(0, 8));
    const gifs = await getGifsByQuery(query);
    setGifs(gifs)
  };

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

import React, { createContext, useContext, useMemo } from 'react';

import { GlobalContext } from './GlobalState';

export const FavoriteClickCountContext = createContext();

export const FavoriteClickCountProvider = ({ children }) => {
  const { incrementFavoriteClickCount } = useContext(GlobalContext);

  // const provider = {
  //   incrementFavoriteClickCount,
  // };

  const provider = useMemo(() => {
    return { incrementFavoriteClickCount };
  }, []); // The empty array tells useMemo to only
              // execute the function on the first render of the component.

  return (
    <FavoriteClickCountContext.Provider value={provider}>
      {children}
    </FavoriteClickCountContext.Provider>
  );
};

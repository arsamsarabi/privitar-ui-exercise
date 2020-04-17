import { createContext, useContext } from "react";

import People, { IPeople } from "./people/people";

type StoresContextType = {
  people: IPeople;
};

const storesContext = createContext<StoresContextType>({
  people: new People(),
});

export const useStore = (): StoresContextType => useContext(storesContext);

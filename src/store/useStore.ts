import { createContext, useContext } from "react";

import People, { IPeopleStore } from "./people/people";

type StoresContextType = {
  people: IPeopleStore;
};

const storesContext = createContext<StoresContextType>({
  people: new People(),
});

export const useStore = (): StoresContextType => useContext(storesContext);

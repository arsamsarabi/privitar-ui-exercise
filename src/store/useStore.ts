import { createContext, useContext } from "react";

import People, { IPeopleStore } from "./people/people";

type StoresContextType = {
  peopleStore: IPeopleStore;
};

const storesContext = createContext<StoresContextType>({
  peopleStore: new People(),
});

export const useStore = (): StoresContextType => useContext(storesContext);

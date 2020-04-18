import React, { FC, ReactElement } from "react";

import { useStore } from "./store";
import { PeopleList } from "./pages";
import { Layout } from "./components";

const App: FC = (): ReactElement => {
  const {
    peopleStore: { fetchPeople },
  } = useStore();

  fetchPeople();

  return (
    <Layout>
      <PeopleList />
    </Layout>
  );
};

export default App;

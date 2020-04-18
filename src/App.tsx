import React, { FC, ReactElement } from "react";

import { useStore } from "./store";
import { PeopleList } from "./pages";
import { Header, Footer, Layout } from "./components";

const App: FC = (): ReactElement => {
  const {
    peopleStore: { fetchPeople },
  } = useStore();

  fetchPeople();

  return (
    <Layout>
      <Header />
      <PeopleList />
      <Footer />
    </Layout>
  );
};

export default App;

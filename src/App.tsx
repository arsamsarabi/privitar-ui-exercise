import React, { FC, ReactElement } from "react";

import { PeopleList } from "./pages";
import { Layout } from "./components";

const App: FC = (): ReactElement => {
  return (
    <Layout>
      <PeopleList />
    </Layout>
  );
};

export default App;

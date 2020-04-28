import React, { FC, ReactElement, lazy, Suspense } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { PeopleList } from "./pages";
import { Layout, Loading } from "./components";

const SettingsPage = lazy(() => import("./pages/settings/SettingsPage"));

const App: FC = (): ReactElement => {
  return (
    <HashRouter>
      <Suspense fallback={<Loading />}>
        <Layout>
          <Switch>
            <Route exact path="/" component={PeopleList} />
            <Route exact path="/settings" component={SettingsPage} />
          </Switch>
        </Layout>
      </Suspense>
    </HashRouter>
  );
};

export default App;

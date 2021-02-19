// import * as React from "react";
import { Provider } from "react-redux";
import { store } from "./state";
import RepoList from "./RepoList";

// import Parent from "./props/Parent";
// import GuestList from "./state/GuestList";
// import Search from "./state/Search";
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search fior a package</h1>
        <RepoList />
      </div>
    </Provider>
  );
};

export default App;

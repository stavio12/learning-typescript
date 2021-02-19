import { useState } from "react";
import { useTypedSelector } from "./hook/useTypeSelector";

// So instead of using this to make the code bulky we are going to use a hook to simplify life for us watch below
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { actionCreators } from "./state"; // call this file to fire whatver we want to do

import { useActions } from "./hook/useActions"; // a hook that does the prvious thing for us.

const RepoList: React.FC = () => {
  const [term, setTerm] = useState("");
  // const dispatch = useDispatch(); //oldway
  const { searchRepos } = useActions(); // instead of the old way we do this

  // const state = useSelector((state) => state); // give us all the datas we have from state
  // console.log(state); //but we cant use this cos it becomes unpleasant cos we need repos data only and it will throw an error
  // cos it doesnt know the type of data in our redux store

  const { data, error, loading } = useTypedSelector((state) => state.repos);
  console.log(loading, error);
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // dispatch(actionCreators.searchRepos(term)); //oldway // dispatch whatever we fired from the frontend into all the reducers
    searchRepos(term); // we do this to make the code cleaner from the previous one
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>loading....</h3>}
      {!loading &&
        !error &&
        data.map((name) => (
          <div key={name}>
            <li>{name}</li>
          </div>
        ))}
    </div>
  );
};

export default RepoList;

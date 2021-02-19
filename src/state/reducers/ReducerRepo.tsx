import { ActionType } from "../actionType";
import { Action } from "../actions";

// interface for typescript
interface RepoState {
  loading: boolean;
  error: string | null;
  data: string[];
}

// initial state as usual
const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (state: RepoState = initialState, action: Action): RepoState => {
  // the reducer needs to have data corresponding to the RepState
  switch (action.type) {
    case ActionType.SEARCH_REPO:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPO_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPO_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;

//uses actions

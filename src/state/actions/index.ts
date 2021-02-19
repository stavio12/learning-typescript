import { ActionType } from "../actionType";

// interface Action {
//   type: string;
//   payload?: any; // interface can or can not contain payload
// }
// these interfaces define the exact thing the actions needs to render

interface search_repo {
  type: ActionType.SEARCH_REPO;
}

interface search_repo_success {
  type: ActionType.SEARCH_REPO_SUCCESS;
  payload: string[];
}

interface search_repo_error {
  type: ActionType.SEARCH_REPO_ERROR;
  payload: string;
}

export type Action = search_repo | search_repo_success | search_repo_error;

// related to action creators

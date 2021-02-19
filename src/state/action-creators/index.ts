import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../actionType";
import { Action } from "../actions";

//this is where the actual action is taking place
//combines action type and actions i n here

export const searchRepos = (term: string) => {
  //setting term to be params
  return async (dispatch: Dispatch<Action>) => {
    //dispatch set to Action so dispatch can detect what we actually specify for the payload
    dispatch({
      type: ActionType.SEARCH_REPO,
    });
    try {
      const { data } = await axios.get("https://registry.npmjs.org/-/v1/search?", {
        params: {
          text: term,
        },
      });
      const names = data.objects.map((result: any) => {
        return result.package.name;
      });

      dispatch({
        type: ActionType.SEARCH_REPO_SUCCESS,
        payload: names,
      });
    } catch (error) {
      dispatch({
        type: ActionType.SEARCH_REPO_ERROR,
        payload: error.message,
      });
    }
  };
};

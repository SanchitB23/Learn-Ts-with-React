import {ActionType} from "../actions/action-types";
import {Action} from "../actions";

interface RepositoriesState {
    error: string | null;
    loading: boolean;
    data: string[];
}

const initialState = {
    error: null,
    loading: false,
    data: []
}

const reducer = (state: RepositoriesState = initialState, action: Action): RepositoriesState => {
    switch (action.type) {
        case ActionType.search_repositories:
            return {loading: true, error: null, data: []}
        case ActionType.search_repositories_success:
            return {loading: false, error: null, data: action.payload}
        case ActionType.search_repositories_error:
            return {loading: false, error: action.payload, data: []}
        default:
            return state
    }
}

export default reducer

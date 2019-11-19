import { UPDATE_USER_FILTER } from "../actions/filter_actions";

const defaultFilters = Object.freeze({
  tasks: { user: null },
  projects: null
});

const filtersReducer = (state = defaultFilters, action) => {
  Object.freeze(state);
  if (action.type === UPDATE_USER_FILTER) {
    let newFilter = {
      [action.entity]: action.value
    };
    return Object.assign({}, state, newFilter);
  } else {
    return state;
  }
};

export default filtersReducer;

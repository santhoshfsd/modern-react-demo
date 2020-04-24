import Redux from "redux";
const claimsHistory = (oldState = [], action) => {
  if (action.type == "Claims") {
    return [...oldState, action.payload];
  } else {
    return oldState;
  }
};

const accounting = (oldData, action) => {
  if (action.type == "Create_Claim") {
    return oldData - action.payload.amount;
  } else if (action.type == "create policy") {
    return oldData + action.payload.amount;
  }
};

const polices = (oldData = [], action) => {
  if (action.type == "Create-policy") {
    return [...oldState, action.payload.name];
  } else if (action.type == "delete-policy") {
    return oldState.filter((name) => name !== action.payload.name);
  }
};

const { createStore, combineReducers } = redux;

const combineReducers_list = combineReducers({
  polices,
  accounting,
  claimsHistory,
});

const store = createStore(combineReducers_list);

const deletAction = deletePolicy("name");

store.dispatch(deletAction);

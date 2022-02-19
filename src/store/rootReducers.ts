import { combineReducers } from "redux";
import { TransactionReducer } from "./transaction/reducer";
import { AnalyticsReducer } from './analytics/reducer';
import { UserReducer } from "./user/reducer";

const rootReducer = () => {
  return combineReducers({
    transaction: TransactionReducer,
    analytics: AnalyticsReducer,
    user: UserReducer,
  });
};

export default rootReducer;
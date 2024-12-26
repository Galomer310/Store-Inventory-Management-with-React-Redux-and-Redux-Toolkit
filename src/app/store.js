import { configureStore } from "@reduxjs/toolkit";
import inventoryReducer from "../components/state/slice";

const store = configureStore({
  reducer: {
    inventory: inventoryReducer,
  },
});

export default store;

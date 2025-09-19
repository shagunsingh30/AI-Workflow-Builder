import { combineReducers, configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./reducers/LayoutSlice";
import stackReducer from "./reducers/StackSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";
const reducer = combineReducers({
  layout: layoutReducer,
  stacks: stackReducer,
});
const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }).concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
// Types for TS (optional)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

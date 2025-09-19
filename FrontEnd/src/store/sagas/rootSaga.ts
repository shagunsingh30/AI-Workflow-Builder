// sagas/rootSaga.ts
import { all } from "redux-saga/effects";
import { watchStackSagas } from "./stacksSaga";

export default function* rootSaga() {
  yield all([
    watchStackSagas(), // you can add more watchers here later
  ]);
}

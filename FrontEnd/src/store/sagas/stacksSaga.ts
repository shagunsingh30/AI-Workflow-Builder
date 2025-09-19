/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// sagas/stackSagas.ts
import { call, put, takeLatest, all } from "redux-saga/effects";
import axios from "axios";
import {
  fetchStacksSuccess,
  fetchStacksFailure,
  addStackSuccess,
  fetchStacksRequest,
  addStacksRequest,
  deleteStacksRequest,
  deleteStackSuccess,
} from "../reducers/StackSlice";
import { API_URL } from "../api";

type SagaIterator = Generator<any, void, any>;
// Worker saga: GET stacks
function* fetchStacksSaga(): SagaIterator {
  try {
    const response = yield call(axios.get, API_URL);
    console.log(response, "res");
    yield put(fetchStacksSuccess(response.data));
  } catch (error: any) {
    yield put(fetchStacksFailure(error.message));
  }
}

// Worker saga: POST stack
function* createStackSaga(action: any): SagaIterator {
  // const { stacks, onSuccess } = action.payload;
  try {
    const response = yield call(axios.post, API_URL, action.payload);
    console.log(response, "res");
    if (response.data.success) {
      yield put(addStackSuccess(response.data));
      yield put(fetchStacksRequest());
    }
  } catch (error: any) {
    //yield put(createStackFailure(error.message));
  }
}

//DELETE STACK
function* deleteStackSaga(action: any): SagaIterator {
  // const { stacks, onSuccess } = action.payload;
  const id = action.payload;
  try {
    const response = yield call(axios.delete, `${API_URL}/${id}`);
    console.log(response, "res");
    if (response.data.success) {
      yield put(deleteStackSuccess());
      yield put(fetchStacksRequest());
    }
  } catch (error: any) {
    //yield put(createStackFailure(error.message));
  }
}

// Watcher saga
export function* watchStackSagas() {
  yield all([
    takeLatest(fetchStacksRequest, fetchStacksSaga),
    takeLatest(addStacksRequest, createStackSaga),
    takeLatest(deleteStacksRequest, deleteStackSaga),
  ]);
}

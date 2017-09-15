import { call, put, takeEvery } from 'redux-saga/effects';

import { SCENARIO_SELECT, SCENARIO_SELECT_SUCCESS, SCENARIO_SELECT_FAILURE } from './ActionTypes';

function* selectStage(action, stageNum, route) {
  try {
    const character = yield call(Meteor.call, 'chars.select', stageNum, route);
    yield put({ type: SCENARIO_SELECT_SUCCESS, character });
  } catch (error) {
    yield put({ type: SCENARIO_SELECT_FAILURE });
  }
}

export default function* scenarioSaga() {
  yield takeEvery(SCENARIO_SELECT, selectStage);
}

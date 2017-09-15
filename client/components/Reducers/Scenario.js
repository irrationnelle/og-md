import update from 'react-addons-update';

import * as types from '../Actions/ActionTypes';

const initialState = {
  scenario: {
    status: 'INIT',
    error: -1,
    stage: -1,
  },
};

export default function scenario(state, action) {
  if (typeof state === 'undefined') {
    state = initialState;
  }

  switch (action.type) {
    case types.SCENARIO_SELECT:
      return update(state, {
        scenario: {
          status: { $set: 'WAITING' },
          error: { $set: -1 },
        },
      });
    case types.SCENARIO_SELECT_SUCCESS:
      return update(state, {
        scenario: {
          status: { $set: 'SUCCESS' },
        },
      });
    case types.SCENARIO_SELECT_FAILURE:
      return update(state, {
        scenario: {
          status: { $set: 'FAILURE' },
          error: { $set: action.error },
        },
      });
    default:
      return state;
  }
}

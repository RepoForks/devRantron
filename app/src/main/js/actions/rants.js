import rantscript from 'rantscript';
import { FETCH_RANTS, RESET_PAGE } from '../consts/rants';
import { STATE } from '../consts/state';

// change to disable comprssion
rantscript.httpSettings.SET_COMPRESS(true);

export function fetch(type, amount, page = 0) {
  return (dispatch) => {
    dispatch({
      type: FETCH_RANTS,
      state: STATE.LOADING,
      feedType: type,
    });
    rantscript
      .rants(type, amount, page)
      .then((res) => {
        dispatch({
          type: FETCH_RANTS,
          state: STATE.SUCCESS,
          payload: res,
          feedType: type,
        });
      })
      .catch((err) => {
        //dispatch({ type: FETCH_RANTS, state: STATE.FAILED, payload: err, feedType: type });
      });
  };
}

export function resetPage() {
  return (dispatch) => {
    dispatch({
      type: RESET_PAGE,
      state: STATE.SUCCESS,
    });
  };
}

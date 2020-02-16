import React from 'react';
import { DO_SUBMIT } from "./constants";
import produce, {setAutoFreeze} from 'immer';
export const initialState = { a: "test", toasts: [
        {
            id: '1234',
            title: 'Save Successful',
            color: 'success',
            iconType: 'check',
            text: <p>client1</p>,
        },
    ], };
// uncomment this to get rid of TypeError
// setAutoFreeze(false);
export default (state = initialState, action) =>
  produce(state, draft => {
    const { type, payload } = action;
    switch (type) {
      case "ADD_TOAST":
        draft.toasts.push(payload.toast);
        break;
      case "REMOVE_TOAST":
        draft.toasts.splice(payload.index, 1);
        break;
      case DO_SUBMIT:
        console.log("ON SUBMIT");
        return { ...state, ...{ buttonID: action.args } };
      default:
        return state;
    }
  });


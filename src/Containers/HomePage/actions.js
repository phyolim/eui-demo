import { DO_SUBMIT } from "./constants";

export function doSubmit(args){
  return {
    type: DO_SUBMIT,
    args
  }
}

export const addToast = (toast) => {
  return {
    type: 'ADD_TOAST',
    payload: { toast },
  };
};

export const removeToast = (index) => ({
  type: 'REMOVE_TOAST',
  payload: { index },
});

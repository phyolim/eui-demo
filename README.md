This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## ERROR
You will get error when you do `yarn start`

## WORK AROUND
setAutoFreeze(false) in reducer will get rid of the error. But, I think EuiGlobalToastList should not be changing the array in Redux.

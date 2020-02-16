This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## ERROR
You will get below error when you do `yarn start`

```TypeError: Cannot assign to read only property 'validated' of object '#<Object>'```


## WORK AROUND
setAutoFreeze(false) in reducer will get rid of the error. But, I think EuiGlobalToastList should not be changing the array in Redux.

import { actionTypes } from './../action';

const initiaState = {
  number : 11,
};

export default (state = initiaState, action) => {
  console.log('action.type:' + action.type);
  switch (action.type) {
    case actionTypes.ADD:
      return {
        ...state,
        number: action.number + 1
      };
      case actionTypes.DEDUCT:
        return {
          ...state,
          number: action.number - 1
        };
      default:
        return state;
  }
};
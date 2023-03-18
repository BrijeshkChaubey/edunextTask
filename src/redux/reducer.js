import { ADDSELECTED_AMOUNT, SUBSELECTED_AMOUNT } from "./actiontype";


const initialstate = {
  Selectamount:0,
  
};
export const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADDSELECTED_AMOUNT:
      return {
        ...state,
        Selectamount:state.Selectamount+ parseInt(action.payload),
      };
      case SUBSELECTED_AMOUNT:
        return {
          ...state,
          Selectamount:state.Selectamount-parseInt(action.payload),
        };
    default:
      return state;
  }
};
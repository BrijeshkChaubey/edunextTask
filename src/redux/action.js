import { ADDSELECTED_AMOUNT, SUBSELECTED_AMOUNT,  } from "./actiontype";


export const AddselectedamountAction=(value)=>{
console.log("Action",value);
 return{
    type:ADDSELECTED_AMOUNT,
    payload:value
 }
 }
 export const SubselectedamountAction=(value)=>{
   console.log("Action",value);
    return{
       type:SUBSELECTED_AMOUNT,
       payload:value
    }
    }
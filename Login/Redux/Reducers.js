import {Actiontypes} from './Actiontypes'
const initialState = {
  users : [
    {
      email: "leena@gmail.com",
      pass : "leena",
      isLoggedIn: false,
    }
  ],
  error : "",
}


  export default function (state = initialState, action) {
    switch (action.type) {

      case Actiontypes.LOGIN:{
        let error
        let temp = state.users.map(obj => {
            if(  obj.email === action.email)
            {
              if( obj.pass === action.pass)
              {
               obj ={
                 ...obj,
                 isLoggedIn : true
               } 
               error= "";
              return obj
              }
              else {
                error= "Password mismatch";
                return obj
              }
            }
            error ="Invalid Email"
            return obj
          })
        
        
        return {
          users : temp,
          error: error
        };
      }
      case Actiontypes.REGISTER : {

        const temp = {
          email : action.email,
          pass : action.pass,
          isLoggedIn: false,
        }
        console.log("Temp :", temp)

        return {
          users : [...state.users, temp],
          error : ""

        }
      }
        
      default:
        return state;
    }
  }
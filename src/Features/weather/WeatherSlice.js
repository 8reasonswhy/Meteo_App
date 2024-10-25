import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    clouds:'',
    main:'',
    name:'',
    sys:'',
    weather :'',
    wind :''

};
export const WetherSlice = createSlice({
   name : "weather",
   initialState, 
   reducers :{
        set : (state,action )=>{
            const {clouds,main,name,sys,weather,wind}=action.payload 
            state.clouds = clouds;
            state.main = main;
            state.name =name;
            state.sys = sys;
            state.weather = weather; 
            state.wind =wind;
        }
   }
}
   

);
export const {set} = WetherSlice.actions ;
export default WetherSlice.reducer 
import { configureStore } from "@reduxjs/toolkit";
import  WetherSlice  from "../../Features/weather/WeatherSlice";

export const store = configureStore({
    reducer : {
        weather : WetherSlice
    } ,
    
}
    
)
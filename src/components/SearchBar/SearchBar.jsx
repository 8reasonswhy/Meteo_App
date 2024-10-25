import {Button, Form} from "react-bootstrap";
import styles from  './SearchBar.module.scss'
import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import  {set}  from "../../Features/weather/WeatherSlice";

export const SearchBar = () => {

    const [citys , setcitys]= useState([]);
    const dispatch = useDispatch();


    const HandlChange = (e)=>{
        const value = e.currentTarget.value ; 
        const API_GEO = process.env.REACT_APP_GEO_API_KEY ;
        fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${value}&type=city&format=json&apiKey=${API_GEO} `)
        .then(response => response.json())
        .then(json =>{if(json.results!==undefined){
                        setcitys((json.results.map(data =>{
                        const {city,country,lat,lon,formatted} =data ;
                        return({city,country,lat,lon,formatted} )
        })))
        }} )
        
    }
    const AutoCompliteSelect = (e,value) =>{
        const API_WEATHER = process.env.REACT_APP_WEATHER_API ;
        const {lat,lon} = value ;
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&units=metric&lon=${lon}&appid=${API_WEATHER}`)
        .then(response => response.json())
        .then(json =>{ 
            const {clouds,main,name,sys,weather,wind}= json
            console.log({clouds,main,name,sys,weather,wind})
            dispatch(set({clouds,main,name,sys,weather,wind}))
            
        } )
    }
    return (
        <>
            <Form>
                <Form.Group className={styles.searchContainer}>
                    <Autocomplete onChange={AutoCompliteSelect} className={styles.searchInput} size={'lg'} clearOnBlur={false}
                    renderInput={(params)=><TextField onChange={HandlChange} {...params} label={"Entrez votre ville..."}/>} 
                    options={citys} 
                    getOptionLabel={(options)=>options.formatted}/>
                    <Button size={'sm'} variant='primary'>Search</Button>
                </Form.Group>
            </Form>
        </>
    )
}
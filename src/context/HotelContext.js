import { createContext, useReducer } from "react";

import {restaurantsData} from "../backend/db/restaurantsData";

export const HotelContext=createContext();

export const HotelProvider=({children})=>
{
    const Reducer=(state,{type,payload,inputField})=>
    {
        const clearInput={revName:"Wadad",rating:"",comment:"",pp:"https://w0.peakpx.com/wallpaper/261/712/HD-wallpaper-baal-raiden-shogun-genshin-impact.jpg"};
        const {hotelList,input}=state;
        switch(type) 
        {
            case "INPUT_FIELDS":
                return {...state,input:{...state.input,[inputField]:payload}};
               
            case "TOGGLE_MODAL":
                return {...state,showModal:payload};    
             
            case "CLEAR_INPUT":
                return {...state,input:clearInput,showModal:false};    

            case "SELECT_CUISINE":
                return {...state,selectedCuisineID:payload};    

            case "ADD":
                const calculateAverageRating=(reviews)=>
                {
                    const average= (reviews.reduce((acc,curr)=>acc + Number(curr.rating),0)/Number(reviews.length)).toFixed(2);
                    console.log(average);
                    return average;
                }
                const updatedHotelList=hotelList.map((item)=>{
                    if(item.id===payload.id)
                    {
                        const updatedRatings=[...item.ratings,input]
                        return {...item,ratings:updatedRatings,averageRating:calculateAverageRating(updatedRatings)}
                    }
                    return item;
                })
                return {...state,hotelList:updatedHotelList,input:clearInput,showModal:false};      

            default:
                return state;    
        }
    }
    const initialState= {
        input:{revName:"Wadad",rating:"",comment:"",pp:"https://w0.peakpx.com/wallpaper/261/712/HD-wallpaper-baal-raiden-shogun-genshin-impact.jpg"},
        showModal:false,
        hotelList:restaurantsData,
        selectedCuisineID:null,
    }
    const [state,dispatch]=useReducer(Reducer,initialState);

    const sortByCuisine=()=>
    {
        const {selectedCuisineID,hotelList}=state;

        if(selectedCuisineID)
        {
            return [...hotelList].filter(({cuisine_id})=>cuisine_id===selectedCuisineID);
        }
        else { return []}
    }

    return (
        <HotelContext.Provider value={{state,dispatch,sortByCuisine}}>
            {children}
        </HotelContext.Provider>
    )
}
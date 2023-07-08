import { createContext, useReducer } from "react";

import {restaurantsData} from "../backend/db/restaurantsData";

export const HotelContext=createContext();

export const HotelProvider=({children})=>
{
    const Reducer=(state,{type,payload,inputField})=>
    {
        const clearInput={name:""};
        switch(type) 
        {
            case "INPUT_FIELDS":
                return {...state,input:{...state.input,[inputField]:payload}};
               
            case "TOGGLE_MODAL":
                return {...state,showModal:payload};    
               
            case "ADD":
                return {...state,list:[...state.list,state.input],input:clearInput,showModal:false};  
             
            case "CLEAR_INPUT":
                return {...state,input:clearInput,showModal:false};    

            case "SELECT_CUISINE":
                return {...state,selectedCuisineID:payload};    

            default:
                return state;    
        }
    }
    const initialState= {
        input:{rating:"",comment:""},
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
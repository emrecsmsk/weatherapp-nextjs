import { Weather } from '@/app/models/WeatherModel'
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export interface WeatherState {
    weather?: Weather
}

const initialState: WeatherState = {
    
}

const slice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setWeather: (state, action) => {
            state.weather = action.payload
        }
    },
})

const getWeather = (city: string) => async (dispatch: any) => {

    var weatherResponse: Weather

    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
        params: {
            q: city,
            days: '3'
        },
        headers: {
            'X-RapidAPI-Key': 'f6dbbc1413msh4e0731944ff8ebfp14f394jsndf00c989cc77',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        weatherResponse = response.data as Weather
        dispatch(setWeather(weatherResponse))
    } catch (error) {
        console.error(error);
    }
    
}

// Action creators are generated for each case reducer function
export const { setWeather } = slice.actions

export default {
    reducer: slice.reducer,
    getWeather,
}

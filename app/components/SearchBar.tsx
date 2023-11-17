"use client"

import { ChangeEvent,KeyboardEvent, useState } from "react"
import { useDispatch } from "react-redux"
import WeatherReducer from "../redux/reducers/WeatherReducer"

const SearchBar = () => {

    const dispatch = useDispatch<any>()
    const [searchText, setSearchText] = useState("")

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            dispatch(WeatherReducer.getWeather(searchText))
        }
    };

    return (

        <input
            className="w-full bg-[#eaecef] rounded-xl h-12 pl-3"
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Search for cities"
        />
    )
}

export default SearchBar
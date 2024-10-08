import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getWeatherData } from '../redux/weatherSlice';
import useDebounce from '../hooks/useDebounce';
const SearchInput = () => {
const [inputValue, setInputValue] = useState('');
const dispatch = useDispatch();
const debouncedValue = useDebounce(inputValue, 300);
const handleInputChange = (e) => {
setInputValue(e.target.value);
};
React.useEffect(() => {
if (debouncedValue) {
dispatch(getWeatherData(debouncedValue));
}
}, [debouncedValue, dispatch]);
return (
<input
type="text"
value={inputValue}
onChange={handleInputChange}
placeholder="Search for weather..."
/>
);
};
export default SearchInput;
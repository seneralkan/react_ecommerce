import axios from 'axios';

export const fetchProductList = async() => {
    const {data} =await axios.get("https://api.github.com/repos/tannerlinsley/react-query")
//https://api.github.com/repos/tannerlinsley/react-query
    return data;
}

//export const fetchRegister = async(input) => {
    //const {data} = await axios.post(`${process.env.REACT_BASE_ENDPOINT}/auth/register`,
    //input);
    //return data;};
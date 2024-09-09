import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

export const getAllCategories = async () => {
    const {data} = await axios.get(`${baseUrl}category`)
    return data;
} 

export const addNewCategory = async (category) => {
    const {data} = await axios.post('http://localhost:3000/category', category);
}
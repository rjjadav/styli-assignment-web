import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

export const getAllCategories = async () => {
    const {data} = await axios.get(`${baseUrl}category`)
    return data;
} 

export const addNewCategory = async (category) => {
    const {data} = await axios.post(`${baseUrl}category`, category);
}

export const getCategoryById = async (id) => {
    const {data} = await axios.get(`${baseUrl}category/${id}`)
    return data;
} 

export const updateCategory = async (id, category) => {
    const {data} = await axios.put(`${baseUrl}category/${id}`, category); 
    return data;
}


export const flattenCategoryTree = (categories, level = 0, parentId = null) => {
    let flatCategories = [];
    categories
        .filter(category => category.parentId === parentId)
        .forEach(category => {
            flatCategories.push({ ...category, level });
            flatCategories = flatCategories.concat(flattenCategoryTree(categories, level + 1, category._id));
        });
    return flatCategories;
};
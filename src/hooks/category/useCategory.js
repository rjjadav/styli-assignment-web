import { useMutation, useQuery } from "@tanstack/react-query"
import { addNewCategory, getAllCategories, getCategoryById } from "../../services/category-service"


export const useCategory = () => {
    return useQuery({
        queryKey: ['category'],
        queryFn: async () => getAllCategories(),
    })
}


export const useCateryById = (id) => {
    return useQuery({
        queryKey: ['categoryById', id],
        queryFn: async () => getCategoryById(id),
    })
}
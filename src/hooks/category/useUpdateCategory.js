import { useMutation } from "@tanstack/react-query";
import { updateCategory } from "../../services/category-service";


export const useUpdateCategory = () => {
    return useMutation({
        mutationFn: (category) => {
            return updateCategory(category.id, { name: category.name, parentId: category.parentId })
        }
    });
}
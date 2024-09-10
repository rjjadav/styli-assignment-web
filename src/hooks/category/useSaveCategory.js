import { useMutation } from "@tanstack/react-query";
import { addNewCategory } from "../../services/category-service";

export const useSaveCategory = () => {
    return useMutation({
        mutationFn: (category) => addNewCategory(category)
    });
}
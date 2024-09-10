import { useMutation } from "@tanstack/react-query";
import { removeCategory } from "../../services/category-service";


export const useRemoveCategory = () => {
    return useMutation({
        mutationFn: (id) => removeCategory(id)
    });
}
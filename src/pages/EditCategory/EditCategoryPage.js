import { useParams } from "react-router-dom";
import CategoryForm from "../../components/CategoryForm/CategoryForm";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getCategoryById, updateCategory } from "../../services/category-service";
import axios from "axios";
import { useUpdateCategory } from "../../hooks/category/useUpdateCategory";
import { useCateryById } from "../../hooks/category/useCategory";

const EditCategoryPage = () => {
    
    const { id } = useParams();
    const { mutateAsync } = useUpdateCategory();
    const {data: category, isLoading} = useCateryById(id)

    if(isLoading) return <>Fetching category</>

    const handleSubmit = async (event) => {
        try {
            await mutateAsync({id, name: event.name, parentId: event.parentId }); 
            alert('Category updated successfully');
          } catch (error) {
            console.error('Error updating category', error);
            alert('Failed to update category');
          }
    }
    return (
        <Box sx={{ maxWidth: 400, mx: 'auto', mt: 5 }}>
            <Typography variant="h4" gutterBottom>
                Edit Category
            </Typography>
            {category && <CategoryForm type='edit' category={category} onSubmit={handleSubmit}/>}
        </Box>
    );
}

export default EditCategoryPage;
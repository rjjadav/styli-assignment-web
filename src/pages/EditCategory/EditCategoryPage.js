import { useParams } from "react-router-dom";
import CategoryForm from "../../components/CategoryForm/CategoryForm";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getCategoryById, updateCategory } from "../../services/category-service";
import axios from "axios";

const EditCategoryPage = () => {
    const [category, setCategory] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchCategoryById = async () => {
            try {
                const response = await getCategoryById(id);
                setCategory(response);
            } catch (error) {
                console.error('Error fetching categories', error);
                
            }

        }
        fetchCategoryById();
    }, [])

    const handleSubmit = async (event) => {
        try {
            await updateCategory(id, { name: event.name, parentId: event.parentId }); 
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
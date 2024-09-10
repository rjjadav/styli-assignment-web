import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import CategoryForm from '../../components/CategoryForm/CategoryForm';
import { useSaveCategory } from "../../hooks/category/useSaveCategory";
import { Link } from 'react-router-dom';

const NewCategoryPage = () => {
    const { mutateAsync } = useSaveCategory();

    const handleSubmit = async (event) => {
        try {
            await mutateAsync({ name: event.name, parentId: event.parentId });
            alert('Category added successfully');
        } catch (error) {
            console.error('Error adding category', error);
            alert('Failed to add category');
        }
    };

    return (
        <Box sx={{ maxWidth: 400, mx: 'auto', mt: 5 }}>
            <Typography variant="h4" gutterBottom>
                Add New Category
            </Typography>
            <Link to={'/'}><Button className="ml-4">Back</Button></Link>
            <CategoryForm type='new' onSubmit={handleSubmit} />
        </Box>
    );
};

export default NewCategoryPage;

import React, { useState, useEffect } from 'react';
import { TextField, Button, MenuItem, FormControl, InputLabel, Select, Box, Typography } from '@mui/material';
import axios from 'axios';
import { addNewCategory, getAllCategories, flattenCategoryTree } from '../../services/category-service';
import CategoryForm from '../../components/CategoryForm/CategoryForm';

const NewCategoryPage = () => {
    const [name, setName] = useState('');
    const [parentId, setParentId] = useState(null);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await getAllCategories();
                const categoriesData = flattenCategoryTree(response);
                setCategories(categoriesData);
            } catch (error) {
                console.error('Error fetching categories', error);
            }
        };

        fetchCategories();
    }, []);

    const handleSubmit = async (event) => {
        try {
            await addNewCategory({ name: event.name, parentId: event.parentId });
            alert('Category added successfully');
            setName('');
            setParentId('');
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
            <CategoryForm type='new' onSubmit={handleSubmit}/>
            {/* <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Category Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    margin="normal"
                />
                <FormControl fullWidth margin="normal">
                    <InputLabel>Parent Category</InputLabel>
                    <Select
                        value={parentId}
                        onChange={(e) => setParentId(e.target.value)}
                        displayEmpty
                        label="Parent Category"
                    >
                        <MenuItem value={null}>
                            <em>None</em>
                        </MenuItem>
                        {categories.map(category => (
                            <MenuItem key={category._id} value={category._id} style={{ marginLeft: category.level * 10 }}>
                                {'-'.repeat(category.level) + ' ' + category.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Add Category
                </Button>
            </form> */}
        </Box>
    );
};

export default NewCategoryPage;

import React, { useState, useEffect } from 'react';
import { TextField, Button, MenuItem, FormControl, InputLabel, Select, Box, Typography } from '@mui/material';
import { addNewCategory, flattenCategoryTree, getAllCategories } from '../../services/category-service';

const CategoryForm = ({ type = 'new', category = null, onSubmit }) => {
    const [name, setName] = useState(category?.name || '');
    const [parentId, setParentId] = useState(category?.parentId || null);
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
        event.preventDefault();
        onSubmit({ name, parentId })

    };

    return <>
        <form onSubmit={handleSubmit}>
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
                {type== 'edit'? 'Edit Category' : 'Add Category'}
            </Button>
        </form>
    </>
}

export default CategoryForm;
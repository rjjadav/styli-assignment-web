import { useEffect, useState } from "react";
import { getAllCategories } from "../../services/category-service";
import CategoryTree from "../../components/CategoryTree/CategoryTree";
import { Button, Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";

const CategoriesPage = () => {
    const [categoryList, setCategoryList] = useState([]);

    const buildCategoryTree = (categories, parentId = null) => {
        return categories
            .filter(category => category.parentId === parentId)
            .map(category => ({
                ...category,
                children: buildCategoryTree(categories, category._id),
            }));
    };

    
    useEffect(() => {
        const getAllCategory = async () => {
            try {
                const data = await getAllCategories();
                const categoryTree = buildCategoryTree(data);
                setCategoryList(categoryTree);
            } catch (error) {
                alert('Error while fetching all category.')
            }
    
        }
        getAllCategory();
    }, [])

    return <>
        <div className="py-4 flex justify-between">
            <h1 className="text-xl ">Category List</h1>
            <Link to={"/new"}><Button>Add Category</Button></Link>
        </div>
        <Card variant="outlined">
            <CardContent>
                <CategoryTree categories={categoryList} />
            </CardContent>
        </Card>
    </>
}

export default CategoriesPage;
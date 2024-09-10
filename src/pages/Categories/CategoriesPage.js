import { buildCategoryTree } from "../../services/category-service";
import CategoryTree from "../../components/CategoryTree/CategoryTree";
import { Button, Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
import { useCategory } from "../../hooks/category/useCategory";

const CategoriesPage = () => {
    const { data, isLoading, isError } = useCategory();
    
    if(isError){
        alert("Error while fetching categories");
        return null;
    } 
    
    if(isLoading) return <>Fetching Categories...</>
    
    const categoryList = buildCategoryTree(data);

    return <>
        <div className="py-4 flex justify-between">
            <h1 className="text-xl ">Category List</h1>
            <Link to={"/new"}><Button>Add Category</Button></Link>
        </div>
        <Card variant="outlined">
            <CardContent>
                <CategoryTree categories={categoryList}/>
            </CardContent>
        </Card>
    </>
}

export default CategoriesPage;
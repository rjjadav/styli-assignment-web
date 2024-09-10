import { Link } from "react-router-dom";
import "./CategoryTree.css";
import { IconButton } from "@mui/material";
import { DeleteOutline, Edit } from "@mui/icons-material";
import { useRemoveCategory } from "../../hooks/category/useRemoveCategory";
import { useCategory } from "../../hooks/category/useCategory";

const CategoryTree = ({ categories = [] }) => {
  
  
  const { mutateAsync } = useRemoveCategory();
  const { refetch } = useCategory();
  const removeCategory = async (id) => {
    await mutateAsync(id);
    refetch();
  }
  
  if(categories.length == 0) return <>No Categories found</>

  return (
    <ul>
      {categories.map(category => (
        <li key={category._id} >
          <div className="flex gap-2 items-center">
            <span>{category.name}</span>
            <div className="flex items-center">
              <Link to={`/edit/${category._id}`}>
              <IconButton size="small" color="info">
                <Edit fontSize="small" />
                </IconButton>
              </Link>
              <IconButton size="small" color="error" onClick={() => removeCategory(category._id)}>
                <DeleteOutline fontSize="small" />
              </IconButton>

            </div>
          </div>
          {category.children && category.children.length > 0 && (
            <CategoryTree categories={category.children} />
          )}
        </li>
      ))}
    </ul>
  );
}

export default CategoryTree;
import { Link } from "react-router-dom";
import "./CategoryTree.css";
const CategoryTree = ({categories}) => {
    return (
        <ul>
          {categories.map(category => (
            <li key={category._id} >
              <Link to={`/edit/${category._id}`}>{category.name}</Link>
              {category.children && category.children.length > 0 && (
                <CategoryTree categories={category.children} />
              )}
            </li>
          ))}
        </ul>
      );
}

export default CategoryTree;
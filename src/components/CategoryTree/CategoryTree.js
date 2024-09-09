import "./CategoryTree.css";
const CategoryTree = ({categories}) => {
    return (
        <ul>
          {categories.map(category => (
            <li key={category._id} >
              {category.name}
              {category.children && category.children.length > 0 && (
                <CategoryTree categories={category.children} />
              )}
            </li>
          ))}
        </ul>
      );
}

export default CategoryTree;
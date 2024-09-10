import { Children } from "react";
import Layout from "./components/Layout/Layout";
import CategoriesPage from "./pages/Categories/CategoriesPage";
import NewCategoryPage from "./pages/NewCategory/NewCategoryPage";
import EditCategoryPage from "./pages/EditCategory/EditCategoryPage";

export const Routes =  [
    {
        
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <CategoriesPage/>
            },
            {
                path: 'new',
                element: <NewCategoryPage/>
            },
            {
                path: 'edit/:id',
                element: <EditCategoryPage/>
            }
        ]
    }
]
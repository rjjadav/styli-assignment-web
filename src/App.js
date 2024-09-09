import logo from './logo.svg';
import './App.css';
import CategoriesPage from './pages/Categories/CategoriesPage';
import Layout from './components/Layout/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Routes } from './routes';

function App() {
  const router = createBrowserRouter([
    ...Routes,
  ]);
  return (
    // <Layout>
    //   <CategoriesPage/>
    // </Layout>
    <RouterProvider router={router} />
  );
}

export default App;

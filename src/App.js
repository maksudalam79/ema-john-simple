import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './component/Login/Login';
import Manage from './component/ManageInventory/Manage';
import Order from './component/Order/Order';
import OrderReview from './component/OrderReview/OrderReview';
import Shop from './component/Shop/Shop';
import Signup from './component/Signup/Signup';
import Main from './layout/Main';
import { ProductsandcardLoader } from './loaders/ProductsandcardLoader';
import Privaterouter from './router/Privaterouter';



function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader:()=>fetch('products.json'),
          element:<Shop></Shop>
        },
        {
          path:'/shop',
          element:<Shop></Shop>
        },
        {
          path:'/Order',
          loader:ProductsandcardLoader,
          element:<Privaterouter><Order></Order></Privaterouter>
        },
        {
          path:'/OrderReview',
          element:<OrderReview></OrderReview>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
           path:'/signup',
           element:<Signup></Signup>
        },
        {
          path:'/ManageInventory',
          element:<Privaterouter><Manage></Manage></Privaterouter>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

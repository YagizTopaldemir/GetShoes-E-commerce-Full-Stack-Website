import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import HomePage from './Pages/HomePage';
import SignUpPage from './Pages/SignUpPage';
import SignInPage from './Pages/SignInPage';
import ProtectedRoute from './Authection/ProtectedRoute';
import { AuthProvider } from './Authection/AuthProvider';

function App() {

  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
      ],
    },
    {
      path: "/signup",
      element:(
        <ProtectedRoute>
          <SignUpPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/signin",
      element:(
        <ProtectedRoute>
          <SignInPage />
        </ProtectedRoute>
      ),
    },
  ]); 

  return (
    <AuthProvider>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  );
}

export default App;

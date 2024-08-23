import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import LoginComponent from "./auth/LoginComponent";
import { lazy, Suspense } from "react";
import ProtectedRoute from "./components/ProtectedRoute";
// import PagesComponent from './pages/PagesComponent';
const PagesComponent = lazy(() => import("./pages/PagesComponent"));

function App() {
  return (
    <div className="app-component">
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/login" replace={true} />}
        ></Route>
        <Route path="login" element={<LoginComponent></LoginComponent>}></Route>
        <Route
          path="pages/*"
          element={
            <Suspense fallback={<div>Loadding.....</div>}>
              <ProtectedRoute>
                <PagesComponent></PagesComponent>
              </ProtectedRoute>
            </Suspense>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;

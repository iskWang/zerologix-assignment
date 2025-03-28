import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import "./App.css";

// Import scenes
import Step1Scene from "@/Scene/Step1/Step1Scene";
import Step2Scene from "@/Scene/Step2/Step2Scene";
import Step3Scene from "@/Scene/Step3/Step3Scene";
import { KYCFormContainer } from "./Container/KYCFormContainer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/step-1" replace />,
  },
  {
    path: "/step-1",
    element: <Step1Scene />,
  },
  {
    path: "/step-2",
    element: <Step2Scene />,
  },
  {
    path: "/step-3",
    element: <Step3Scene />,
  },
]);

const App = () => {
  return (
    <KYCFormContainer>
      <RouterProvider router={router} />
    </KYCFormContainer>
  );
};

export default App;

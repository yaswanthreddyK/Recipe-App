import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import "./App.css"
import RecipeCategory from "./pages/RecipeCategory";
import {loader as MostPopularLoader} from "./pages/MostPopular"
import PopularDish from "./pages/PopularDish";
import DishesList from "./pages/DishesList";
import { loader as DishesListLoader } from "./pages/DishesList"
import SingleDish from "./pages/SingleDish";
import { loader as SingleDishLoader } from "./pages/SingleDish";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
import Error from "./pages/Error";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
  <Route  path="/" element={<Layout />} errorElement={<Error/>}>
    <Route index element={<RecipeCategory/>} loader={MostPopularLoader} errorElement={<Error/>}/>
  </Route>
    <Route  path="/popular" element={<PopularDish/>} errorElement={<Error/>}/>
    <Route exact path="/:dish" element={<DishesList/>} errorElement={<Error/>} loader={DishesListLoader}/>
    <Route  path="/:dish/details" element={<SingleDish/>} errorElement={<Error/>} loader={SingleDishLoader} />
    <Route path="/search" element={<Search/>} errorElement={<Error/>} />
    <Route path="/*" element={<NotFound/>}/>
  </>
  )
);
export default function App() {
  return <RouterProvider router={router} />;
}

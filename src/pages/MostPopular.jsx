import { Link, defer, Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import { getRandomData } from "../api";
import ScrollToPosition from "../ScrollToPosition";

export function loader() {
  const url =
    "https://api.spoonacular.com//recipes/random?number=4&apiKey=bc1a614b3d344f36b186c6851f1db31d";

  return defer({ dishes: getRandomData(url) });
}

export default function MostPopular() {
  const dishesPromise = useLoaderData();


  function renderDishes(dishes) {
    return (
      <>
      <ScrollToPosition />
        {dishes.map((dish, index) => {
          return (
            <Link className="dish-link"  to={`popular?id=${dish.id}`} key={dish.id} state={{dish}}>
              <article className="dish">
                <img src={dish.image} alt="image" />
                <div className="dish-details">
                  <h5>{dish.title}</h5>
                  <p>{dish.vegan ? "Veg" : "Non-veg"}</p>
                  <p className="likes">Likes: {dish.aggregateLikes}</p>
                  <p>Ready In: {dish.readyInMinutes} min</p>
                  <p className="servings">Servings: {dish.servings}</p>
                </div>
              </article>
            </Link>
          );
        })}
        {/* <div>{loading && "loading..."}</div>
        <div>{error && "Error Occured"}</div> */}
      </>
    );
  }

  return (
    <section className="most-popular">
      <h2>Most Popular Recipes</h2>
      <Suspense
        fallback={<h2 style={{ margin: "1em 0 0 2em" }}>Loading...</h2>}
      >
        <Await resolve={dishesPromise.dishes}>
          {(dishes) => renderDishes(dishes)}
        </Await>
      </Suspense>
    </section>
  );
}

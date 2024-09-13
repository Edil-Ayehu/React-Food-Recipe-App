import React, { useEffect, useState } from "react";
import styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("");
  // syntax of the useEffect hook
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${process.env.API_KEY}`);
      const data = await res.json();
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        type="text"
        placeholder="search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

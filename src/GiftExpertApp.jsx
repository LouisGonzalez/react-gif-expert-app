import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch']);

    const onAddCategory = (newCategory) => {
      !categories.includes(newCategory) && setCategories([...categories, newCategory]);
    }

    return (
      <>
        <>GifExpertApp</>
        <br />
        <AddCategory
          onNewCategory={onAddCategory}
        />
        {categories?.map((category) => (
          <GifGrid key={category} category={category}/>
        ))}
      </>
    );
}
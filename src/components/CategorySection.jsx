import React from "react";
import CategoryBtn from "./CategoryBtn";
import Container from "./Container";

const CategorySection = () => {
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  const title = "Product Categories";

  return (
    <section id="categories" className="p-5 ">
      <Container>
        <p className="text-sm text-gray-500 mb-2">{title}</p>
        <div className="flex overflow-auto">
          <CategoryBtn categoryName="all" current={true} />
          {categories.map((category) => (
            <CategoryBtn
              key={category}
              categoryName={category}
              current={false}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CategorySection;

import { ProductsService } from "@/app/services/products-service";
import { CategoryDataType } from "@/utils/classes";
import React, { useEffect, useState } from "react";

export default function ProductFilter(props: any) {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [categories, setCategories] = useState<CategoryDataType[]>([]);

  function handleCategoryChange(category: string): void {
    setSelectedCategory(category);
  }
  const onChangeOfPriceFrom = (value: number) => {
    props.setPriceFrom(value);
  };
  const onChangeOfPriceTo = (value: number) => {
    props.setPriceTo(value);
  };
  useEffect(() => {
    props.setCategory(selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    const getCategory = async () => {
      const categories = await ProductsService.getCategories();
      setCategories(categories);
    };
    getCategory();
  }, []);

  return (
    <div className="pt-5 mt-5 ms-3">
      <form className="d-flex flex-column">
        <span className="fs-5 fw-medium">Category:</span>
        <label
          key={"all"}
          className="btn btn-link text-start text-decoration-none pb-0"
        >
          <input
            type="radio"
            value={"all"}
            checked={selectedCategory === ""}
            onChange={() => handleCategoryChange("")}
            className="btn-check"
            name={"All"}
            id={"all"}
            autoComplete="off"
          />
          <label className="btn btn-outline-primary" htmlFor={"All"}>
            {" "}
            {"All"}
          </label>
        </label>
        {categories.map((c) => (
          <label
            key={c.slug}
            className="btn btn-link text-start text-decoration-none pb-0"
          >
            <input
              type="radio"
              value={c.slug}
              checked={selectedCategory === c.slug}
              onChange={() => handleCategoryChange(c.slug)}
              className="btn-check"
              name={c.name}
              id={c.slug}
              autoComplete="off"
            />
            <label className="btn btn-outline-primary" htmlFor={c.slug}>
              {c.name}
            </label>
          </label>
        ))}
      </form>
      <form className="d-flex flex-column mt-4">
        <span className="fs-5 fw-medium mt-3">Price From: </span>
        <div>
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            onChange={() => {
              onChangeOfPriceFrom(0);
            }}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            From $0
          </label>
        </div>
        <div>
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            onChange={() => {
              onChangeOfPriceFrom(10);
            }}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            From $10
          </label>
        </div>

        <div>
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            onChange={() => {
              onChangeOfPriceFrom(50);
            }}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            From $50
          </label>
        </div>

        <div>
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            onChange={() => {
              onChangeOfPriceFrom(100);
            }}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            From $100
          </label>
        </div>
        <div>
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            onChange={() => {
              onChangeOfPriceFrom(500);
            }}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            From $500
          </label>
        </div>
        <div>
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            onChange={() => {
              onChangeOfPriceFrom(1000);
            }}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            From $1000
          </label>
        </div>
      </form>
      <form className="d-flex flex-column mt-4">
        <span className="fs-5 fw-medium mt-3">Price To: </span>
        <div>
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            onChange={() => {
              onChangeOfPriceTo(1000);
            }}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            To $1000
          </label>
        </div>
        <div>
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            onChange={() => {
              onChangeOfPriceTo(500);
            }}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            To $500
          </label>
        </div>

        <div>
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            onChange={() => {
              onChangeOfPriceTo(100);
            }}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            To $100
          </label>
        </div>

        <div>
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            onChange={() => {
              onChangeOfPriceTo(50);
            }}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            To $50
          </label>
        </div>
        <div>
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            onChange={() => {
              onChangeOfPriceTo(10);
            }}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            To $10
          </label>
        </div>
      </form>
    </div>
  );
}

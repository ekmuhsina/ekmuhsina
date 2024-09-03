import { ProductsDataType, CategoryDataType, cartItem } from "@/utils/classes";
import { ServiceBase } from "./service-base";

export class ProductsService extends ServiceBase {

  // fetching all products
  static getProducts = async () => {
    try {
      const prodResponse = await fetch(`${this.getUrl("/products")}`, {
        method: "GET",
        headers: this.headers,
      });

      if (!prodResponse.ok) {
        throw new Error(`Failed to fetch products. Status: ${prodResponse.status}`);
      }

      const products = await prodResponse.json();
      return products.data;
    } catch (error: any) {
      console.error("Error fetching products:", error.message);
      throw error;
    }
  };

  // fetching product by Id
  static getProductById = async (id: string) => {
    try {
      const prodResponse = await fetch(`${this.getUrl(`/products/${id}`)}`, {
        method: "GET",
        headers: this.headers,
      });

      if (!prodResponse.ok) {
        throw new Error(`Failed to fetch product. Status: ${prodResponse.status}`);
      }

      const product = await prodResponse.json();
      return product;
    } catch (error: any) {
      console.error("Error fetching product:", error.message);
      throw error;
    }
  };

  //filter product by category
  static filterProducts = async (category: string) => {
    let filteredProducts: ProductsDataType[] = [];
    const products = await this.getProducts();
    filteredProducts = products.filter((p: ProductsDataType) => {
      return p.categories[0].slug === category;
    });
    return filteredProducts;
  }
  //filter product by price range
  static filterPriceRange = async (priceFrom: number, priceTo: number) => {
    let filteredProducts: ProductsDataType[] = [];
    const products = await this.getProducts();
    filteredProducts = products.filter((p: ProductsDataType) => {
      return (p.price.raw >= priceFrom && p.price.raw <= priceTo)
    })
    return filteredProducts;
  }
  //filter products by price and category
  static filterCategoryAndPriceRange = async (category: string, priceFrom: number, priceTo: number) => {
    let filteredProducts: ProductsDataType[] = [];
    const products = await this.filterProducts(category);
    filteredProducts = products.filter((p: ProductsDataType) => {
      return (p.price.raw >= priceFrom && p.price.raw <= priceTo)
    })
    return filteredProducts;
  }
  //fetch category
  static getCategories = async () => {
    try {
      let category: CategoryDataType[] = [];
      const categoryResponse = await fetch(`${this.getUrl(`/categories`)}`, {
        method: "GET",
        headers: this.headers,
      });
      if (!categoryResponse.ok) {
        throw new Error(`Failed to fetch categories. Status: ${categoryResponse.status}`);
      }
      const data = await categoryResponse.json();
      category = data.data;
      return category;
    } catch (error: any) {
      console.error("Error fetching categories:", error.message);
      throw error;
    }
  }
  // fetch cart
  static getCartProducts = async () => {
    try {
      let cartProducts: cartItem[] = [];
      const cartResponse = await fetch(`${this.getUrl(`/carts/cart_AYrQlWrkZO5nbR`)}`, {
        method: "GET",
        headers: this.headers,
      });

      if (!cartResponse.ok) {
        throw new Error(`Failed to fetch cart products. Status: ${cartResponse.status}`);
      }

      const data = await cartResponse.json();
      cartProducts = data.line_items;
      return cartProducts;
    } catch (error: any) {
      console.error("Error fetching cart products:", error.message);
      throw error;
    }
  };

  // add item to cart
  static addToCartById = async (prodId: string, prodQuantity: number) => {
    try {
      const response = await fetch(`${this.getUrl(`/carts/cart_AYrQlWrkZO5nbR`)}`, {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify({
          "id": prodId,
          quantity: prodQuantity
        })
      });

      if (!response.ok) {
        throw new Error(`Failed to add item to cart. Status: ${response.status}`);
      }
    } catch (error: any) {
      console.error("Error adding item to cart:", error.message);
      throw error;
    }
  };

  // remove item from cart
  static removeItemById = async (prodId: string) => {
    try {
      const response = await fetch(`${this.getUrl(`/carts/cart_AYrQlWrkZO5nbR/items/${prodId}`)}`, {
        method: "DELETE",
        headers: this.headers,
      });

      if (!response.ok) {
        throw new Error(`Failed to remove item from cart. Status: ${response.status}`);
      }
    } catch (error: any) {
      console.error("Error removing item from cart:", error.message);
      throw error;
    }
  };
}

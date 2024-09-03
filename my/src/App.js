import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";
import Home from "./Components/home/Home";
import AboutUs from "./Components/about-us/AboutUs";
import Cart from "./Components/cart/Cart";
import ContactUs from "./Components/contact-us/ContactUs";
import ProductList from "./Components/products/ProductList";
import ProductDetails from "./Components/products/product-details/ProductDetails";
import CartContext from "./contexts/CartContext";
import ProductContext from "./contexts/ProductContext";
import NotFound from "./Components/not-found/NotFound";
import Categories from "./Components/categories/Categories";

function App() {

  //store product loading
  const [prodLoading, setProdLoading ] = useState(true)
  // Storing fetched products data
  const [products, setProducts] = useState([]);

  // Fetching product data
    const getAllProducts = () => {
      fetch("https://api.chec.io/v1/products", {
        method: "GET",
        headers: {
          "X-Authorization": "sk_55982ee32628f5d6e2ca37e226c8f70d356893dcdb5ba",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setProducts(data.data);
          setProdLoading(false)
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getAllProducts();

  //storing search text
  const [searchText, setSearchText] = useState(" ");

  //storing filtered products
  const [filterProducts, setFilterProducts] = useState([]);

  //filter products based on search
  useEffect(() => {
    const filteredProducts = products.filter((p) =>
      p.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterProducts(filteredProducts);
  }, [products, searchText]);

  
  //store loading
  const [cartLoading, setCartLoading] = useState(true);

  //store cart products
  const [cartItems, setCartItems] = useState([]);

  //store cart product to fetch cart product whenever click add to cart
  const [ cartProducts, setCartProducts] = useState()

  //fetching cart products
  useEffect(() => {
    const fetchCartProducts = async () => {
      try {
        const response = await fetch(
          "https://api.chec.io/v1/carts/cart_NqKE50W6KDodgB",
          {
            method: "GET",
            headers: {
              "X-Authorization":
                "pk_test_55982218be093976893bea0f4541e4bd01b6cf8e8db1e",
              "Accept" : "application/json",
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Error fetching product: ${response.statusText}`);
        }

        const data = await response.json();
        setCartItems(data.line_items);
        setCartLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error.message);
      }
    };

    fetchCartProducts();
  }, [cartProducts]);

  //success messege on add to cart
  const [isSuccessMessegeOnAddToCartVisible, setIsSuccessMessegeOnAddToCartVisible ] = useState(false)

  return (
    <Router>
      <div>
        <ProductContext.Provider
          value={{
            products: products,
            filterProducts: filterProducts,
            searchText: searchText,
            setSearchText: setSearchText,
            prodLoading: prodLoading
          }}
        >
          <CartContext.Provider value={{
            cartItems: cartItems,
            cartLoading: cartLoading,
            setCartProducts: setCartProducts,
            isSuccessMessegeOnAddToCartVisible: isSuccessMessegeOnAddToCartVisible,
            setIsSuccessMessegeOnAddToCartVisible: setIsSuccessMessegeOnAddToCartVisible
          }}>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="aboutus" element={<AboutUs />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/products/:productId" element={<ProductDetails />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/categories/:categoryId" element={ <Categories /> } />
            </Routes>
          </CartContext.Provider>
        </ProductContext.Provider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import React, { useEffect, useState } from "react"
import { Product } from "../../app/models/product"
import ProductList from "./ProductList";


export default function Catalog(){
    const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/product")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

 
    return(
        <>
        <ProductList products={products}/>
       
      </>
        
)}
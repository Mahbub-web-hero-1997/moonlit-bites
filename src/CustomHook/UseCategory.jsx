import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UseCategory = () => {
    const [categories, setCategories] = useState([])
    
   useEffect(() => {         
    axios.get("http://localhost:5000/category")
    .then(res=>setCategories(res.data))
   },[])
    return categories
};

export default UseCategory;
import { useEffect, useState } from "react";

const useMenu = () =>{
    const [Fproduct, setFproducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( () =>{
        fetch('http://localhost:4000/allproducts')
        .then(res => res.json())
        .then(data => {
            setFproducts(data)
            setLoading(false);
        })
    }, [])

    return [Fproduct, loading];

}

export default useMenu;
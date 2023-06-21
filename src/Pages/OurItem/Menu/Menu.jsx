import React from 'react';
import useMenu from '../../../hooks/useMenu';

const Menu = () => {
    const [Fproduct, loading] = useMenu();
    const allproducts = Fproduct.slice(0, 10);
    const Vegetables = Fproduct.slice(0, 10).filter(item => item.category === "Vegetables");
    const Fruits = Fproduct.filter(item => item.category === "Fruits");
    return (
        <div>
            <h1>This is Menu</h1>
        </div>
    );
};

export default Menu;
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../../hooks/useCart';


const ProductCard = ({ FproductAll }) => {
    const {_id,  image, vegetableName, price } = FproductAll;
    const {user} = useContext(AuthContext);
    const [, refetch] = useCart()
    const navigate = useNavigate();
    const location = useLocation();


    // console.log(FproductAll, 4)
    

    const handleAddToCart = (item) =>{

        // console.log(item, 9)
        if(user){
            const cartsItem = { productItemId: _id, name:vegetableName, image, price, email: user?.email}
            fetch('http://localhost:4000/carts', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(cartsItem)
            })
            .then(res => res.json())
            .then(data =>{
                if(data.insertedId){
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Product Added on the cart',
                        showConfirmButton: false,
                        timer: 1500
                      })
                    //   refetch()
                }
                 
            })
        }else{
            Swal.fire({
                title: 'Please Login to Order This Product',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })
        }

    }

    return (
        <div>
            <div className=' w-[285px] h-[328px] border'>
                <img src={image} alt="" />
                <div className='text-center'>
                    <h1 className='text-2xl mt-4 mb-3'>{vegetableName}</h1>
                    <h2>Price: $<span className='text-green-400 '>{price}</span></h2>
                    <button onClick={() => handleAddToCart(FproductAll)} className='btn btn-primary btn-sm mt-3'>Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
const useCart = () =>{
    const {user} = useContext(AuthContext);
    // console.log(user.email)

    const {isLoading, isError, data: cart = [], error, refetch} = useQuery({
        queryKey: ['carts', user?.email],
        queryFn:  async () => {
            const data = await fetch(`http://localhost:4000/carts?email=${user?.email}`)
            return data.json();
          },
          
      })
      return [cart, isLoading, refetch]
      

}

export default useCart;
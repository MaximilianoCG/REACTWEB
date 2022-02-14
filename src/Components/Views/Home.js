import React from 'react'
import './Styles.css'
import { CartState } from '../Context/Context';
import SingleProducts from '../SingleProducts/SingleProducts';
import Filters from '../Filters/Filters'

const Home = () => {
    
    const { state: {products,} 
} = CartState();

console.log(products);

    return (
        <div className='home'>
            <Filters/>
            <div className='productContainer'>
                {products.map((prod) => {
                return <SingleProducts prod={prod} key={prod.id} />;
                })}
            </div>
        </div>
    )
}

export default Home;

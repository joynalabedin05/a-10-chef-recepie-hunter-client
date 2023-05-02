import React, { useEffect, useState } from 'react';
import ItemCard from './ItemCard';


const Recipe = () => {
    const [items, setItems] = useState([]);
    // console.log(items[0]);
    
    useEffect(()=>{
        fetch('http://localhost:5000/recipe')
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[])
    return (
        <div className='bg-light'>
            <div className='container py-5'>
                <h1 className='text-center'> <span className='text-warning fs-2'>Chef Information</span> <br /> In Details</h1>
                <p className='text-center mb-5'>There are a lot of world class chef we hire around the world . If you interested in our company apply here.... <button className='btn btn-primary'>see more</button></p>
                <div className='row '>
                {
                    items.map(item=><ItemCard key={item.id} item={item}></ItemCard> )
                 }
                </div>
            </div>
        </div>
    );
};

export default Recipe;
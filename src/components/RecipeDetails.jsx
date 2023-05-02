import React, { useState } from 'react';

import { useLoaderData} from 'react-router-dom';
import CardDetails from './CardDetails';


const RecipeDetails = () => {
    const [carts, setCarts] = useState();
    const recipeItems = useLoaderData();
    const {id,chefPicture,chefName,yearsOfExperience,shortBio,likes,recipes,numberOfRecipes} = recipeItems;
    console.log(recipes);


    // console.log(recipeItems.likes);
    
    
    return (
        <div className='bg-light mb-5'>
            <div className='container d-flex gap-5 pt-5'>
                <img className='rounded-1' src={chefPicture} alt="" />
                <div>
                    <h1>{chefName}</h1>
                    <h6>{shortBio}</h6>
                    <p className='mt-3'>Years Of Experience: {yearsOfExperience}</p>
                    <p >NumberOf Recipe: {numberOfRecipes}</p>
                    <p>Likes: {likes}</p>
                </div>
            </div>
            
                {
                    recipes.map(card => <CardDetails card={card} key={card.id}></CardDetails>)
                }
                
           
        </div>
    );
};

export default RecipeDetails;
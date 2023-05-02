import React, { useState } from 'react';

import { useLoaderData} from 'react-router-dom';
import CardDetails from './CardDetails';
import Header from './Header';
import Footer from './Footer';


const RecipeDetails = () => {
    const [carts, setCarts] = useState();
    const recipeItems = useLoaderData();
    const {id,chefPicture,chefName,yearsOfExperience,shortBio,likes,recipes,numberOfRecipes} = recipeItems;
    console.log(recipes);


    // console.log(recipeItems.likes);
    
    
    return (
        <div>
            <Header></Header>
            <div className='bg-light mb-5'>
            <div className='container d-md-flex gap-5 pt-5'>
                <img  className='rounded-1 w-100' src={chefPicture} alt="" />
                <div>
                    <h1>{chefName}</h1>
                    <h6>{shortBio}</h6>
                    <p className='mt-3'>Years Of Experience: {yearsOfExperience}</p>
                    <p >NumberOf Recipe: {numberOfRecipes}</p>
                    <p>Likes: {likes}</p>
                </div>
            </div> 
            <h1 className='text-center mt-5'><span className='text-warning fs-2'>Skills Of Chef</span> <br /> In Special field</h1>         
                {
                    recipes.map(card => <CardDetails card={card} key={card.id}></CardDetails>)
                }     
        </div>
        <Footer></Footer>

        </div>
    );
};

export default RecipeDetails;
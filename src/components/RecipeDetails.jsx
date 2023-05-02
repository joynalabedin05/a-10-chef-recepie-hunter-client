import React, { useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useLoaderData} from 'react-router-dom';
import {Link} from "react-router-dom";

const RecipeDetails = () => {
    const [carts, setCarts] = useState();
    const recipeItems = useLoaderData();
    const {id,chefPicture,chefName,yearsOfExperience,shortBio,likes,recipes,numberOfRecipes} = recipeItems;

    const {recipeName,ingredients, cookingMethod,rating} = recipes;
    // console.log(recipeItems.likes);
    
    return (
        <div className='bg-light'>
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
            <div className='container mt-5'>
            <CardGroup>
                <Card>                
                    <Card.Body>
                    <Card.Title>{recipeName}</Card.Title>
                    <Card.Text>
                        {cookingMethod}
                        <br />
                        Rating: {rating}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Link className='text-decoration-none'>Favourite button</Link>
                    </Card.Footer>                                  
                </Card>
                <Card>                  
                    <Card.Body>
                    <Card.Title>{recipeName}</Card.Title>
                    <Card.Text>
                        {cookingMethod}
                        <br />
                        Rating: {rating}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Link className='text-decoration-none'>Favourite button</Link>
                    </Card.Footer>                                      
                </Card>
                <Card>                
                   <Card.Body>
                    <Card.Title>{recipeName}</Card.Title>
                    <Card.Text>
                        {cookingMethod}
                        <br />
                        Rating: {rating}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Link className='text-decoration-none'>Favourite button</Link>
                    </Card.Footer>                
                </Card>
            </CardGroup>
            </div>
        </div>
    );
};

export default RecipeDetails;
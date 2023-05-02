import React from 'react';
import {Link} from 'react-router-dom';

const ItemCard = ({item}) => {
    // console.log(item.chefPicture);
    const {id,chefPicture,chefName,yearsOfExperience,likes,numberOfRecipes} = item;
    return (
        <div className='col-md-4 p-3 border'>
        <img className='w-100 rounded-1' src={chefPicture} alt="" />
        <div className='d-flex flex-column justify-content-center align-items-center mt-4'>
        <h4>{chefName}</h4>
        <p>Years Of Experience: {yearsOfExperience}</p>
        <p>NumberOf Recipe: {numberOfRecipes}</p>
        <p>Likes: {likes}</p>
        <Link className='btn btn-primary' to={`/recipe/${id}`}>View Recipe</Link> 
        </div>
        </div>
    );
};

export default ItemCard;
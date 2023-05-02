import React from 'react';

const ItemCard = ({item}) => {
    console.log(item.chefPicture);
    const {id,chefPicture,chefName,yearsOfExperience,likes,numberOfRecipes} = item;
    return (
        <div className='col-md-4 p-3 border'>
        <img className='w-100 rounded-1' src={chefPicture} alt="" />
        <div className='d-flex flex-column justify-content-center align-items-center mt-4'>
        <h4>{chefName}</h4>
        <p>Years Of Experience: {yearsOfExperience}</p>
        <p>NumberOf Recipe: {numberOfRecipes}</p>
        <p>Likes: {likes}</p>
        <button className='btn btn-primary'>View Recipe</button>
        </div>
        </div>
    );
};

export default ItemCard;
import React from 'react';

const Banner = () => {
    return (
       <div className='bg-light'>
         <div className='container d-flex gap-5'>
            <img className='rounded-1' src="https://img.freepik.com/premium-photo/mutton-biryani-food-photography_162831-2.jpg?size=626&ext=jpg" alt="" />
            <div>
                <h1> <span className='text-warning fs-2'>welcome to</span> <br /> Spicy-Aroma</h1>
                <p>Amazingly creamy, saucy chickpea curry served over rice with a dollop of chili crisp and a side of cucumber salad. Ready in 20 minutes!</p>
                <p>Three weeks, three meal plans, everything you need to make getting dinner on the table each night easy, doable, and delicious. Join us!</p>
                <p>Three weeks, three meal plans, everything you need to make getting dinner on the table each night easy, doable, and delicious. Join us!</p>
            </div>
        </div>
       </div>
    );
};

export default Banner;
import React, { useState } from 'react';
import {Link} from "react-router-dom";
import { Card, CardGroup } from 'react-bootstrap';
import ListRecipe from './ListRecipe';
import { ToastContainer, toast } from 'react-toastify';

const CardDetails = ({card}) => {
    
    const {recipeName,ingredients, cookingMethod,rating} = card;

    const handleToast = ()=>{
       
            toast("dufghdgwrhuhrg8ugwrh8ugf8urqwiq9f8iqe49rew8qufe8u !");
        
    }
    return (
       
           <div className='container mt-5'>
             <CardGroup>
                <Card>                
                    <Card.Body>
                    <Card.Title>{recipeName}</Card.Title>
                            {
                                ingredients?.map(item=><ListRecipe item={item}></ListRecipe> )
                            }
                    <Card.Text>
                        {cookingMethod}
                        <br />
                        Rating: {rating}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Link onClick={handleToast} className='text-decoration-none'>Favourite button</Link>
                        <ToastContainer />
                    </Card.Footer>                                  
                </Card>            
            </CardGroup>
           </div>
    );
};

export default CardDetails;
import React, { useState } from 'react';
import {Link} from "react-router-dom";
import { Card, CardGroup } from 'react-bootstrap';
import ListRecipe from './ListRecipe';
import { ToastContainer, toast } from 'react-toastify';

const CardDetails = ({card}) => {
    
    const {recipeName,ingredients, cookingMethod,rating} = card;
    const [accepted,setaccepted] =useState(true);

    const handleToast = ()=>{

        setaccepted(false);
        // console.log(event.bubbles);
        toast("wow This recipe is my favourite one!!!")
                 
        
    }
    return (
       
           <div className='container w-50 mt-5'>
            
             <CardGroup>
                <Card className=''>                
                    <Card.Body>
                    <Card.Title>Name: {recipeName}</Card.Title>
                            {
                                ingredients?.map(item=><ListRecipe item={item}></ListRecipe> )
                            }
                    <Card.Text>
                      CookingMethod:  {cookingMethod}
                        <br />
                        Rating: {rating}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                       <button onClick={handleToast} disabled={!accepted}>Favourite button</button>
                        <ToastContainer />
                    </Card.Footer>                                  
                </Card>            
            </CardGroup>
           </div>
    );
};

export default CardDetails;
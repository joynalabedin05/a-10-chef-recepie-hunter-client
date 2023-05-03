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
                <Card className='p-3'>                
                    <Card.Body>
                    <Card.Title>Name: {recipeName}</Card.Title>
                    <span className='fs-5'>How to make items:</span>
                            {
                                ingredients?.map((item,i)=><ListRecipe item={item} key={i}></ListRecipe> )
                            }
                    <Card.Text>
                      <span className='fs-5 me-3'>CookingMethod:</span>  {cookingMethod}
                        <br /> <br />
                        <span className='fs-5'>Rating:   {rating}</span>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                       <button className='btn btn-success' onClick={handleToast} disabled={!accepted}>Favourite button</button>
                        <ToastContainer />
                    </Card.Footer>                                  
                </Card>            
            </CardGroup>
           </div>
    );
};

export default CardDetails;
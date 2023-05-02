import React from 'react';

const Contact = () => {
    return (
       <div className='bg-light '>
         <div className='container pb-5'>
             <h1 className='text-center'><span className='text-warning fs-2'>Contact Us</span> <br /> Our Store Location </h1>
             <p className='text-center'>Corn, historically the main crop grown by Native American tribes in New England, continues to be grown in all New England states.</p>
             <div className=' w-50 d-flex gap-4 mt-5'>
            <img className='ms-5' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqWYI1rPxC8EJwP7p674Q7sMf2rbFYOmxwSK3TNspGjpv9HK1lKBnKPV6X9LULNQmoY5U&usqp=CAU" alt="" />
             <img className='ms-5 w-100' src="https://www.thestatesman.com/wp-content/uploads/2020/04/googl_ED.jpg" alt="" />
            </div>
        </div>
       </div>
    );
};

export default Contact;
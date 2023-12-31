import React from 'react';

const Testimonial = () => {
    return (
        <div className='bg-light'>
            <div className='pb-5 container'>
            <h1 className='text-center'><span className='text-warning fs-2'>Testimonial</span> <br /> Our Clients To Say </h1>
            <p className='text-center font-bold'>Three weeks, three meal plans, everything you need to make getting dinner on the table each night easy, doable, and delicious. Join us!</p>
            <div className='mt-5 d-md-flex gap-4'>
                <div className='border p-2'>
                    <img className='w-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU5Qp6hefR80mrpYZT7VANkV8BvJy6I1UTOoO8ls30DThvCRfc_asGMUmMoJacJ8JQfTA&usqp=CAU" alt="" />
                    <h4 className='mt-3'>Williumson Terry</h4>
                    <h5 className='text-warning'>Designer</h5>
                    <p> It is traditionally used in hasty pudding, cornbread and corn chowder.</p>
                </div>                          
                <div className='border p-2'>
                    <img className='w-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBkmlHLw-GBn1g2M2YNyScIqOqbtleRF8502kPL3R-44vBGb2BWEt7A7ftAXJHLxkruZ0&usqp=CAU" alt="" />
                    <h4 className='mt-3'>Richardlison</h4>
                    <h5 className='text-warning'>Architect</h5>
                    <p> It is traditionally used in hasty pudding, cornbread and corn chowder.</p>
                </div>                          
                <div className='border p-2'>
                    <img className='w-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1QtQGKgUhCDrwMKZmmibslbRhm3eWjMptt74qyoVAOFZ-7FloBygq_v_2phhxpW1PlYI&usqp=CAU" alt="" />
                    <h4 className='mt-3'>Nancy Momoland</h4>
                    <h5 className='text-warning'>Web Developer</h5>
                    <p> It is traditionally used in hasty pudding, cornbread and corn chowder.</p>
                </div>                          
            </div>
        </div>
        </div>
    );
};

export default Testimonial;
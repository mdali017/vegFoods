import React from 'react';

const SubcribeSection = () => {
    return (
        <div className='h-[200px] bg-[#d3d0c7] flex mt-20'>
            <div className='my-auto pl-16'>
                <h1>Subcribe to our Newsletter</h1>
                <h4>Get e-mail updates about our latest shops and special offers</h4>
            </div>
            <div>
                <div className="form-control mr-auto">

                    <div className="input-group mt-20 ml-60">
                        <input type="text" placeholder="Enter Email Address" className="input input-bordered" />
                        <button className="btn btn-square">
                            <div className="btn ml-9">Subscribe</div>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SubcribeSection;
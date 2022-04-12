import React from 'react';

const Expert = ({ expert }) => {
    const { name, img } = expert;
    return (
        <div className="card col-sm-12 col-md-6 col-lg-4 mt-5 g-5" >
            <div style={{ width: '18rem' }}>
                <img src={img} className="card-img-top" alt="..." />
            </div>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div >
    );
};

export default Expert;
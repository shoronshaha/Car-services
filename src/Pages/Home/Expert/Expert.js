import React from 'react';

const Expert = ({ expert }) => {
    const { name, img } = expert;
    return (
        <div class="card col-sm-12 col-md-6 col-lg-4 gx-5 mt-5" style={{ width: '18rem' }}>
            <img src={img} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
    );
};

export default Expert;
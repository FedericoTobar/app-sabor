import React from 'react'
import ProductCard from '../components/ProductCard'

const Home = () => {
    return (
        <div className='hero'>
            <div className="card bg-dark text-white">
                <img src="/assets/bg.jpg" className="card-img" alt="Background" height="500px"/>
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">LA ROTISERIA DE TU BARRIO</h5>
                        <p className="card-text lead fs-2">Copate y pedite unas burgers para que aprueben los pibes del altefe4</p>
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default Home
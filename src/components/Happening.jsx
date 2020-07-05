import React from 'react'
import SizeMeRenderer from 'react-sizeme'
import './style.css'
import elephant from '../images/elephant2.jpg'
import art from '../images/art.jpg'
import roadTrees from '../images/road-trees.jpg'

const Happening = (props) => {
    const { width } = props.size
    return (
        <div className='container col-8'>
            <div className='happening-title'>
                <h1>HEPPENING NOW</h1>
                <span className='arrow'>&lt;</span>
                <span className='arrow'>&gt;</span>
            </div>
            <div className="row">
                <div className="col-sm-8">
                    <div className='heppening-large city'>
                        <h1>CITY</h1>
                        <div className='heppening-large-text'>
                            <h2>Large article title</h2>
                            <p>Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam detracto, vidit vituperatoribus duo id.</p>
                            <p>Affter detraxit voluptatum vis eu, inermis eloquentiam</p>
                            <span> <span>&#9716;</span> 2m ago</span>
                        </div>
                    </div>
                    <div className='heppening-large travel'>
                        <h1>TRAVEL</h1>
                        <div className='heppening-large-text'>
                            <h2>Large article title</h2>
                            <p>Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam detracto, vidit vituperatoribus duo id.</p>
                            <p>Affter detraxit voluptatum vis eu, inermis eloquentiam</p>
                            <span> 
                                <span>&#9716;</span> 
                                2m ago 
                            </span>
                        </div>
                    </div>
                </div>
               
              
                <div className="col-sm-4 heppening-small">
                { width < 575 && <hr className="heppening-line"></hr>}  
                    <div  className='happening-contant'>
                        <img src={elephant} />
                        <h2>Small title</h2>
                        <span> 
                            <span>&#9716;</span> 
                            1h ago by <span className="text-line">Worldnews</span>
                        </span>
                    </div>
                    <div  className='happening-contant'>
                        <img src={art} />
                        <h2>Small title</h2>
                        <span> 
                            <span>&#9716;</span> 
                            1h ago by <span className="text-line">Days</span>
                        </span>
                    </div>
                    <div  className='happening-contant'>
                    <img src={roadTrees} />
                        <h2>Small title</h2>
                        <span> 
                            <span>&#9716;</span> 
                            1h ago by <span className="text-line">Monica</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SizeMeRenderer()(Happening)
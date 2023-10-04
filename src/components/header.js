import React from 'react';
import '../styles/header.css';
export default function Header() {
    
    return(
        <header className="row mainHeader">
            <div className="align-items-center justify-content-center subMainHeader" >
            {/* col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4  */}
            
            <h3 className="text-bold d-flex justify-content-center header">ListNest</h3>
            </div>
            
        </header>
        
    )
}
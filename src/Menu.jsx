import React, { useState, useEffect } from 'react';
import Page1 from './Page1.jsx';
import Page2 from './Page2.jsx';
import Page3 from './Page3.jsx';
import Page4 from './Page4.jsx';
import Page5 from './Page5.jsx';


function Menu() {
    // use state to track current page
    const [currentPage, setCurrentPage] = useState("1");

    // function to handle button clicks and set current page
    const changeDisplay = (event) => {
        const selectedPage = event.target.getAttribute('data-page');
        setCurrentPage(selectedPage);
        console.log(selectedPage);
    };

    return (<>
        <div class="options">
            <div class="button-style" onClick={changeDisplay} data-page="1"> Lunch Special and Appetizers </div>
            <div class="button-style" onClick={changeDisplay} data-page="2"> Soups and Salads </div>
            <div class="button-style" onClick={changeDisplay} data-page="3"> Curries and Noodles </div>
            <div class="button-style" onClick={changeDisplay} data-page="4"> Rice, BBQ, and Vegetables </div>
            <div class="button-style" onClick={changeDisplay} data-page="5">  A La Carte, Seafood, Specialties, <br /> and Beverages</div>

        </div>
        <div id="menu-content">
            { currentPage === "1" ? <Page1 /> : null}
            { currentPage === "2" ? <Page2 /> : null}
            { currentPage === "3" ? <Page3 /> : null}
            { currentPage === "4" ? <Page4 /> : null}
            { currentPage === "5" ? <Page5 /> : null}
        </div>
    </>)

}

export default Menu
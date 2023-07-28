import React from 'react';
import Pavi_1 from './App'
import img_3 from './Images/img3.jpg'
import img_4 from './Images/img4.jpg'
import img_5 from './Images/img5.jpg'
import pic1 from './Images/final 1.jpg'
import pic2 from './Images/final 2.jpg'
import pic3 from './Images/final 3.jpg'




function Sample(){
    return(
        <>
        <div id='container_7'>
            <img src={img_3}></img>
            <img src={img_4}></img>
            <img src={img_5}></img>
        </div>
        <Pavi_1 />

        <div id='final'>
            <div id='pic1'><img src={pic1} ></img>
            <h1>UNDERGRADUATE</h1>
            <p>A four year, private, non-profit liberal arts education is accessible and affordable to all</p>
            </div>
            
            <div id='pic3'><img src={pic3} ></img>
            <h1>UNDERGRADUATE</h1>
            <p>A four year, private, non-profit liberal arts education is accessible and affordable to all</p>
            </div>

            <div id='pic2'><img src={pic2} ></img>
            <h1>UNDERGRADUATE</h1>
            <p>A four year, private, non-profit liberal arts education is accessible and affordable to all</p>
            </div>
            
        </div>

        <div id='footer'>
            <p>ABC University is accredited by the Higher Learning Commission.</p>
            <p>ABC University is a private, non-profit, institution of higher learning since 1875.</p>
            <p>© 2023 ABC University</p>
        </div>

        
        </>
    )
}

export default (Sample);
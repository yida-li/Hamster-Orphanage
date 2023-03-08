import React from 'react'
import Productionbox from './Productionbox'
import pimage0 from '../images/milk.jpg'
import pimage1 from '../images/udon.jpg'
import pimage2 from '../images/rice.jpg'
import pimage3 from '../images/seed.jpg'
import pimage4 from '../images/carrots.jpg'
import pimage5 from '../images/leaf2.jpg'
export default function Products() {
    return (
        <div>

      
      
           <div className="title">
      <br></br>
      <br></br>
      <br></br>
            <h2>Food</h2>
    </div>
        
        <div id= 'maindish'>

        <div className='a-container'>
        <Productionbox image={pimage0} title="Milk"/>    
        <Productionbox image={pimage1} title="Udon"/> 
        </div>
        <div className='a-container'>
   
        <Productionbox image={pimage2} title="Rice"/>
        <Productionbox image={pimage3} title="Seed"/>


        </div>
        <div className='a-container'>
        <Productionbox image={pimage5} title="Leaf"/> 
        <Productionbox image={pimage4} title="Carrot"/> 
        </div>




        </div>
        </div>
    )
}

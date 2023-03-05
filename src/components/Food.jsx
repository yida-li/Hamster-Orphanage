import React from 'react'
import Productionbox from './Productionbox'
import pimage0 from '../images/milk.jpg'

import pimage2 from '../images/udon.jpg'
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
        <Productionbox image={pimage2} title="Udon"/>
        <Productionbox image={pimage2} title="Rice"/>
        </div>
 




        </div>
        </div>
    )
}

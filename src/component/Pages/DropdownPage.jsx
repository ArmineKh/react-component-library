import React from 'react'
import MultilevelDropdown from "../Dropdown/MultilevelDropdown";

import './index.css'
import { listaitems } from '../../helpers/constants'


const DropdownPage = () => {
  console.log(typeof listaitems[0].child[0].child)
  return (
    
     
      <main>
        <h1>Multilevel Dropdown</h1>
        <p>Lists are a continuous group of text or images. 
          They are composed of items containing primary and supplemental actions, 
          which are represented by icons and text.</p>
        
        <p></p>

        <div className="flex-container">
          <div>
            <h3>1 Level list </h3>
            <MultilevelDropdown listaitems={listaitems[0].child[0].child} />
          </div>

          <div>
            <h3>Multi Level list </h3>
            <MultilevelDropdown listaitems={listaitems} />
          </div>

          <div>
            <h3>Multi Level list with Link</h3>
            <MultilevelDropdown listaitems={listaitems[0].child} />
          </div>

          <div>
            <h3>Multi Level list with FontAwesome icons</h3>
            <MultilevelDropdown listaitems={listaitems} />
          </div>
        </div>

      </main>
  
    
  )
}

export default DropdownPage;
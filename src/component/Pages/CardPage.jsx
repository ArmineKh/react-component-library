import React from 'react'
import {Card} from "../index";
import './index.css'

const CardPage = () => {
  return (
    <main>
        <h1>Card</h1>
        <p>Cards are surfaces that display content and actions on a single topic.</p>

        <p>They should be easy to scan for relevant and actionable information. Elements, like text and images, 
          should be placed on them in a way that clearly indicates hierarchy. </p>

        <div className="flex-container">
          <div>
            <h3>Card with image, Title, Text , Autor, Action button with link </h3>
            <Card 
              img={'https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg'} 
              title={'Lorem ipsum'} 
              text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aspernatur velit necessitatibus, pariatur ex veritatis! Doloribus repudiandae ut eum fuga reprehenderit velit, voluptas repellendus ipsum.'} 
              author={'author'}
              actionLink={'https://en.wikipedia.org/wiki/Main_Page'}
              actionTitle={'Learn More'}
            />
          </div>
          <div>
            <h3>Card with image, Title, Autor , Text </h3>
            <Card 
              img={'https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg'} 
              title={'Lorem ipsum'} 
              text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aspernatur velit necessitatibus, pariatur ex veritatis! Doloribus repudiandae ut eum fuga reprehenderit velit, voluptas repellendus ipsum.'} 
              author={'author'}
              
            />
          </div>
          <div>
            <h3>Card with Title, Text, Autor</h3>
            <Card 
              title={'Lorem ipsum'} 
              text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aspernatur velit necessitatibus, pariatur ex veritatis! Doloribus repudiandae ut eum fuga reprehenderit velit, voluptas repellendus ipsum.'} 
              author={'author'}
            />
          </div>
        </div>
      </main>
  )
}

export default CardPage;
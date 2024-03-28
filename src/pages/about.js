import React from 'react'

const About = () => {
  return (
    <div className='about'>
        <div className="background">
        <h1>About Us.</h1>
        </div>
        <div className="table">
        <table>
          <thead>
            <tr>
              <th style={{height:'90px'}}>Our Story</th>
              <th style={{height:'90px'}}>Our Mission</th>
            </tr>
          </thead>
          <tbody>
            
              <tr>
                {/* Use rowspan for the first row */}
                <td>{"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ea, nostrum ipsam non, exercitationem laborum animi repellendus ex omnis repudiandae illo, debitis dolor porro minima sit quibusdam soluta iusto similique quaerat iste! Explicabo vero illo in nobis adipisci."}</td>
                <td>{"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptate corrupti maxime natus nisi inventore! Voluptatibus error rerum impedit magni magnam sit dolorum facere labore quo ab assumenda dolorem perspiciatis quas necessitatibus, ea amet quod! Ipsum fugit amet praesentium iste."}</td>
              </tr>
          </tbody>
          <thead>
            <tr>
              <th style={{height:'90px'}}>Our Branches</th>
              <th style={{height:'90px'}}>Beautiful Homes</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                {/* Use rowspan for the first row */}
                
                <td>{"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quis est, iure quasi sint deserunt voluptate dolores repellendus molestiae sed magni aut vel nisi? Adipisci architecto aspernatur explicabo at saepe."}</td>
                <td>{"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aspernatur placeat itaque dignissimos error facilis ut beatae sit deserunt distinctio alias optio, minus possimus fuga?"}</td>
              </tr>
          </tbody>
        </table>
        </div>
     
    </div>
  )
}

export default About

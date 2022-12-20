import React from 'react'

function About(props) {
    
  return (
    <div className="card-group " >
  <div className={`card  bg-${props.mode} m-3`} >
    <img src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?size=338&ext=jpg&ga=GA1.2.866082328.1671487332&semt=sph" className="card-img-top" alt="..."/>
    <div className="card-body" style={props.togglemode}>
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Text-Editor is a web app created using react with this you can change the features of text such as changin the text to uppercase, lowercase case generating Qr-code and many more 😍.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className={`card  bg-${props.mode} m-3`}>
    <img src="https://img.freepik.com/premium-vector/portrait-caucasian-woman-avatar-female-person-vector-icon-adult-flat-style-headshot_605517-26.jpg?w=2000" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Text-Editor is a web app created using react with this you can change the features of text such as changin the text to uppercase, lowercase case generating Qr-code and many more 😍.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className={`card  bg-${props.mode} m-3`} >
    <img src="https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg?size=338&ext=jpg&ga=GA1.2.866082328.1671487332&semt=sph" className={`card-img-top  bg-dark`} alt="..."/>
    <div className={`card-body`} >
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Text-Editor is a web app created using react with this you can change the features of text such as changin the text to uppercase, lowercase case generating Qr-code and many more 😍.</p>
      {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
    </div>
  </div>
</div>
  )
}

export default About

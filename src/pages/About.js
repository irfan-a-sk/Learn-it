import React from 'react'
import Wheel from '../images/CycleWheel.jpeg'
import Girl1 from '../images/Girl1.png'
import Desk from '../images/Desk.jpg'
import Girl2 from '../images/Girllook.jpg'
// import '../style/Style.css';

<link href="https://fonts.googleapis.com/css?family=Bungee+Inline" rel="stylesheet"></link>


const About =() => {
    return(
        <>
        <div className="App m-auto ">
            <h1 className='Heading text-center mt-[30px]'><strong>Innovation </strong>in Online Learning
            </h1>
          </div>
         
          <div className="main">
          <div className="grid-container grid">
            <div>
            <img src={Girl1} className="img1 "width="650px" height="450px" alt='girl-img' />
            </div>
            <div className="text p-[20px] bg-slate-900 w-[300px]">
              <h3>Mordern <strong>Education</strong> </h3>
              <p>dfdkjd  dfkjkfdfkdjsdn dsfjshnvs sdisvjsdijvs sdivsdi
              </p>
            </div>
            <img src={Wheel} className="img2  h-[300px]" alt='wheel-img' />
            </div>
            <div className="grid2 grid">
              <div className="girl2">
            <img src={Girl2} className="img3  h-[300px]" alt='girl-2' />
            </div>
            <div className="text p-[20px] bg-slate-900 w-[300px]">
              <h3>Mordern <strong>Education</strong></h3>
              <p>dfdkjd  dfkjkfdfkdjsdn dsfjshnvs sdisvjsdijvs sdivsdi
              </p>
            </div>
            <div className="desk ">
            <img src={Desk} className="img4 " alt='desk-img' />
            </div>
            </div>
            </div>
    
    
            <div className="Container-2">
              <div className="halfCircle">
                <h1><strong>Education & Learning</strong> </h1>
                <p className='tag'>lorema aso epsuin </p>
              </div>
    
              <div className="card">
                <div className="Card1">
                  <div className="cardCirc"><h1><strong>01</strong></h1></div>
                  <div className='Teaching'>
                    <h2><strong>Teaching</strong></h2>
                    <p>hwlo dakjsdkdfkjk asdkjjkfadhfak adfdj</p><br />
                    <a href='/'>LEARN MORE</a>
                  </div>
                </div>
    
                <div className="Card2">
                  <div className="cardCirc"><h1><strong>02</strong></h1></div>
                  <div className='Innovations'>
                    <h2><strong>Innovations</strong></h2>
                    <p>hwlo dakjsdkdfkjk asdkjjkfadhfak adfdj</p><br />
                    <a href='/'>LEARN MORE</a>
                  </div>
                </div>
    
                <div className="Card1">
                  <div className="cardCirc"><h1><strong>03</strong></h1></div>
                  <div className='Students'>
                    <h2><strong>Students</strong></h2>
                    <p>hwlo dakjsdkdfkjk asdkjjkfadhfak adfdj</p><br />
                    <a href='/'>LEARN MORE</a>
                  </div>
                </div>
    
                <div className="Card4">
                  <div className="cardCirc"><h1><strong>04</strong></h1></div>
                  <div className='Resource'>
                    <h2><strong>Resourse</strong></h2>
                    <p>hwlo dakjsdkdfkjk asdkjjkfadhfak adfdj</p><br />
                    <a href='/'>LEARN MORE</a>
                   <div><p>54545</p></div>
                  </div>
                </div>
              </div>
            </div>
        
        </>
    )
}

export default About
import React from 'react'
import '../../styles/aboutPage.stylesheet.scss'


function AboutPage() {
  return (
    <>
        <section className='wrapper'>

            <h1>PeckIt</h1>


            <p>
                PeckIt offers a full web-based solution towards maintaining and managing the chicken pedigree of the Løvlie research team at Linköping University. 
            </p>


            

            <div className='contributor-list'>

                <h3>Contributors</h3>
                
                <ul>
                    <li className='names'>

                        Sam Hurenkamp:
                        <ul>
                            <li className='contributor-role'>Main Panel, Pairing page, Database</li>
                        </ul>
                    </li>

                    <li className='names'>
                        Sandra Kaljula:
                        <ul>
                            <li className='contributor-role'>Admin Panel, Login in, Database</li>
                        </ul>
                    </li>

                    <li className='names'>
                        Mark Harvey:
                        <ul>
                            <li className='contributor-role'>Log in Page, Left panel</li>
                        </ul>
                    </li>

                    <li className='names'>
                        Ramin Darudi:
                        <ul>
                            <li className='contributor-role'>Main Panel, Left Panel, Top Panel</li>
                        </ul>
                    </li>
                    
                </ul>

            </div>







        </section>

    </>

  )
}

export default AboutPage

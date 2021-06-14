import { Component } from 'react'
import cookies from '../imgs/cookies.png'

class CookiePolicy extends Component {


    render () {
        return (
            <div id="cooki-cont0"> 
            <p onClick={e => this.props.close()} id="cooki-close">×</p>
            <div id="cooki-cont1">
            <img src={cookies}></img>
            <h3>Cookie policy</h3> 
            
            </div>
            <div id="cooki-cont2" >
            
            <p>This cookie policy explains how Catena Protocol uses the data which we collect through cookies when the user visits the present website.</p> 
            <h6>Cookies</h6>
            <p>Cookies are text files placed on the user's computer to collect standard internet log information and visitors' behaviour information. When the user visits our website, we may collect information automatically through cookies or similar technology.
            For further information, visit <a href="https://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer">allaboutcookies.org.</a></p>
            <h6>Types of cookies</h6>
            <p >In general, there are three different ways to classify cookies: what purpose they serve, how long they endure, and their provenance. </p>
            <h6 >Duration</h6>
            <p>▪ Session cookies - These cookies are temporary and they expire once the user closes the browser (or once the session ends).<br></br><br></br>  
            ▪ Persistent cookies - This category encompasses all cookies that remain within the hard drive until the user erases them, or the browser does depending on the cookie's expiration date.</p>
            <h6 >Provenance</h6>
            <p>▪ First-party cookies - These cookies are punt on the user's device directly by the website the user itself is visiting. <br></br><br></br>
            ▪ Third-party cookies - These are the cookies that are placed on the user's device not by the website being visited, but by a third part such as an advertiser or an analytic system.</p>
            <h6 >Purpose</h6>
            <p>▪ Strictly necessary cookies — These cookies are essential to browse the website and use its features, such as accessing secure areas of the site. Cookies that allow web shops to hold items within the cart while the user is shopping online are an example of strictly necessary cookies. These cookies are generally first-party session cookies. <br></br><br></br>
            ▪ Preferences cookies — Also known as “functionality cookies,” these cookies allow a website to remember choices the user has made in the past, like language preference, localization, user name and password in order to automatically re-sign in.  <br></br><br></br>
            ▪ Statistics cookies — Also known as “performance cookies,” these cookies collect information about how the website is used, such as which pages the user visited and which links he/she clicked on. None of such information can be used to identify the user, since they are anonymized. This includes cookies from third-party analytics services as long as the cookies are for the exclusive use of the owner of the website visited. <br></br><br></br>
            ▪ Marketing cookies — These cookies track the user's online activity to help advertisers deliver more relevant advertising or to limit how many times the users sees an adv. These cookies can share such information with other organizations or advertisers. These are persistent cookies and almost always of third-party provenance.</p> 
            <h6>What cookies do we use?</h6>
            <p>Below is the list of cookies on this website.</p> 
               
            
            
             <p className="cookie-list-p">Strictly necessary (1)</p>    

            
            <div className="cookie-list0">    
                <div className="cookie-list1">    
             
         
            
            <table className="cookie-table">     
            <thead>
            <tr>
            <th scope="col">Name</th>     
            <th scope="col">Vendor</th>   
            <th scope="col">Purpose</th>       
            <th scope="col">Expiration</th>   
            <th scope="col">Type</th>       
            </tr>    
            </thead>
            <tbody className="cookie-table-list">
            <tr>
            <td>ctena_cons</td>  
            <td>ctena.netlify.app</td>      
            <td>Used to keep track of your choice about cookies' consent.</td>     
            <td>1 years</td>   
            <td>HTTP Cookie</td>   
            </tr>
            </tbody>
            <tbody className="cookie-table-list">
            
            </tbody></table></div>
            </div>
             
            <p className="cookie-list-p">Statistics (2)</p>    

            
            <div className="cookie-list0">    
            <div className="cookie-list1">    
             <table className="cookie-table">     
            <thead>
            <tr>
            <th scope="col">Name</th>     
            <th scope="col">Vendor</th>   
            <th scope="col">Purpose</th>       
            <th scope="col">Expiration</th>   
            <th scope="col">Type</th>       
            </tr>    
            </thead><tbody className="cookie-table-list">
            <tr>
            <td>_ga</td>  
            <td>ctena.netlify.app</td>      
            <td>It records a unique ID used to generate statistical data on how the visitor uses the website. More informations   
            <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage"> here</a>.</td>     
            <td>2 years</td>   
            <td>HTTP Cookie</td>   
            </tr>
            </tbody><tbody className="cookie-table-list">
            <tr>
            <td>_ga_0RZ6RYM2N6</td>  
            <td>ctena.netlify.app</td>      
            <td>Used to persist session state. More informations   
            <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage"> here</a>.</td>     
            <td>2 years</td>   
            <td>HTTP Cookie</td>   
            </tr>
            </tbody><tbody className="cookie-table-list">

            </tbody></table></div>
            </div> 
            <p id="cookie-change-txt">You can change your choice here:</p>
             
            <button  onClick={e => this.props.startc()} id="cookie-change-button">Allow</button>
            <button  onClick={e => this.props.stopc()} id="cookie-change-button">Deny</button>

             
            <h6>How to manage cookies on your browser</h6>
            <p>It is possible to set the browser in order not to accept cookies. However, as a result, in few cases some of our website features may not function.</p>   
                
            </div>
            </div>
        )
    }
}

export default CookiePolicy
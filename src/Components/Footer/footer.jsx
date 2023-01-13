
import { FooterContainer } from '../Footer/styled'

function Footer() {
 
    return (
      <FooterContainer>
            <img src="img/img-video.png" alt="" />
         <ul className='container-social-links'>
            <li><a href="#">FACEBOOK</a></li>
            <li><a href="#">INSTAGRAM</a></li>
            <li><a href="#">YOUTUBE</a></li>
            <li><a href="#">TWITTER</a></li>
         </ul>
         <div className='container-Explore-plus'>
            <p><a href="#">EXPLORE MAIS </a></p>
         </div>
      </FooterContainer>
      
    )
  }
  
  export default Footer
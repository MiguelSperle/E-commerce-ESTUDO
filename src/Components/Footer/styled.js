import  styled from 'styled-components';

export const FooterContainer = styled.footer `
   display: flex;
   flex-direction: row;
   justify-content: space-evenly;
   align-items: center;
   margin-bottom: 5px;

   

  .container-social-links {
    display: flex;
    flex-direction: row;
    gap: 80px;
    list-style: none;

   
  }

  .container-social-links li a {
    text-decoration: none;
    color: #000;
    transition: all 0.5s ease;

   
  }

  .container-social-links li a:hover{
    color: white;
    transition: all 0.5s ease;
  }

  .container-Explore-plus {
    background-color: black;
    width: 400px;
    height: 170px;

    display: flex;
    justify-content: center;
    align-items: center;
    
  }

  .container-Explore-plus p a {
    text-decoration: none;
    color: white;
    font-weight: 600;
    transition: all 0.5s ease;
  }

  .container-Explore-plus p a:hover {
    color:  gray;
    transition: all 0.5s ease;
  }
`
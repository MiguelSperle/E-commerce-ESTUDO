import  styled from 'styled-components';

export const HeaderContainer = styled.header `
 display: flex;
 flex-direction: row;
 justify-content: space-evenly;
 align-items: center;
 padding: 30px;
 
 position: fixed;
 top: 0;
 left: 0;
 right: 0;
 margin: 0 auto;
 background-color: darkgray;
 z-index: 9999;

  
  .navBar ul {
    display: flex;
    flex-direction: row;
    gap: 35px;
    list-style: none;

   
  }

   .navBar ul li a {
    text-decoration: none;
    color: #000;
    letter-spacing: 1px;
    transition: all 0.5s ease;

   
   }

   .navBar ul li a:hover {
    color: white;
    transition: all 0.3s ease;
   }

   .inputHeader {
    background-image: url(img/icon-search.svg);
    background-repeat: no-repeat;
    background-position: 5px;
    border: none;
    border-radius: 8px;
    border: 2px solid #000;
    height: 40px;
    padding-left: 40px;
    cursor: pointer;
    
 
   }

   .inputHeader::placeholder {
    font-weight: 500;
    color: gray;
   }

   

   .img-bag {
    cursor: pointer;
    z-index: 9999;

   
   }

   .count-products {
    position: absolute;
    right: 27px;
    top: 40px;
    color: red;
    font-size: 0.9rem;
    font-weight: 600;

   
   }
`



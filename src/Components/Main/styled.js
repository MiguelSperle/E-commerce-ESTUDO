
import  styled from 'styled-components';

export const MainContainer = styled.main `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 80px;
    margin-bottom: 120px;

    .container-information {
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: center;
        width: 450px;
        margin-top: 200px;
        text-align: center;

        .title {
            font-size: 2.4rem;
            color: #000000;
            font-weight: 600; 
        }

        .informatio-shoes {
            font-size: 1rem;
            color: #9C9696;   
        }

        .price {
            color: #000000;
            font-weight: 500;
            font-size: 1.6rem;   
        }

        .button-buy {
            width: 200px;
            height: 50px;
            cursor: pointer;
            font-weight: 600;
            background-color: red;
            color: white;
            transition: all 0.4s ease;
            border: none;
            border-radius: 10px;
            box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);  
            margin-left: 130px;
        }

        .button-buy:hover {
            color: black;
            transition: all 0.4s ease;   
        }

    }

    .container-tenis {
        display: flex;
        flex-direction: column;
        align-items: center;  
    }

    .container-grid-tenis-small {
        display: grid;
        grid-template-columns: repeat(3,300px); 
    }

    .img-main {
       margin-top: 60px;
       
    }

    .container-grid-tenis-small img {
        transition: all 0.4s ease;
        border-radius: 15px;
    
    }

    .container-grid-tenis-small img:hover {
        transform: scale(1.2);
        transition: all 0.4s ease;
        cursor: pointer;  
    }
`

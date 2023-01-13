import  styled from 'styled-components';

export const ModalContainer = styled.div `
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100%;
    z-index: 9999;
    background-color: rgba(0,0,0,0.4);

    .close-modal {
        position: relative;
        bottom: 350px;
        right: 500px;
        font-size: 1.2rem;
        color: white;
        cursor: pointer;

    }

    .container-modal {
        border: 1px solid white;
        border-radius: 7px;
        background-color: white;
        width: 800px;
        max-width: 100%;
        height: 400px;
        animation: lado 0.7s linear;
        display: flex;
        flex-direction: column;
        padding: 20px;

        
     
        .name-product {
            color: #000;
            font-size: 1.22rem;
            
        }

        .img-bag {
          width: 200px;
        }

        .clean-bag {
            width: 160px;
            height: 50px;
            border-radius: 10px;
            border: none;
           
            cursor: pointer;
            font-weight: 600;
            background-color: red;
            color: white;
            transition-property: width ;
            transition: all 0.5s ease;
            box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgb(0 0 0 / 0%);
    }      

    .clean-bag:hover {
        transition-property: width;
        width: 200px;
        transition: all 0.5s ease;
        
    }

      
    }

    @keyframes lado {
        0% {
            transform: translateY(-150px);
            opacity: 0;
        }

        100% {
            transform: translateY(0px);
            opacity: 1;
        }
    }
`



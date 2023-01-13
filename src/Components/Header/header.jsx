import { useState } from 'react'
import { HeaderContainer } from '../Header/styled'
import Modal from '../ModalCompra/modal'
import { useProducts } from '../../Providers/useProducts';

function Header() {

    const [open, setOpen] = useState(false)
    const { products } = useProducts();

    return (
     <>
     <HeaderContainer>
        <img src="img/logo.svg" alt="" />
            <nav className='navBar'>
                <ul>
                    <li><a href="#HOMEM">HOMEM</a></li>
                    <li><a href="#MULHER">MULHER</a></li>
                    <li><a href="#CRIANÇA">CRIANÇA</a></li>
                    <li><a href="#CUSTOMIZAR">CUSTOMIZAR</a></li>
               </ul>
            </nav>
           <input className='inputHeader' type="search" placeholder='Pesquisar' />
           <img onClick={() => setOpen(!open)} className='img-bag' src="img/icon-bag.svg" alt=""  />
             {products.length > 0 && <p className='count-products'>{products.length}</p>}
          
     </HeaderContainer>
     {open && <Modal setOpen={setOpen}/>}
     </>
      
    )
  }
  
  export default Header
  

import { ModalContainer } from '../ModalCompra/styled'
import { useProducts } from '../../Providers/useProducts';


function Modal({setOpen}) {
  const { products, clean } =  useProducts() 

  
  
 
    return (
      <ModalContainer >
        <p onClick={() => setOpen(false)} className='close-modal'>X</p>
         <div className='container-modal'>
          {products.map(produto => {
           
            return (
               <>
               <p className='name-product'>{produto.name} </p>
               <p>{produto.price}</p>
               <img className='img-bag' src={produto.img} alt="" />
               </>
              )
          })}
            <button className='clean-bag' onClick={clean}>Limpar Compras</button> 
         </div>
         

         
      </ModalContainer>
      
    )
  }
  
  export default Modal

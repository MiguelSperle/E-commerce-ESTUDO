
import { MainContainer } from '../Main/styled';
import { useProducts } from '../../Providers/useProducts';



function Main() { 
  const { addProductCart } = useProducts();

  return (
    <MainContainer>

      <div className='container-information'>
        <p className='title'> Tênis Esportivo Para Corrida Top</p>
        <span className='informatio-shoes'> Esse tênis tem o intuito de te deixar ainda mais fitness, focado, e musculoso. </span>
        <span className='price'>R$ 1.000,00</span>
        <button onClick={() => addProductCart({
          id: 1,
          name: 'Tênis Esportivo Para Corrida Top',
          price: 'R$ 1.000,00',
          img: 'img/tenis-1-galeria.png'
        })} className='button-buy' type='submit'>COMPRAR</button>
      </div>

      <div className='container-tenis'>
        <img className='img-main' src="img/tenis-1-ampliado.png" alt="" />
        <div className='container-grid-tenis-small'>
          <img src="img/tenis-1-galeria.png" alt="" />
          <img src="img/tenis-2-galeria.png" alt="" />
          <img className='img-3-grid' src="img/tenis-3-galeria.png" alt="" />
        </div>
      </div>

    </MainContainer>

  )
}

export default Main

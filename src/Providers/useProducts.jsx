import React from 'react';
// o nome do context
export const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = React.useState([]); 

  function addProductCart({
    id,
    name,
    price,
    img
  }) {
    const ProductExist = products.find((item) =>item.id === id ) // ( find ele procura, o (item.id) ta pegando o id do produto, ===  id dele)
    if(ProductExist ){ // verificando se item.id (id do produto) === id dele
      return alert('Ja foi adicionado') // retornara um alert falando que ja foi adicionado e  não adicionara mais nada
     
     } 

    alert('Item adicionado!')
    setProducts([...products, { id, name, price, img}])
   
  }

   function clean(){
     setProducts([]) // limpando o array de produtos. logo limpando da tela tambem
     
   }


  return (
    <ProductsContext.Provider value={{ addProductCart, products, setProducts, clean}}>
      {children}
    </ProductsContext.Provider>
  );
}

export const useProducts = () => React.useContext(ProductsContext);



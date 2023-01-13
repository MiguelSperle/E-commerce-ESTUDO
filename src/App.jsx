
import Header from './Components/Header/header'
import Main from './Components/Main/main'
import Footer from './Components/Footer/footer'
import { GlobalStyle } from './GlobalStyle'
import { ProductsProvider } from './Providers/useProducts'


function App() {


  return (
    <ProductsProvider>
      <Header />
      <Main />
      <Footer />
      <GlobalStyle />
    </ProductsProvider>
  )
}

export default App

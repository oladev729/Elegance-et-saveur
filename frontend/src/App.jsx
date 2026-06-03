import { useState } from 'react'
import Navigation from './components/Navigation'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import FAQPage from './components/FAQPage'
import DeliveryPage from './components/DeliveryPage'
import LegalPage from './components/LegalPage'
import CategoryList from './components/CategoryList'
import ProductList from './components/ProductList'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedCategory, setSelectedCategory] = useState(null)

  const handleSelectCategory = (category) => {
    setSelectedCategory(category)
    setCurrentPage('products')
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onSelectCategory={handleSelectCategory} />
      case 'about':
        return <AboutPage />
      case 'products':
        return (
          <>
            <CategoryList 
              onSelectCategory={handleSelectCategory}
              selectedCategory={selectedCategory}
            />
            <ProductList category={selectedCategory} />
          </>
        )
      case 'contact':
        return <ContactPage />
      case 'faq':
        return <FAQPage />
      case 'delivery':
        return <DeliveryPage />
      default:
        return <HomePage onSelectCategory={handleSelectCategory} />
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Elegance et Saveur</h1>
        <p>Parfums, Abayas, Pâtisserie & Cuisine</p>
      </header>
      
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="app-main">
        {renderPage()}
      </main>
      
      <footer className="app-footer">
        <p>Contactez-nous sur WhatsApp pour vos commandes</p>
      </footer>
    </div>
  )
}

export default App

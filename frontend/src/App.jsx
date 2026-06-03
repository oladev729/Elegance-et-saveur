import { useState } from 'react'
import HomePage from './components/HomePage'
import CategoryList from './components/CategoryList'
import ProductList from './components/ProductList'
import './App.css'

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [showHomePage, setShowHomePage] = useState(true)

  const handleSelectCategory = (category) => {
    setSelectedCategory(category)
    setShowHomePage(false)
  }

  const handleBackToHome = () => {
    setShowHomePage(true)
    setSelectedCategory(null)
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Elegance et Saveur</h1>
        <p>Parfums, Abayas, Pâtisserie & Cuisine</p>
        {!showHomePage && (
          <button className="back-home-btn" onClick={handleBackToHome}>
            ← Retour à l'accueil
          </button>
        )}
      </header>
      
      <main className="app-main">
        {showHomePage ? (
          <HomePage onSelectCategory={handleSelectCategory} />
        ) : (
          <>
            <CategoryList 
              onSelectCategory={handleSelectCategory}
              selectedCategory={selectedCategory}
            />
            <ProductList category={selectedCategory} />
          </>
        )}
      </main>
      
      <footer className="app-footer">
        <p>Contactez-nous sur WhatsApp pour vos commandes</p>
      </footer>
    </div>
  )
}

export default App

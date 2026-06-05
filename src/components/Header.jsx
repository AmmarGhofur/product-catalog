import { ShoppingCart } from 'lucide-react';

const Header = ({ 
  searchQuery, 
  setSearchQuery, 
  selectedCategory, 
  setSelectedCategory, 
  categories, 
  sortOrder, 
  setSortOrder, 
  cartCount 
}) => {
  return (
    <header className="app-header">
      <div className="header-top">
        <h1>FakeStore Catalog</h1>
        <div className="cart-container">
          <ShoppingCart size={24} />
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </div>
      </div>
      
      <div className="header-filters">
        <input 
          type="text" 
          placeholder="Cari produk..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        
        <select 
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="filter-select"
        >
          <option value="all">Semua Kategori</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <select 
          value={sortOrder} 
          onChange={(e) => setSortOrder(e.target.value)}
          className="filter-select"
        >
          <option value="default">Urutkan: Default</option>
          <option value="asc">Harga: Termurah</option>
          <option value="desc">Harga: Termahal</option>
        </select>
      </div>
    </header>
  );
};

export default Header;

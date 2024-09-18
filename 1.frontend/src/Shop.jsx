import React, { useState, useEffect } from 'react';
import {
  Button,
  Input,
  Select,
  Option,
  Card,
  CardBody,
  Typography,
  IconButton,
} from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';

const ShopPage = () => {
  const [productsData, setProductsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]); // Initialize wishlist

  const itemsPerPage = 15;
  const navigate = useNavigate();

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/all-books');
        const data = await response.json();
        const formattedData = data.map(product => ({
          id: product.id,
          name: product.ProductName,
          price: parseFloat(product.ProductPrice.replace('$', '')),
          brand: product.Brand,
          category: product.Category,
          image: product.imageUrl,
          description: product.ProductDescription,
        }));
        setProductsData(formattedData);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };
    fetchProducts();
  }, []);

  // Load wishlist from local storage when the component mounts
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(storedWishlist);
  }, []);

  const handleSearch = (e) => setSearchQuery(e.target.value);
  const handleSortChange = (e) => setSortOption(e);
  const handleBrandChange = (e) => setSelectedBrand(e);
  const handleCategoryChange = (category) => setSelectedCategory(category);
  const handleClearFilters = () => {
    setSearchQuery('');
    setSortOption('');
    setSelectedBrand('');
    setSelectedCategory('');
  };

  // Handle add to cart
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    navigate('/checkout', { state: { product } });
  };

  // Handle add to wishlist
  const handleAddToWishlist = (product) => {
    const existingProduct = wishlist.find(item => item.id === product.id);
    
    if (!existingProduct) {
      const updatedWishlist = [...wishlist, product];
      setWishlist(updatedWishlist); // Update state
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist)); // Save to local storage
      alert(`${product.name} added to wishlist`);
    } else {
      alert(`${product.name} is already in the wishlist`);
    }
  };

  const handleGoToWishlist = () => {
    navigate('/wishlist');
  };

  const filteredProducts = productsData
    .filter(product => 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedBrand ? product.brand === selectedBrand : true) &&
      (selectedCategory ? product.category === selectedCategory : true)
    )
    .sort((a, b) => {
      switch (sortOption) {
        case 'priceLowToHigh':
          return a.price - b.price;
        case 'priceHighToLow':
          return b.price - a.price;
        default:
          return 0;
      }
    });

  const paginatedProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <div className="bg-white">
      <NavBar />
      <div className="max-w-screen-xl mx-auto p-8 bg-white text-gray-800">
        <Typography variant="h1" color="gray" className="mb-8">Shop Page</Typography>
        <div className="flex flex-grid gap-4 mb-8">
          <Input 
            type="text" 
            placeholder="Search products" 
            value={searchQuery} 
            onChange={handleSearch} 
            size="lg"
            className="flex-grow"
          />
          <Select 
            value={sortOption} 
            onChange={handleSortChange} 
            size="md"
            className="bg-black text-white"
          >
            <Option value="">Sort by</Option>
            <Option value="priceLowToHigh">Price: Low to High</Option>
            <Option value="priceHighToLow">Price: High to Low</Option>
          </Select>
          <Select 
            value={selectedBrand} 
            onChange={handleBrandChange} 
            size="md"
            className="bg-black text-white"
          >
            <Option value="">Brand</Option>
            <Option value="Adidas">Adidas</Option>
            <Option value="Nike">Nike</Option>
            <Option value="Puma">Puma</Option>
          </Select>
        </div>
        <div className="flex flex-wrap gap-2 mb-8">
          <Button onClick={() => handleCategoryChange('Sneakers')} variant="outlined" size="lg">Sneakers</Button>
          <Button onClick={() => handleCategoryChange('Shoes')} variant="outlined" size="lg">Shoes</Button>
          <Button onClick={handleClearFilters} color="red" size="lg">Clear Filters</Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {paginatedProducts.map(product => (
            <Card key={product.id} className="shadow-lg">
              <CardBody>
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-md" />
                <Typography variant="h2" className="mb-2">{product.name}</Typography>
                <Typography color="gray" className="mb-1">Price: ${product.price.toFixed(2)}</Typography>
                <Typography color="gray" className="mb-1">Brand: {product.brand}</Typography>
                <Typography color="gray" className="mb-1">Category: {product.category}</Typography>
                <Typography color="gray" className="mb-1">{product.description}</Typography>
                <div className="flex space-x-2 mt-4">
                  <Button onClick={() => handleAddToCart(product)} color="blue" size="sm">Add to Cart</Button>
                  <Button onClick={() => handleAddToWishlist(product)} color="green" size="sm">Add to Wishlist</Button>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
        <div className="flex justify-center space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <IconButton
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              color={currentPage === index + 1 ? 'gray' : 'blue-gray'}
              className={currentPage === index + 1 ? 'bg-gray-800 text-white' : ''}
            >
              {index + 1}
            </IconButton>
          ))}
        </div>
        <Button onClick={handleGoToWishlist} color="purple" className="mt-8">
          Go to Wishlist
        </Button>
      </div>
    </div>
  );
};

export default ShopPage;

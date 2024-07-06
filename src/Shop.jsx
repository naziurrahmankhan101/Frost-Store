import React, { useState } from 'react';
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
import NavBar from './NavBar';

const productsData = [
  { id: 1, name: 'Product 1', price: 50, brand: 'Adidas', category: 'Sneakers', image: 'path/to/image1.jpg' },
  { id: 2, name: 'Product 2', price: 60, brand: 'Nike', category: 'Shoes', image: 'path/to/image2.jpg' },
  { id: 15, name: 'Product 15', price: 30, brand: 'Puma', category: 'Jersey', image: 'path/to/image15.jpg' },
];

const ShopPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 15;

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e);
  };

  const handleBrandChange = (e) => {
    setSelectedBrand(e);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setSortOption('');
    setSelectedBrand('');
    setSelectedCategory('');
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
        case 'bestSeller':
          // Add your best seller logic here
          return 0;
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
            <Option value="bestSeller">Best Seller</Option>
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
          <Button onClick={() => handleCategoryChange('Jersey')} variant="outlined" size="lg">Jersey</Button>
          <Button onClick={() => handleCategoryChange('Gear')} variant="outlined" size="lg">Gear</Button>
          <Button onClick={handleClearFilters} color="red" size="lg">Clear Filters</Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {paginatedProducts.map(product => (
            <Card key={product.id} className="shadow-lg">
              <CardBody>
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-md" />
                <Typography variant="h2" className="mb-2">{product.name}</Typography>
                <Typography color="gray" className="mb-1">Price: ${product.price}</Typography>
                <Typography color="gray" className="mb-1">Brand: {product.brand}</Typography>
                <Typography color="gray" className="mb-1">Category: {product.category}</Typography>
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
      </div>
    </div>
  );
};

export default ShopPage;
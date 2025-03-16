"use client"

import { useState } from 'react';
import ProductCard from '@/components/productCard';
import { ShoppingCart, Menu, Search, User, Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-30">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo & Brand */}
            <div className="flex items-center">
              <button 
                className="mr-2 p-2 md:hidden" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="h-6 w-6" />
              </button>
              <h1 className="text-xl font-bold text-amber-500">ShopSmart</h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-800 hover:text-amber-500 font-medium">Home</a>
              <a href="#" className="text-gray-800 hover:text-amber-500 font-medium">Products</a>
              <a href="#" className="text-gray-800 hover:text-amber-500 font-medium">Categories</a>
              <a href="#" className="text-gray-800 hover:text-amber-500 font-medium">Deals</a>
              <a href="#" className="text-gray-800 hover:text-amber-500 font-medium">About</a>
            </nav>
            
            {/* User Actions */}
            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="pl-3 pr-10 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
                <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
              <button className="p-2">
                <User className="h-5 w-5 text-gray-700" />
              </button>
              <button className="p-2">
                <Heart className="h-5 w-5 text-gray-700" />
              </button>
              <button className="p-2 relative">
                <ShoppingCart className="h-5 w-5 text-gray-700" />
                <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} mt-3`}>
            <div className="flex items-center mb-3">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
              <Search className="absolute right-7 h-4 w-4 text-gray-400" />
            </div>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-gray-800 hover:text-amber-500 py-2 border-b border-gray-100">Home</a>
              <a href="#" className="text-gray-800 hover:text-amber-500 py-2 border-b border-gray-100">Products</a>
              <a href="#" className="text-gray-800 hover:text-amber-500 py-2 border-b border-gray-100">Categories</a>
              <a href="#" className="text-gray-800 hover:text-amber-500 py-2 border-b border-gray-100">Deals</a>
              <a href="#" className="text-gray-800 hover:text-amber-500 py-2">About</a>
            </nav>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Special Spring Deals</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">Discover amazing products at unbeatable prices. Limited time offers available now!</p>
          <Button className="bg-white text-amber-600 hover:bg-gray-100 font-medium px-6 py-2">
            Shop Now
          </Button>
        </div>
      </div>
      
      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Category Pills */}
        <div className="flex overflow-x-auto pb-4 mb-6 scrollbar-hide">
          <div className="flex space-x-3">
            <button className="whitespace-nowrap px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">All Products</button>
            <button className="whitespace-nowrap px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">Electronics</button>
            <button className="whitespace-nowrap px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">Home Decor</button>
            <button className="whitespace-nowrap px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">Kitchen</button>
            <button className="whitespace-nowrap px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">Office</button>
            <button className="whitespace-nowrap px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">Outdoor</button>
            <button className="whitespace-nowrap px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">Furniture</button>
          </div>
        </div>
        
        {/* Featured Products Section */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
            <a href="#" className="text-amber-600 hover:underline text-sm font-medium">View All</a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </section>
        
        {/* Deals Section with Banner */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl overflow-hidden shadow-lg">
            <div className="md:flex">
              <div className="p-8 md:w-2/3">
                <span className="inline-block px-3 py-1 bg-white text-blue-600 rounded-full text-xs font-semibold mb-4">LIMITED TIME</span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Spring Tech Sale</h3>
                <p className="text-blue-100 mb-6">Save up to 40% on selected electronics and accessories. Don't miss out on these incredible savings!</p>
                <Button className="bg-white text-blue-600 hover:bg-blue-50">
                  Shop the Sale
                </Button>
              </div>
              <div className="md:w-1/3 bg-blue-400 flex items-center justify-center p-6">
                <div className="h-48 w-48 bg-white rounded-full flex items-center justify-center shadow-inner">
                  <span className="text-4xl font-bold text-blue-600">40% OFF</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Best Sellers Section */}
        <section className="mt-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Best Sellers</h2>
            <a href="#" className="text-amber-600 hover:underline text-sm font-medium">View All</a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4">ShopSmart</h3>
              <p className="text-gray-400 text-sm">Your one-stop shop for quality products at amazing prices. We've been serving customers since 2010.</p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Shop</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">All Products</a></li>
                <li><a href="#" className="hover:text-white">Deals</a></li>
                <li><a href="#" className="hover:text-white">New Arrivals</a></li>
                <li><a href="#" className="hover:text-white">Gift Cards</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Customer Service</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Shipping Policy</a></li>
                <li><a href="#" className="hover:text-white">Returns & Refunds</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Newsletter</h4>
              <p className="text-gray-400 text-sm mb-4">Subscribe to get special offers and once-in-a-lifetime deals.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-grow py-2 px-3 text-sm bg-gray-700 border border-gray-600 rounded-l-md focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
                <Button className="bg-amber-500 hover:bg-amber-600 rounded-l-none">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
            <p>&copy; 2025 ShopSmart. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
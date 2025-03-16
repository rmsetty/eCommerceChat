"use client"

import { useState } from 'react';
import { Star, Truck, Award, ThumbsUp, X, ChevronLeft, ShoppingCart, Send, User } from 'lucide-react';
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import mainPic from "../app/image.png";

export default function ProductCard() {
  const [showDetails, setShowDetails] = useState(false);
  
  return (
    <div className="relative w-full max-w-sm">
          {/* <div className="relative w-full max-w-sm mx-auto"> */}

      {/* Main Product Card */}
      <Card className={`w-full max-w-sm hover:shadow-lg transition-all duration-500 ${
        showDetails ? 'scale-95 opacity-75' : ''
      }`}>
        {showDetails && (
          <div className="absolute inset-0 bg-gray-900 opacity-30 z-0 rounded-lg" />
        )}
        <CardContent className="p-0 relative">
          {/* Top badge section */}
          <div className="relative">
            <Badge className="absolute top-2 left-2 bg-amber-500 hover:bg-amber-600 text-white font-medium px-2 py-1 z-10">
              <Award className="w-3 h-3 mr-1" /> Amazon&apos;s Choice
            </Badge>
            
            <div className="relative aspect-square w-full p-4">
              <Image
                src={mainPic.src}
                alt="TV Wall Mount"
                width={500}
                height={300}
                className={`object-contain p-4 ${showDetails ? 'opacity-30' : ''}`}
              />
              <Badge className="absolute bottom-2 right-2 bg-red-500 text-white">20% OFF</Badge>
            </div>
          </div>

          <div className="p-4 space-y-3">
            {/* Title */}
            <h2 className="font-medium text-sm leading-tight line-clamp-3">
              Full Motion TV Monitor Wall Mount Bracket Articulating Arms Swivel Tilt Extension Rotation for Most 15-42 Inch LED LCD Flat Curved Screen TVs
            </h2>

            {/* Ratings */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <Star className="w-4 h-4 fill-yellow-400/50 text-yellow-400" />
              </div>
              <span className="text-xs text-gray-500">124,622</span>
              <ThumbsUp className="w-3 h-3 text-green-600 ml-1" />
            </div>

            {/* Price section */}
            <div className="space-y-1">
              <div className="flex items-baseline gap-1">
                <span className="text-sm">$</span>
                <span className="text-2xl font-bold">19</span>
                <span className="text-sm">99</span>
                <Badge className="ml-2 bg-green-100 text-green-800 font-normal text-xs">Save $5</Badge>
              </div>
              <div className="flex items-center">
                <span className="text-xs text-gray-500">List: <span className="line-through">$24.99</span></span>
                <span className="text-xs text-gray-500 ml-2">($10.00/Count)</span>
              </div>
            </div>
            
            {/* Delivery section */}
            <div className="space-y-2 pt-1 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-blue-50 border-blue-200 text-blue-700 font-bold">prime</Badge>
                <span className="text-xs bg-blue-50 px-1 rounded text-blue-700">Same-Day</span>
              </div>
              <div className="flex items-start gap-2">
                <Truck className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-xs">
                  FREE delivery <span className="font-semibold">Today 5 PM - 10 PM</span> on $25 of qualifying items
                </span>
              </div>
            </div>

            {/* More buying choices */}
            <div className="text-xs text-gray-600 pt-1 border-t border-gray-100">
              <div>More Buying Choices</div>
              <div className="font-medium">$13.99 <span className="font-normal">(5+ used & new offers)</span></div>
            </div>

            {/* Button section */}
            <div className="pt-2 space-y-2">
              <Button 
                onClick={() => setShowDetails(true)} 
                className="w-full bg-amber-400 text-black hover:bg-amber-500 font-medium"
              >
                View Details
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sliding Detail Modal - ChatGPT Style */}
      <div 
        className={`absolute bottom-0 left-0 right-0 h-6/7 bg-white shadow-xl rounded-t-xl transition-all duration-500 ease-in-out ${
          showDetails 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-full opacity-0 pointer-events-none'
        }`}
        style={{ zIndex: 10 }}
      >
        <div className="h-full flex flex-col overflow-hidden">
          {/* Header with close button */}
          <div className="flex items-center justify-between p-3 border-b">
            <button 
              onClick={() => setShowDetails(false)}
              className="flex items-center text-sm text-gray-600 hover:text-gray-900"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back
            </button>
            <div className="text-sm font-medium">Product Assistant</div>
            <button 
              onClick={() => setShowDetails(false)}
              className="text-gray-500 hover:text-gray-900"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* ChatGPT-style content */}
          <div className="flex-1 overflow-y-auto p-3 space-y-6">
            {/* User message */}
            <div className="flex gap-3">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
                <User className="h-5 w-5 text-gray-600" />
              </div>
              <div className="flex flex-col max-w-[80%]">
                <div className="text-sm font-medium">You</div>
                <div className="text-sm mt-1 text-gray-800">
                  Show me how this mount looks when installed.
                </div>
              </div>
            </div>
            
            {/* Assistant message with images */}
            <div className="flex gap-3">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-amber-400 flex items-center justify-center">
                <ShoppingCart className="h-5 w-5 text-black" />
              </div>
              <div className="flex flex-col max-w-[90%]">
                <div className="text-sm font-medium">Product Assistant</div>
                <div className="text-sm mt-1 text-gray-800">
                  Here are some images showing how the mount looks when installed:
                </div>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="relative aspect-square w-full bg-gray-100 rounded-md overflow-hidden">
                    <img
                      src="https://mount-it.com/cdn/shop/files/the-beast-heavy-duty-full-motion-tv-wall-mount-with-extra-long-extension-mount-it-mi-394-39687691174043.jpg?v=1740678126&width=1214"
                      alt="TV mount extended"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square w-full bg-gray-100 rounded-md overflow-hidden">
                    <img
                      src="https://i5.walmartimages.com/asr/fe5c15dd-25cb-49d2-85d5-96a7c78c4989.2b8287854b0b652d00c388038f44f6b0.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
                      alt="TV mount retracted"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="text-sm mt-2">
                  The mount can extend up to 14.5 inches from the wall and retract to just 2.2 inches when pushed back, giving you flexibility for different viewing positions.
                </div>
              </div>
            </div>
            
            {/* User message */}
            <div className="flex gap-3">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
                <User className="h-5 w-5 text-gray-600" />
              </div>
              <div className="flex flex-col max-w-[80%]">
                <div className="text-sm font-medium">You</div>
                <div className="text-sm mt-1 text-gray-800">
                  What do customers say about this product?
                </div>
              </div>
            </div>
            
            {/* Assistant message with review graph */}
            <div className="flex gap-3">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-amber-400 flex items-center justify-center">
                <ShoppingCart className="h-5 w-5 text-black" />
              </div>
              <div className="flex flex-col max-w-[90%]">
                <div className="text-sm font-medium">Product Assistant</div>
                <div className="text-sm mt-1 text-gray-800">
                  This mount has received positive reviews overall. Here&apos;s the breakdown:
                </div>
                
                {/* Review bars */}
                <div className="mt-2 space-y-1 w-full">
                  <div className="flex items-center text-xs">
                    <span className="w-16">5 stars</span>
                    <div className="flex-grow h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-yellow-400 h-full rounded-full" style={{width: "74%"}}></div>
                    </div>
                    <span className="w-8 text-right">74%</span>
                  </div>
                  <div className="flex items-center text-xs">
                    <span className="w-16">4 stars</span>
                    <div className="flex-grow h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-yellow-400 h-full rounded-full" style={{width: "14%"}}></div>
                    </div>
                    <span className="w-8 text-right">14%</span>
                  </div>
                  <div className="flex items-center text-xs">
                    <span className="w-16">3 stars</span>
                    <div className="flex-grow h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-yellow-400 h-full rounded-full" style={{width: "6%"}}></div>
                    </div>
                    <span className="w-8 text-right">6%</span>
                  </div>
                  <div className="flex items-center text-xs">
                    <span className="w-16">2 stars</span>
                    <div className="flex-grow h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-yellow-400 h-full rounded-full" style={{width: "3%"}}></div>
                    </div>
                    <span className="w-8 text-right">3%</span>
                  </div>
                  <div className="flex items-center text-xs">
                    <span className="w-16">1 star</span>
                    <div className="flex-grow h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-yellow-400 h-full rounded-full" style={{width: "3%"}}></div>
                    </div>
                    <span className="w-8 text-right">3%</span>
                  </div>
                </div>
                
                {/* Top review highlight */}
                <div className="mt-3 p-2 bg-gray-50 rounded-md border border-gray-100">
                  <div className="flex">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">Verified Purchase</span>
                  </div>
                  <p className="text-xs mt-1 italic">&apos;Easy to install and holds my 40-inch TV perfectly. The extending arm moves smoothly and stays in position. Great value for the price!&apos;</p>
                </div>
              </div>
            </div>
            
            {/* User message */}
            <div className="flex gap-3">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
                <User className="h-5 w-5 text-gray-600" />
              </div>
              <div className="flex flex-col max-w-[80%]">
                <div className="text-sm font-medium">You</div>
                <div className="text-sm mt-1 text-gray-800">
                  Compare this to similar products
                </div>
              </div>
            </div>
            
{/* Assistant message with comparison graph */}
<div className="flex gap-3">
    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-amber-400 flex items-center justify-center">
    <ShoppingCart className="h-5 w-5 text-black" />
  </div>
  <div className="flex flex-col max-w-[90%]">
    <div className="text-sm font-medium">Product Assistant</div>
    <div className="text-sm mt-1 text-gray-800">
      Here&apos;s how this mount compares to similar products:
    </div>
    
    {/* Bar chart - Improved styling */}
    <div className="mt-3 bg-white rounded-lg border border-gray-200 p-2">
      <div className="text-xs font-medium mb-2">Price Comparison</div>
      <div className="relative h-40">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-6 w-8 flex flex-col justify-between items-end pr-1">
          <span className="text-xs text-gray-500">$50</span>
          <span className="text-xs text-gray-500">$40</span>
          <span className="text-xs text-gray-500">$30</span>
          <span className="text-xs text-gray-500">$20</span>
          <span className="text-xs text-gray-500">$10</span>
        </div>
        
        {/* Grid lines */}
        <div className="absolute left-8 right-0 top-0 bottom-6 flex flex-col justify-between">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="border-b border-gray-100 w-full"></div>
          ))}
        </div>
        
        {/* Bars */}
        <div className="absolute left-10 right-2 bottom-6 top-0 flex items-end justify-around">
          <div className="flex flex-col items-center">
            <div className="w-12 bg-gradient-to-t from-amber-500 to-amber-300 rounded-t-md shadow-sm" style={{height: "40%"}}>
              <div className="text-xs text-center font-medium text-white py-1">$19.99</div>
            </div>
            <div className="mt-1 text-xs bg-amber-100 px-1 py-1 rounded-md">This Product</div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 bg-gradient-to-t from-blue-500 to-blue-300 rounded-t-md shadow-sm" style={{height: "60%"}}>
              <div className="text-xs text-center font-medium text-white py-1">$29.99</div>
            </div>
            <div className="mt-1 text-xs bg-gray-100 px-1 py-1 rounded-md">Basic Mount</div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 bg-gradient-to-t from-blue-500 to-blue-300 rounded-t-md shadow-sm" style={{height: "80%"}}>
              <div className="text-xs text-center font-medium text-white py-1">$39.99</div>
            </div>
            <div className="mt-1 text-xs bg-gray-100 px-1 py-1 rounded-md">Premium</div>
          </div>
          
          {/* <div className="flex flex-col items-center">
            <div className="w-12 bg-gradient-to-t from-blue-500 to-blue-300 rounded-t-md shadow-sm" style={{height: "95%"}}>
              <div className="text-xs text-center font-medium text-white py-1">$49.99</div>
            </div>
            <div className="mt-1 text-xs bg-gray-100 px-1 py-1 rounded-full">Pro Model</div>
          </div> */}
        </div>
      </div>
    </div>
    
    {/* Feature comparison - Improved styling */}
    <div className="mt-4">
      <div className="text-xs font-medium mb-2">Feature Comparison</div>
      <div className="grid grid-cols-2 gap-2">
        <div className="p-2 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200 shadow-sm">
          <div className="font-medium text-green-700 flex items-center text-xs">
            <ThumbsUp className="w-3 h-3 mr-1" />
            Advantages
          </div>
          <ul className="mt-1 space-y-1 text-xs text-gray-700">
            <li className="flex items-start">
              <div className="h-4 w-4 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0 mt-0.5 mr-1.5">
                <div className="h-2 w-2 rounded-full bg-white"></div>
              </div>
              <span>Lower price point ($10-30 savings)</span>
            </li>
            <li className="flex items-start">
              <div className="h-4 w-4 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0 mt-0.5 mr-1.5">
                <div className="h-2 w-2 rounded-full bg-white"></div>
              </div>
              <span>Smoother articulation mechanism</span>
            </li>
            <li className="flex items-start">
              <div className="h-4 w-4 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0 mt-0.5 mr-1.5">
                <div className="h-2 w-2 rounded-full bg-white"></div>
              </div>
              <span>All necessary hardware included</span>
            </li>
            <li className="flex items-start">
              <div className="h-4 w-4 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0 mt-0.5 mr-1.5">
                <div className="h-2 w-2 rounded-full bg-white"></div>
              </div>
              <span>Easier installation process</span>
            </li>
          </ul>
        </div>
        
        <div className="p-2 bg-gradient-to-br from-red-50 to-red-100 rounded-lg border border-red-200 shadow-sm">
          <div className="font-medium text-red-700 flex items-center text-xs">
            <ThumbsUp className="w-3 h-3 mr-1 transform rotate-180" />
            Limitations
          </div>
          <ul className="mt-1 space-y-1 text-xs text-gray-700">
            <li className="flex items-start">
              <div className="h-4 w-4 rounded-full bg-red-400 flex items-center justify-center flex-shrink-0 mt-0.5 mr-1.5">
                <div className="h-2 w-2 rounded-full bg-white"></div>
              </div>
              <span>Weight capacity limited to 44 lbs</span>
            </li>
            <li className="flex items-start">
              <div className="h-4 w-4 rounded-full bg-red-400 flex items-center justify-center flex-shrink-0 mt-0.5 mr-1.5">
                <div className="h-2 w-2 rounded-full bg-white"></div>
              </div>
              <span>Fewer VESA pattern options</span>
            </li>
            <li className="flex items-start">
              <div className="h-4 w-4 rounded-full bg-red-400 flex items-center justify-center flex-shrink-0 mt-0.5 mr-1.5">
                <div className="h-2 w-2 rounded-full bg-white"></div>
              </div>
              <span>3-year warranty vs 5-year competitors</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
              
              {/* User message */}
              <div className="flex gap-3">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
                  <User className="h-5 w-5 text-gray-600" />
                </div>
                <div className="flex flex-col max-w-[80%]">
                  <div className="text-sm font-medium">You</div>
                  <div className="text-sm mt-1 text-gray-800">
                    Show me the specifications
                  </div>
                </div>
              </div>
              
              {/* Assistant message with specifications */}
              <div className="flex gap-3">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-amber-400 flex items-center justify-center">
                  <ShoppingCart className="h-5 w-5 text-black" />
                </div>
                <div className="flex flex-col max-w-[90%]">
                  <div className="text-sm font-medium">Product Assistant</div>
                  <div className="text-sm mt-1 text-gray-800">
                    Here are the detailed specifications:
                  </div>
                  
                  {/* Specifications table */}
                  <div className="mt-2 border border-gray-200 rounded-md overflow-hidden">
                    <table className="w-full text-xs">
                      <tbody>
                        <tr className="bg-gray-50">
                          <td className="p-2 font-medium border-b border-gray-200">Compatible TV Sizes</td>
                          <td className="p-2 border-b border-gray-200">15-42 inches</td>
                        </tr>
                        <tr>
                          <td className="p-2 font-medium border-b border-gray-200">Weight Capacity</td>
                          <td className="p-2 border-b border-gray-200">Up to 44 lbs</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="p-2 font-medium border-b border-gray-200">VESA Compatibility</td>
                          <td className="p-2 border-b border-gray-200">75x75mm to 200x200mm</td>
                        </tr>
                        <tr>
                          <td className="p-2 font-medium border-b border-gray-200">Extension Range</td>
                          <td className="p-2 border-b border-gray-200">2.2&apos; - 14.5&apos; from wall</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="p-2 font-medium border-b border-gray-200">Tilt Range</td>
                          <td className="p-2 border-b border-gray-200">+5° to -15°</td>
                        </tr>
                        <tr>
                          <td className="p-2 font-medium border-b border-gray-200">Swivel Range</td>
                          <td className="p-2 border-b border-gray-200">180°</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="p-2 font-medium border-b border-gray-200">Material</td>
                          <td className="p-2 border-b border-gray-200">Steel with black finish</td>
                        </tr>
                        <tr>
                          <td className="p-2 font-medium">Warranty</td>
                          <td className="p-2">3 years</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  {/* Installation diagram */}
                  <div className="mt-3 bg-gray-50 p-2 rounded-md">
                    <div className="text-xs font-medium mb-2">Installation Overview</div>
                    <div className="relative w-full bg-white rounded border border-gray-200">
                      <img
                        src="https://m.media-amazon.com/images/I/61ILg79hCBL._AC_SX679_.jpg"
                        alt="Installation diagram"
                        className="object-contain p-2"
                      />
                    <div className="text-xs mt-2 p-3 text-gray-600">
                      <strong>Easy 3-Step Installation:</strong><br />
                      1. Mount wall plate<br />
                      2. Attach TV plate<br />
                      3. Hang and secure
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Input area */}
            <div className="p-3 border-t">
              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <input 
                    type="text" 
                    placeholder="Message Product Assistant..." 
                    className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
                <Button className="bg-amber-400 hover:bg-amber-500 text-black">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <div className="text-xs text-center text-gray-500 mt-2">
                Product Assistant may display inaccurate info. Verify before purchase.
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
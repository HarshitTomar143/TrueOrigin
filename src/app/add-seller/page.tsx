'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function AddSellerPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminKey, setAdminKey] = useState('');
  const [adminError, setAdminError] = useState('');
  
  const [form, setForm] = useState({
    product_name: '',
    seller_name: '',
    cost: '',
    sell_from: '',
    estimated_time_to_arrive: ''
  });

  const [message, setMessage] = useState('');

  const handleAdminKeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple admin key check - you can change this to any key you prefer
    if (adminKey === 'admin123') {
      setIsAuthenticated(true);
      setAdminError('');
    } else {
      setAdminError('Invalid admin key. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const costValue = parseFloat(form.cost);
    if (isNaN(costValue)) {
      setMessage('Cost must be a valid number');
      return;
    }

    const { error } = await supabase.from('seller_details').insert([
      {
        ...form,
        cost: costValue
      }
    ]);

    if (error) {
      console.error(error);
      setMessage('Failed to add seller.');
    } else {
      setMessage('Seller added successfully!');
      setForm({
        product_name: '',
        seller_name: '',
        cost: '',
        sell_from: '',
        estimated_time_to_arrive: ''
      });
    }
  };

  const handleGoBack = () => {
    router.push('/home');
  };

  // Admin Key Form
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col relative">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/royal.png')" }} />
          <div className="absolute inset-0 bg-gradient-to-br from-[#667eea]/20 via-[#764ba2]/20 to-[#f093fb]/20" />
        </div>
        
        <div className="flex flex-col items-center justify-center mt-5 p-4 relative z-10">
          <div className="w-full max-w-md">
            <div className="transform transition-all duration-300 hover:scale-105">
              <div className="flex flex-col items-center justify-center gap-4 font-medium bg-white h-full w-full rounded-2xl border border-emerald-200 shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-emerald-800 mb-2">Admin Authentication</h2>
                  <p className="text-gray-600">Enter admin key to access seller management</p>
                </div>
                
                <form onSubmit={handleAdminKeySubmit} className="w-full space-y-4">
                  <div>
                    <input
                      type="password"
                      value={adminKey}
                      onChange={(e) => setAdminKey(e.target.value)}
                      placeholder="Enter Admin Key"
                      className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  {adminError && (
                    <p className="text-red-600 text-sm">{adminError}</p>
                  )}
                  
                  <div className="space-y-3">
                    <button 
                      type="submit" 
                      className="w-full py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-300 cursor-pointer font-medium"
                    >
                      Verify Admin Key
                    </button>
                    
                    <button 
                      type="button"
                      onClick={handleGoBack}
                      className="w-full py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-300 cursor-pointer font-medium"
                    >
                      Go Back
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Add Seller Form (only shown after admin authentication)
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/royal.png')" }} />
        <div className="absolute inset-0 bg-gradient-to-br from-[#667eea]/20 via-[#764ba2]/20 to-[#f093fb]/20" />
      </div>
      
      <div className="flex flex-col items-center justify-center mt-5 p-4 relative z-10">
        <div className="w-full max-w-2xl">
          <div className="transform transition-all duration-300 hover:scale-105">
            <div className="flex flex-col items-center justify-center gap-4 font-medium bg-white h-full w-full rounded-2xl border border-emerald-200 shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-emerald-800 mb-2">Add Seller Details</h2>
                <p className="text-gray-600">Enter seller information to add to the database</p>
              </div>
              
              <form onSubmit={handleSubmit} className="w-full space-y-4">
                <input
                  type="text"
                  name="product_name"
                  value={form.product_name}
                  onChange={handleChange}
                  placeholder="Product Name"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  required
                />
                <input
                  type="text"
                  name="seller_name"
                  value={form.seller_name}
                  onChange={handleChange}
                  placeholder="Seller Name"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  required
                />
                <input
                  type="text"
                  name="cost"
                  value={form.cost}
                  onChange={handleChange}
                  placeholder="Cost"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  required
                />
                <input
                  type="text"
                  name="sell_from"
                  value={form.sell_from}
                  onChange={handleChange}
                  placeholder="Sell From (Location)"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  required
                />
                <input
                  type="text"
                  name="estimated_time_to_arrive"
                  value={form.estimated_time_to_arrive}
                  onChange={handleChange}
                  placeholder="Estimated Time to Arrive"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
                
                <div className="space-y-3">
                  <button 
                    type="submit" 
                    className="w-full py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-300 cursor-pointer font-medium"
                  >
                    Submit
                  </button>
                  
                  <button 
                    type="button"
                    onClick={handleGoBack}
                    className="w-full py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-300 cursor-pointer font-medium"
                  >
                    Go Back
                  </button>
                </div>
              </form>
              
              {message && (
                <div className="w-full mt-4 p-3 rounded-lg bg-emerald-50 border border-emerald-200">
                  <p className="text-emerald-800 text-center">{message}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

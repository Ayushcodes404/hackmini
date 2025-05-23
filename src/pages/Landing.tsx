
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import LoadingScreen from '@/components/LoadingScreen';

const Landing = () => {
  const [loading, setLoading] = useState(true);
  // Remove firstTextComplete state
  const navigate = useNavigate();

  const handleLoadComplete = () => {
    setLoading(false);
  };

  const handleEnterSite = () => {
    navigate('/info');
  };

  return (
    <>
      {loading ? (
        <LoadingScreen onLoadComplete={handleLoadComplete} />
      ) : (
        <div className="min-h-screen flex flex-col">
          <div className="flex-grow flex flex-col items-center justify-center bg-dot-pattern">
            <div className="w-full max-w-lg mb-8">
              <div className="p-8 border-2 border-black rotate-3 transition-transform duration-700 hover:rotate-0 flex items-center justify-center">
                <div className="p-8 border-2 border-black -rotate-2 transition-transform duration-700 hover:rotate-0">
                  <h2 className="text-2xl md:text-3xl lg:text-2xl font-bold">
                    LEARN CODE CREATE
                  </h2>
                </div>
              </div>
            </div>
            
            <div className="text-center px-4 mt-8">
              <h1 className="text-5xl md:text-6xl font-extrabold text-black">
                <span>Mini </span>
                <span className="text-primary">Hackathon</span>
              </h1>
              <p className="mt-4 text-xl text-black/70">
                Innovation starts here. Join us for 6 hours of coding, learning, and solving.
              </p>
              
              <div className="mt-10">
                <Button 
                  size="lg" 
                  className="rounded-md shadow px-8 py-6 text-lg bg-black text-white hover:bg-black/80"
                  onClick={handleEnterSite}
                >
                  Enter Site
                </Button>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-sm text-black/50">May 12 and 14, 2025 • S G Balekundri Institute of Technology</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Landing;

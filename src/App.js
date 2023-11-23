import { useState, useEffect } from 'react';
import LandingPage from "./pages/landing-page";
import Logo from './assets/BezalLogo.png';

function App() {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    // Hide the animation after 2 seconds
    const animationTimeout = setTimeout(() => {
      setShowAnimation(false);
    }, 2000);

    // Don't show the animation again after 2 seconds
    const hideAnimationTimeout = setTimeout(() => {
      setShowAnimation(false);
    }, 2000);

    // Clear the timeouts to avoid memory leaks
    return () => {
      clearTimeout(animationTimeout);
      clearTimeout(hideAnimationTimeout);
    };
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  return (
    <div className="App w-full h-[100vh]">
      {showAnimation && (
        <div className="w-full animation h-[100vh] absolute z-10 flex justify-center items-center bg-black">
          <img src={Logo} alt='logo' className="w-[50%] animate-ping" />
        </div>
      )}
      <LandingPage />
    </div>
  );
}

export default App;

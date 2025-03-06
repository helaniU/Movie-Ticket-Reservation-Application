import React, { useEffect } from 'react';

function Home() {
  useEffect(() => {
    window.location.href = '/main.html'; // Automatically redirects to main.html
  }, []);

  return null; // No need to render anything in the component
}

export default Home;

import React, { useState, useEffect } from 'react';

function App() {
  const [currentText, setCurrentText] = useState("GPT-Assisted");
  const phrases = ["GPT-Asistido", "IA Generativa", "Visión Computacional"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      setCurrentText(phrases[currentIndex]);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className='flex flex-col p-5'>
      <section className='min-h-screen flex flex-col'>
        <nav className='flex items-center justify-between p-2'>
          <div className='flex items-center'>
            <img src='src/assets/Heyaylogo.png' alt='Logo' className='w-6 h-6 mr-2'></img>
            <h1 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 'bold', color: 'white' }}>HEYAY LABS</h1>
          </div>

          <div className='layout_navItem__pwCs9 flex items-center'>
            <a href='https://www.instagram.com/heyaylabs' className='flex items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-instagram" viewBox="0 0 16 16" style={{ marginRight: '5px' }}>
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
              <span style={{ color: 'white' }}>Instagram</span>
            </a>
          </div>
        </nav>

        <main className='p-20 flex flex-col gap-3 text-center sm:gap-4 justify-center pb-20'>
          <div>
            <h1 style={{
              display: 'block',
              fontFamily: '-apple-system, sans-serif',
              height: '80px',
              lineHeight: '80px',
              textAlign: 'center',
              width: '100%',
            }}>
              
              <div style={{
                color:'white',
                fontSize: '80px',
                fontWeight: '700',
                letterSpacing: '-2px',
                }}>Inteligencia Artificial Aplicada</div>
              <div style={{fontSize: '80px',fontWeight: '700', letterSpacing: '-2px',}} className='bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-500'>{currentText}</div>
              <h2>
              <div style={{
                color:'white',
                fontSize: '40px',
                fontWeight: '600',
                letterSpacing: '-1px'
                }}>Simplifica. Potencia. Transforma.</div>
              </h2>
              <h3>
              <div style={{
                textAlign: 'center',
                color: 'white',
                display: 'block',
                fontSize: '18px',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.4',


              }}>
                Implementa los mejores modelos de Inteligencia Artificial en tu negocio. Potencia tu futuro y simplifica la complejidad.
              </div>
              </h3>
              </h1>

  
          </div>
        </main>
      </section>
      <footer>
      </footer>
    </div>
  );
}

export default App;


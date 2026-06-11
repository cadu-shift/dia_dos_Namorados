import { lazy, Suspense, useEffect } from 'react'

const GiftHome = lazy(() => import('../features/gift/GiftHome'))

function App() {
  useEffect(() => {
    if (!window.location.hash || window.location.hash === '#') {
      window.location.hash = '#/home'
    }
  }, [])

  const hash = window.location.hash

  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen text-white">Carregando...</div>}>
      {hash === '#/home' ? <GiftHome /> : (
        <div className="flex items-center justify-center min-h-screen text-white">
          <a href="#/home" className="text-lg underline">Ir para o presente</a>
        </div>
      )}
    </Suspense>
  )
}

export default App

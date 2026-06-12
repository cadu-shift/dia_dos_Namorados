import { lazy, Suspense, useEffect, useState } from 'react'

const GiftHome = lazy(() => import('../features/gift/GiftHome'))

function App() {
  const [hash, setHash] = useState(window.location.hash)

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash)
    }

    window.addEventListener('hashchange', handleHashChange)

    if (!window.location.hash || window.location.hash === '#') {
      window.location.hash = '#/home'
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen text-[#1B4F5C]">Carregando...</div>}>
      {hash === '#/home' ? <GiftHome /> : (
        <div className="flex items-center justify-center min-h-screen text-[#1B4F5C]">
          <a href="#/home" className="text-lg underline">Ir para o presente</a>
        </div>
      )}
    </Suspense>
  )
}

export default App

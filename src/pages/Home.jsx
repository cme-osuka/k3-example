import React from 'react'
import { useAccessDenied } from '../hooks/useAccessDenied'

function Home() {
  useAccessDenied();

  return (
    <div>Home</div>
  )
}

export default Home
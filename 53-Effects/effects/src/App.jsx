import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import QuoteFetcher from './QuoteFetcher'
import QuoteFetcherLoader from './QuoteFetcherLoader'
import ProfileSearchForm from './ProfileSearchForm'
import ProfileViewerWithSearch from './ProfileViewerWithSearch'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Counter/> */}
      {/* <QuoteFetcher/> */}
      {/* <QuoteFetcherLoader/> */}
      {/* <ProfileSearchForm/> */}
      <ProfileViewerWithSearch/>
    </>
  )
}

export default App

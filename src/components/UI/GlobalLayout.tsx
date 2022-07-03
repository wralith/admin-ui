import { useState } from 'react'
import Breadcrumbs from './Breadcrumbs'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

function GlobalLayout(props: any) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true)
  
  function handleSideBar() {
    setIsSideBarOpen(!isSideBarOpen)
  }

  return (
    <div className="flex">
      <Sidebar isOpen={isSideBarOpen} />
      <div className="flex flex-col w-full">
        <Navbar handleSideBar={handleSideBar}/>
        <Breadcrumbs />
        <div className='min-h-[89.7vh]'>{props.children}</div>
      </div>
    </div>
  )
}

export default GlobalLayout

function Navbar(props: any) {


  return (
    <nav className="navbar bg-base-content text-base-200 py-3 h-10 border-base-100/50 border-b">
      <div className="flex-none">
        <button className="btn btn-square btn-ghost hover:bg-secondary" onClick={props.handleSideBar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div className="flex-1 flex gap-5 px-5">
        <a href="#">Documentation</a>
        <a href="#">Something Else</a>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost hover:bg-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
          </svg>
        </button>
      </div>
      <div className="avatar flex-none px-4">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/192/192/people" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar

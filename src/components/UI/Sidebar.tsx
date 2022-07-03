import { Link } from 'react-router-dom'

interface SidebarItemType {
  content: string
  href?: string
}

function Sidebar(props: any) {
  if (props.isOpen == true) {
    return (
      <aside className="w-60" aria-label="Sidebar">
        <div className="sidebar">
          <ul>
            <SideBarBrand />
            <SideBarItem content="Login" href="login" />
            <SideBarItem content="Dashboard" />
            <SideBarItem content="Users" href="users" />
            <SideBarItem content="Endpoint" />
            <SideBarItem content="Database" />
            <SideBarItem content="Metrics" />
            <SideBarItem content="Performance" />
          </ul>
        </div>
      </aside>
    )
  } else {
    return <></>
  }
}

function SideBarItem(props: SidebarItemType) {
  return (
    <li className="sidebar-item">
      <Link to={props.href || '/'}>
        <a>
          <span>{props.content}</span>
        </a>
      </Link>
    </li>
  )
}
function SideBarBrand() {
  return (
    <li className="sidebar-item py-6 pb-8 bg-secondary">
      <Link to="/">
        <a>
          <span className=" text-xl text-primary font-semibold">Wra</span>
        </a>
      </Link>
    </li>
  )
}

// TODO: Error related with min-height:3.75rem. Need to overwrite!
// function CollapseSideBarItem(props: any) {
//   return (
//     <div className="collapse">
//       <input type="checkbox" />
//       <div className="collapse-title p-0">
//         <SideBarItem content={props.title} />
//       </div>
//       <div className="collapse-content p-0 pl-4">
//         <SideBarItem content={">  " + props.menuItems} />
//       </div>
//     </div>
//   )
// }

export default Sidebar

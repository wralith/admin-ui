import useBreadcrumbs from "use-react-router-breadcrumbs"
import { Link } from 'react-router-dom'

// Custom Breadcrumbs maybe Icons?? -> routes as a parameter for useBreadcrumbs hook
// const routes = [
//   { path: "/", breadcrumb: "Home" },
// ]

function Breadcrumbs() {
  const breadcrumbs = useBreadcrumbs()

  return (
    <div className="text-sm breadcrumbs pl-5 bg-base-content text-base-300">
      <ul>
        {breadcrumbs.map(({ match, breadcrumb }) => (
          <li>
            <Link to={match.pathname}>{breadcrumb}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Breadcrumbs

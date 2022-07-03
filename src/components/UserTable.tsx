interface UserTableItem {
  id: number
  name: string
  role: string
  email: string
  status: string
}

// TODO: Replace with dynamic data
const dummyUsers: UserTableItem[] = [
  {
    id: 1,
    name: 'Victor Hugo',
    role: 'Quality Control Specialist',
    email: 'hugo@mail.com',
    status: 'Online',
  },
  {
    id: 2,
    name: 'Charles Baudelaire',
    role: 'Flight Support Technician',
    email: 'baudelaire@charles.net',
    status: 'Offline',
  },
  {
    id: 3,
    name: 'Honoré de Balzac',
    role: 'Father of Two',
    email: 'father@balzac.com',
    status: 'Offline',
  },
]

function UserTable() {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Role</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {dummyUsers.map(user => (
            <tr key={user.id}>
              <th>{user.id}</th>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.email}</td>
              <td>{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserTable

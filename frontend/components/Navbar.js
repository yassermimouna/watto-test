import Link from 'next/link'
//import { signIn, signOut, useSession } from 'next-auth/client'

function Navbar() {
  
  return (
    <nav className='header'>
      <h1 className='logo'>
        <a href='#'>Welcome</a>
      </h1>
      <ul >
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/login'>
            <a>Login</a>
          </Link>
        </li>
        <li>
          <Link href='/car'>
            <a>Cars List</a>
          </Link>
        </li>

        {(
          <li>
            <Link href='/api/auth/signin'>
              <a
                onClick={e => {
                  e.preventDefault()
                  signIn('Login')
                }}>
                Sign In
              </a>
            </Link>
          </li>
        )}
        { (
          <li>
            <Link href='/api/auth/signout'>
              <a
                onClick={e => {
                  e.preventDefault()
                  signOut()
                }}>
                Sign Out
              </a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
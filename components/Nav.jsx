import Link from 'next/link'

const Nav = () => {
  return (
    <nav className="nav pt-3 border-bottom">
      <Link href="/" passHref>
        <h2 className="pointer" >Daniel Loos</h2>
      </Link>
    </nav>
  )
}

export default Nav

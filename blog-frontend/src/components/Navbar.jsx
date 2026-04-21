import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const navLinkClass = ({ isActive }) =>
  isActive
    ? 'text-slate-900 font-semibold border-b-2 border-slate-900 pb-1'
    : 'text-slate-600 hover:text-slate-900 transition'

export default function Navbar() {
  const { cartCount } = useCart()

  return (
    <header className="sticky top-0 z-30 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link to="/" className="text-xl font-semibold tracking-tight text-slate-900">
          E-Shop Lite
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <NavLink to="/" className={navLinkClass} end>
            Home
          </NavLink>
          <NavLink to="/categories" className={navLinkClass}>
            Categories
          </NavLink>
          <NavLink to="/products" className={navLinkClass}>
            Products
          </NavLink>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/cart"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
          >
            <span className="text-lg">🛒</span>
            Cart
            {cartCount > 0 && (
              <span className="ml-1 inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-full bg-slate-900 px-2 text-xs font-semibold text-white">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  )
}

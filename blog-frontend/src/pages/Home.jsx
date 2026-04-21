import { Link } from 'react-router-dom'
import { categories, products } from '../data'
import ProductCard from '../components/ProductCard'

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-16 pt-10 md:px-6">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-slate-600">
            New collection
          </span>
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Modern essentials for a fresh and polished online shopping experience.
          </h1>
          <p className="max-w-xl text-base leading-8 text-slate-600">
            Discover curated products across electronics, fashion, home, and beauty. Shop with confidence using a clean, responsive interface.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800"
            >
              Shop Now
            </Link>
            <Link
              to="/categories"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              Browse Categories
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] bg-slate-100 p-8 shadow-sm lg:p-10">
          <div className="space-y-5">
            <div className="rounded-[1.75rem] bg-white p-6 shadow-sm">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Trending picks</p>
                <h2 className="text-2xl font-semibold text-slate-900">Minimal designs for everyday living</h2>
                <p className="text-sm leading-6 text-slate-600">
                  We help customers find the right products with balanced visuals, clean cards, and natural spacing.
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-50 p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Fast delivery</p>
                <p className="mt-3 text-sm text-slate-600">Receive orders quickly with secure checkout and easy returns.</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Expert support</p>
                <p className="mt-3 text-sm text-slate-600">Shop with confidence using 24/7 customer support and modern product filters.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Categories</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Featured Categories</h2>
          </div>
          <Link
            to="/categories"
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
          >
            View All
          </Link>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {categories.slice(0, 4).map((category) => (
            <div key={category.id} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <img src={category.image} alt={category.name} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-slate-900">{category.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Products</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Top Picks</h2>
          </div>
          <Link
            to="/products"
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
          >
            View All Products
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.slice(0, 8).map((product) => {
            const category = categories.find((item) => item.id === product.category_id)
            return (
              <ProductCard key={product.id} product={product} categoryName={category?.name} />
            )
          })}
        </div>
      </section>
    </main>
  )
}

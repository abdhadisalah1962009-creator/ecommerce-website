import { categories, products } from '../data'
import ProductCard from '../components/ProductCard'

export default function Products() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-16 pt-10 md:px-6">
      <section className="space-y-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">All products</p>
          <h1 className="mt-2 text-4xl font-semibold text-slate-900">Find the product you love</h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
            Browse the full collection of electronics, fashion, home, and beauty essentials curated for a polished shopping experience.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => {
            const category = categories.find((item) => item.id === product.category_id)
            return <ProductCard key={product.id} product={product} categoryName={category?.name} />
          })}
        </div>
      </section>
    </main>
  )
}

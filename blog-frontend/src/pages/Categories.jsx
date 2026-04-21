import { categories } from '../data'

export default function Categories() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-16 pt-10 md:px-6">
      <section className="space-y-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Browse all</p>
          <h1 className="mt-2 text-4xl font-semibold text-slate-900">Shop by category</h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
            Explore every product category in our curated store. Find beautifully designed products with a modern shopping experience.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <article
              key={category.id}
              className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <img src={category.image} alt={category.name} className="h-60 w-full object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-slate-900">{category.name}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{category.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

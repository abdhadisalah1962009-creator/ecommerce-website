import { useCart } from '../context/CartContext'

export default function ProductCard({ product, categoryName }) {
  const { addToCart } = useCart()

  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="overflow-hidden bg-slate-100">
        <img
        src={`https://ecommerce-backend-vbv3.onrender.com/storage/${product.image}`}
          alt={product.name}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.24em] text-slate-500">
          <span>{categoryName || 'Category'}</span>
          <span className="text-slate-900 font-semibold">${product.price}</span>
        </div>
        <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
        <p className="text-sm leading-6 text-slate-600">{product.description}</p>
        <button
          type="button"
          onClick={() => addToCart(product)}
          className="mt-3 inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Add to cart
        </button>
      </div>
    </article>
  )
}
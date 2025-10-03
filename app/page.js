import { products } from '@/data/products';
import ProductCard from '../components/ProductCard';
import ThemeToggle from '../components/ThemeToggle';

export default async function Home() {



  return (
    <main className="min-h-screen p-8 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-black">
      <h1 className="text-3xl font-extrabold text-center mb-10 text-gray-900 dark:text-gray-100">
        Featured Products
      </h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <ThemeToggle />
    </main>
  );
}

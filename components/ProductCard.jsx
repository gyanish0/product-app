'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProductCard({ product }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative bg-white dark:bg-gray-800 shadow-md hover:shadow-lg rounded-lg overflow-hidden flex flex-col w-full max-w-xs mx-auto transition-colors duration-300"
        >
            {product.inStock === false && (
                <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded z-10">
                    Out of Stock
                </span>
            )}
            {product.sale && (
                <span className="absolute top-2 right-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded z-10">
                    Sale
                </span>
            )}

            <div className="relative h-48 w-full">
                <Image
                    src={product.image}
                    alt={product.title}
                    fill="true"
                    className="object-cover"
                />
            </div>

            <div className="p-4 flex flex-col flex-1">
                <h2 className="text-center font-bold text-lg text-gray-900 dark:text-gray-100">
                    {product.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 flex-1">
                    {product.description}
                </p>

                <div className="mt-4">
                    <button
                        disabled={!product.inStock}
                        className={`w-full py-2 rounded-md text-white font-semibold transition-colors
              ${product.inStock ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'}`}
                        aria-label={`View more about ${product.title}`}
                    >
                        {product.inStock ? 'View More' : 'Out of Stock'}
                    </button>
                </div>
            </div>
        </motion.div>
    );
}

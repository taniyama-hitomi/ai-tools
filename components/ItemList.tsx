"use client";

import { useEffect, useState } from "react";
import { Item } from "@/app/page";

interface ItemListProps {
  items: Item[];
  onDeleteItem: (id: number) => void;
}

export default function ItemList({ items, onDeleteItem }: ItemListProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Items List
      </h2>

      {items.length === 0 ? (
        <div className="text-center py-12">
          <svg 
            className="mx-auto h-12 w-12 text-gray-400" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
            />
          </svg>
          <p className="mt-4 text-gray-500">No items yet. Add your first item!</p>
        </div>
      ) : (
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {items.map((item) => (
            <div 
              key={item.id}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.name}
                </h3>
                <button
                  onClick={() => onDeleteItem(item.id)}
                  className="text-red-600 hover:text-red-800 transition-colors"
                  aria-label="Delete item"
                >
                  <svg 
                    className="h-5 w-5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" 
                    />
                  </svg>
                </button>
              </div>
              <p className="text-gray-600 mb-2">{item.description}</p>
              <p className="text-xs text-gray-400">
                Added: {item.createdAt.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

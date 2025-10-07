"use client";

import { useState } from "react";
import ItemForm from "@/components/ItemForm";
import ItemList from "@/components/ItemList";

export interface Item {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
}

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);

  const handleAddItem = (name: string, description: string) => {
    const newItem: Item = {
      id: Date.now(),
      name,
      description,
      createdAt: new Date(),
    };
    setItems([newItem, ...items]);
  };

  const handleDeleteItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            AI Tools - Item Manager
          </h1>
          <p className="text-lg text-gray-600">
            Add and manage your items with ease
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <ItemForm onAddItem={handleAddItem} />
          </div>
          
          <div>
            <ItemList items={items} onDeleteItem={handleDeleteItem} />
          </div>
        </div>
      </div>
    </main>
  );
}

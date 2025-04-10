'use client'

import { TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Category, CategoryTabsProps } from '@/types/components/UnitConverter/unit-converter'

export function CategoryTabs({ 
    categories,
    activeCategory,
    onCateGoryChange
}: CategoryTabsProps) {
    return (
        <TabsList className='grid grid-cols-4 mb-6'>
            {categories.map((category: Category) => (
                <TabsTrigger
                    key={category.id}
                    value={category.id}
                    onClick={() => onCateGoryChange(category.id)}
                    className={`rounded-md text-sm font-medium py-2 px-4 ${activeCategory === category.id ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                    {category.name}
                </TabsTrigger>
            ))}
        </TabsList>
    )
}
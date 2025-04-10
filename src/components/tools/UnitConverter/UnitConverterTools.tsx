'use client';

import { CategoryTabs } from "./CategoryTabs";
import { UnitConverter } from "./UnitConverter";
import { categories } from "@/constants/UnitConverter/unit-converter";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent } from '@/components/ui/tabs';

export function UnitConverterTools() {
    const [activeCategory, setActiveCategory] = useState<string>(categories[0].id);

    const handleCategoryChange = (categoryId: string) => {
        setActiveCategory(categoryId);
    };

    return (
        <Card className="w-full max-w-3xl mx-auto">
            <CardHeader>
                <CardTitle className="text-2xl">単位変換ツール</CardTitle>
                <CardDescription>
                    様々な単位を簡単に変換できます。カテゴリーを選択して、変換したい値を入力してください。
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Tabs 
                    value={activeCategory}
                    onValueChange={setActiveCategory}
                    defaultValue={activeCategory}
                    className="w-full">
                        <CategoryTabs
                            categories={categories}
                            activeCategory={activeCategory}
                            onCateGoryChange={handleCategoryChange}
                        />
                        {categories.map((category) => (
                            <TabsContent key={category.id} value={category.id} className="space-y-6">
                                <UnitConverter category={category} />
                                <div className="text-sm text-muted-foreground mt-4">
                                    <p>※ この変換は一般的な換算率に基づいています。特殊な条件下での変換には適していない場合があります</p>
                                </div>
                            </TabsContent>
                        ))}
                </Tabs>
            </CardContent>
        </Card>
    )
}
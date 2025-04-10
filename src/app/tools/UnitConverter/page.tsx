import { UnitConverterTools } from "@/components/tools/UnitConverter/UnitConverterTools";

export const metadata = {
    title: '単位変換ツール | 便利ツール集',
    description: '長さ、重さ、温度などの単位を簡単に変換できるツールです。',
}

export default function UnitConverterPage() {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-6 text-center">単位変換ツール</h1>
            <UnitConverterTools/>
        </div>
    )
}
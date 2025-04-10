import { Category } from "@/types/components/UnitConverter/unit-converter";
import { formatNumber } from "../../utils";

export function ConvertUnitValue(
    value: string,
    fromUnitId: string,
    toUnitId: string,
    category: Category
): { result: string; error: string } {

    const numValue = parseFloat(value);

    if(isNaN(numValue)) {
        return { result: '', error: '有効な数値を入力してください' };
    }

    const fromUnit = category.units.find(unit => unit.id === fromUnitId);
    const toUnit = category.units.find(unit => unit.id === toUnitId);

    if (!fromUnit || !toUnit) {
        return { result: '', error: '無効な単位です' };
    }

    const baseValue = fromUnit.toBase(numValue);
    const resultValue = toUnit.fromBase(baseValue);

    const formattedResult = formatNumber(resultValue);

    return { result: formattedResult, error: '' };
}
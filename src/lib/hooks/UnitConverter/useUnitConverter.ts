import { useState, useEffect } from 'react'
import { Category } from '@/types/components/UnitConverter/unit-converter'
import { ConvertUnitValue } from '@/lib/utils/UnitConverter/unit-converter'

export function useUnitConverter(initialCategory: Category) {
    const [category, setCagegory] = useState<Category>(initialCategory)
    const [fromUnit, setFromUnit] = useState<string>(initialCategory.units[0].id)
    const [toUnit, setToUnit] = useState<string>(initialCategory.units[1].id)
    const [inputValue, setInputValue] = useState<string>('1')
    const [resultValue, setResultValue] = useState<string>('')
    const [error, setError] = useState<string>('')

    const convert = (value: string, from: string, to: string) => {
        const { result, error } = ConvertUnitValue(value, from, to, category)
        setResultValue(result)
        setError(error)
        return error;
    }

    useEffect(() => {
        setFromUnit(category.units[0].id)
        setToUnit(category.units[1].id)
        convert('1', category.units[0].id, category.units[1].id)
        setInputValue('1')
    }, [category])

    const swapUnits = () => {
        const currentFromUnit = fromUnit
        const currentToUnit = toUnit
        setFromUnit(currentToUnit)
        setToUnit(currentFromUnit)
        convert(inputValue, currentToUnit, currentFromUnit)
    }

    const changeCategory = (newCategory: Category) => {
        setCagegory(newCategory)
    }

    return {
        category,
        fromUnit,
        toUnit,
        inputValue,
        resultValue,
        error,
        setInputValue,
        setFromUnit,
        setToUnit,
        swapUnits,
        convert,
        changeCategory
    }
}

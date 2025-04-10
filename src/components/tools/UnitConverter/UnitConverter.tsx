'use cliet'

import { useForm } from '@tanstack/react-form';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { ArrowLeftRight } from 'lucide-react';
import { InputUnitField } from './InputUnitField';
import { UnitConverterFormProps } from '@/types/components/UnitConverter/unit-converter'
import { useUnitConverter } from '@/lib/hooks/UnitConverter/useUnitConverter';

export function UnitConverter({ category }: UnitConverterFormProps) {
    const {
        fromUnit,
        toUnit,
        inputValue,
        resultValue,
        error,
        setFromUnit,
        setToUnit,
        setInputValue,
        convert,
        swapUnits
    } = useUnitConverter(category);

    const from = useForm({
        defaultValues: {
            inputValue,
            fromUnit,
            toUnit,
            resultValue
        },
        onSubmit: ({ value }) => {
            console.log('Form Submitted', value);
        }
    })

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='space-y-2'>
                <Label htmlFor='from-value'>変換元の値</Label>
                <InputUnitField
                    id="from-value"
                    value={inputValue}
                    onChange={(unit) => {
                        setInputValue(unit);
                        convert(unit, fromUnit, toUnit);
                    }}
                    units={category.units}
                    selectedUnit={fromUnit}
                    onUnitChange={(unit) => {
                        setFromUnit(unit);
                        convert(inputValue, unit, toUnit);
                    }}
                    error={error}
                    placeholder='値を入力'
                />
                {error && <p className='text-red-500'>{error}</p>}
            </div>

            <div className='space-y-2'>
                <div className='flex items-center justify-between'>
                    <Label htmlFor='to-value'>変換結果</Label>
                    <Button
                        variant={"outline"}
                        size={"icon"}
                        type={"button"}
                        onClick={swapUnits}
                        title='単位を入れ替え'
                    >
                        <ArrowLeftRight className='h-4 w-4' />
                    </Button>
                </div>
                <InputUnitField
                    id="to-value"
                    value={resultValue}
                    readOnly={true}
                    units={category.units}
                    selectedUnit={toUnit}
                    onUnitChange={(unit) => {
                        setToUnit(unit);
                        convert(inputValue, fromUnit, unit);
                    }}
                />
            </div>
        </div>
    )
}
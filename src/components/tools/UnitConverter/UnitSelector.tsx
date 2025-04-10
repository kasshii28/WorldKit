'use client'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Unit, UnitSelectorProps } from '@/types/components/UnitConverter/unit-converter'

export function UnitSelector({
    units,
    selectedUnit,
    onUnitChange,
    className
}: UnitSelectorProps) {
    return (
        <Select onValueChange={onUnitChange} defaultValue={selectedUnit}>
            <SelectTrigger className={className}>
                <SelectValue placeholder='単位を選択' />
            </SelectTrigger>
            <SelectContent className='max-h-60 overflow-auto'>
                {units.map((unit: Unit) => (
                    <SelectItem key={unit.id} value={unit.id}>
                        {unit.name} ({unit.symbol})
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}
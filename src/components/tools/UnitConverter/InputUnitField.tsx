import { Input } from "@/components/ui/input";
import { UnitSelector } from "./UnitSelector";
import { cn } from "@/lib/utils";
import { InputUnitFieldProps } from "@/types/components/UnitConverter/unit-converter";

export function InputUnitField({
    id,
    value,
    onChange,
    units,
    selectedUnit,
    onUnitChange,
    error,
    readOnly,
    className,
    placeholder
}: InputUnitFieldProps){
    return (
        <div className="flex space-x-2">
            <Input
                id={id}
                type="text"
                inputMode={readOnly ? undefined : "decimal"}
                value={value}
                onChange={onChange ? (e) => onChange(e.target.value) : undefined}
                className={cn("flex-1", error && "border-red-500", readOnly && "bg-muted", className)}
                placeholder={placeholder}
                readOnly={readOnly}
            />
            <UnitSelector
                units={units}
                selectedUnit={selectedUnit}
                onUnitChange={onUnitChange}
            />
        </div>
    )
}
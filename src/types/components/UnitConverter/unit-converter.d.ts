import { categories } from '@/constants/UnitConverter/unit-converter';

export interface Unit {
    id: string;
    name: string
    symbol: string;
    toBase: (value: number) => number;
    fromBase: (value: number) => number;
}

export interface UnitSelectorProps {
    units: Unit[];
    selectedUnit: string;
    onUnitChange: (unitId: string) => void;
    className?: string;
}

export interface Category {
    id: string;
    name: string;
    units: Unit[];
}

export interface CategoryTabsProps {
    categories: Category[];
    activeCategory: string;
    onCateGoryChange: (categoryId: string) => void;
}

export interface InputUnitFieldProps {
    id: string;
    value: string;
    onChange?: (value: string) => void;
    units: Arrayy<{ id: string; name: string }>;
    selectedUnit: string;
    onUnitChange: (value: string) => void;
    error?: string;
    readOnly?: boolean;
    className?: string;
    placeholder?: string;
}

export interface UnitConverterFormProps {
    category: Category;
}
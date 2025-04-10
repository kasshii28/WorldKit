import { Unit, Category } from "@/types/components/UnitConverter/unit-converter";

export const lengthUnits: Unit[] = [
    {
      id: 'meter',
      name: 'メートル',
      symbol: 'm',
      toBase: (value) => value,
      fromBase: (value) => value,
    },
    {
      id: 'kilometer',
      name: 'キロメートル',
      symbol: 'km',
      toBase: (value) => value * 1000,
      fromBase: (value) => value / 1000,
    },
    {
      id: 'centimeter',
      name: 'センチメートル',
      symbol: 'cm',
      toBase: (value) => value / 100,
      fromBase: (value) => value * 100,
    },
    {
      id: 'millimeter',
      name: 'ミリメートル',
      symbol: 'mm',
      toBase: (value) => value / 1000,
      fromBase: (value) => value * 1000,
    },
    {
      id: 'mile',
      name: 'マイル',
      symbol: 'mi',
      toBase: (value) => value * 1609.344,
      fromBase: (value) => value / 1609.344,
    },
    {
      id: 'foot',
      name: 'フィート',
      symbol: 'ft',
      toBase: (value) => value * 0.3048,
      fromBase: (value) => value / 0.3048,
    },
    {
      id: 'inch',
      name: 'インチ',
      symbol: 'in',
      toBase: (value) => value * 0.0254,
      fromBase: (value) => value / 0.0254,
    },
  ];
  
  // 重さの単位
  export const weightUnits: Unit[] = [
    {
      id: 'kilogram',
      name: 'キログラム',
      symbol: 'kg',
      toBase: (value) => value,
      fromBase: (value) => value,
    },
    {
      id: 'gram',
      name: 'グラム',
      symbol: 'g',
      toBase: (value) => value / 1000,
      fromBase: (value) => value * 1000,
    },
    {
      id: 'milligram',
      name: 'ミリグラム',
      symbol: 'mg',
      toBase: (value) => value / 1000000,
      fromBase: (value) => value * 1000000,
    },
    {
      id: 'pound',
      name: 'ポンド',
      symbol: 'lb',
      toBase: (value) => value * 0.45359237,
      fromBase: (value) => value / 0.45359237,
    },
    {
      id: 'ounce',
      name: 'オンス',
      symbol: 'oz',
      toBase: (value) => value * 0.028349523125,
      fromBase: (value) => value / 0.028349523125,
    },
    {
      id: 'ton',
      name: 'トン',
      symbol: 't',
      toBase: (value) => value * 1000,
      fromBase: (value) => value / 1000,
    },
  ];
  
  // 容量の単位
  export const volumeUnits: Unit[] = [
    {
      id: 'liter',
      name: 'リットル',
      symbol: 'L',
      toBase: (value) => value,
      fromBase: (value) => value,
    },
    {
      id: 'milliliter',
      name: 'ミリリットル',
      symbol: 'mL',
      toBase: (value) => value / 1000,
      fromBase: (value) => value * 1000,
    },
    {
      id: 'cubic_meter',
      name: '立方メートル',
      symbol: 'm³',
      toBase: (value) => value * 1000,
      fromBase: (value) => value / 1000,
    },
    {
      id: 'gallon_us',
      name: 'ガロン (米)',
      symbol: 'gal',
      toBase: (value) => value * 3.78541178,
      fromBase: (value) => value / 3.78541178,
    },
    {
      id: 'pint_us',
      name: 'パイント (米)',
      symbol: 'pt',
      toBase: (value) => value * 0.473176473,
      fromBase: (value) => value / 0.473176473,
    },
    {
      id: 'cup',
      name: 'カップ',
      symbol: 'cup',
      toBase: (value) => value * 0.2365882365,
      fromBase: (value) => value / 0.2365882365,
    },
  ];
  
  // 温度の単位
  export const temperatureUnits: Unit[] = [
    {
      id: 'celsius',
      name: '摂氏',
      symbol: '°C',
      toBase: (value) => value,
      fromBase: (value) => value,
    },
    {
      id: 'fahrenheit',
      name: '華氏',
      symbol: '°F',
      toBase: (value) => (value - 32) * 5/9,
      fromBase: (value) => value * 9/5 + 32,
    },
    {
      id: 'kelvin',
      name: 'ケルビン',
      symbol: 'K',
      toBase: (value) => value - 273.15,
      fromBase: (value) => value + 273.15,
    },
  ];
  
  // カテゴリー定義
  export const categories: Category[] = [
    { id: 'length', name: '長さ', units: lengthUnits },
    { id: 'weight', name: '重さ', units: weightUnits },
    { id: 'volume', name: '容量', units: volumeUnits },
    { id: 'temperature', name: '温度', units: temperatureUnits },
  ];
  
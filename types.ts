export interface Storage {
    id: number;
    name: string;
    products: Product[];
}

export interface Recipe {
    id: number;
    name: string;
    kcalFullProduct: number;
    weightFullProduct: number;
    products: Product[];
}

export interface Product {
    id: number;
    name: string;
    kcalFullProduct: number;
    weightFullProduct: number;
    actualWeight: number;
    expirationDate: Date;
    boughtDate: Date;
}
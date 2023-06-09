export interface Product {
    userId: number;
    id: number;
    title: string;
    description: string;
}

export interface CartItem {
    product: Product;
    quantity: number;
}

export interface CarouselProps {
    images: string[] | any;
}

export interface ProductsState {
    products: Product[];
    loading: boolean;
    error: string | null;
    product: any;
}

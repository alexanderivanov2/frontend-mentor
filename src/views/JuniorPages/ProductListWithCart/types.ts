interface Product {
    id: number;
    image: {
        thumbnail: string;
        mobile: string;
        tablet: string;
        desktop: string;
    };
    name: string;
    category: string;
    price: number;
}

interface CartItemProduct {
    name: string;
    price: number;
    quantity: number;
    thumbnail: string
}

interface CartItems {
    [id:number]: CartItemProduct
}

export type { Product, CartItems, CartItemProduct }
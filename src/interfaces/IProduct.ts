export interface IProduct {
    id?: number,
    name: string,
    image?: string,
    imageUrls: string[],
    description: string,

    isPublished?: boolean,
    category: string,
    
    price: number,
    discount?: number,
    tax?: number, 

    productVariants?: IVariant[]
}

export interface IVariant {
    id: number,
    name: string,
    isPublished: boolean,
    productvariantoptions: IOption[]
}

export interface IOption {
    id: number,
    name: string,
    price: number,
    isPublished: boolean,
    isOutOfStock: boolean
}
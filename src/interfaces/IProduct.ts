export interface IProduct {
    id?: number,
    name: string,
    image?: string,
    imageUrls: string[],
    description: IDescription[],

    isPublished?: boolean,
    category: string,
    labels: string[],
    
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
    isOutOfStock: boolean,
    isDefault: boolean
}

export interface IDescription {
    id: number,
    title: string,
    content: string
}
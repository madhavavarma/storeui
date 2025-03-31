export interface IProduct {
    id?: number,
    name: string,
    image: string,
    description: string,

    isPublished?: boolean,
    
    price: number,
    discount?: number,
    tax?: number, 

    productVariants?: IProductVariant[],
    productCategories?: number[],
    productSubCategories?: number[],
    productMiniCategories?: number[],
    productTags?: number[]
}

export interface IProductVariant {
    productId?: number,
    variantId: number,
    isPublished: boolean,
    productvariantoptions: IProductVariantOption[]
}

export interface IProductVariantOption {
    optionId: number,
    price: number,
    isPublished: boolean
}







export interface Product {
    _id : string;
    name : string;
    _type : "products";
    image? : {
        asset : {
            _ref : string;
            _type : "image";
        };
    };
    price : number;
    description? : string;
    slug : {
        _type : "slug";
        current : string;
    };
    rating : number;
    discountPercent : number;
    discountedPrice : number;
    colors : string[];
    sizes : string[];
    inventory: number;
}


export interface Review {
    _id : string;
    title : string;
    comment : string;
    rating : number;
    name : string;
    createdAt : Date;
}
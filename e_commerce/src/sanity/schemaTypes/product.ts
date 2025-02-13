import { defineType } from "sanity"

export default defineType({
    name: 'products',
    title: 'Products',
    type: 'document',
    fields: [
        {
        name: 'name',
        title: 'Name',
        type: 'string',
        },
        {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
            source : "name"
            }
        },
        {
        name: 'price',
        title: 'Price',
        type: 'number',
        },
        {
        name: 'inventory',
        title: 'Inventory',
        type: 'number',
        },
        {
        name: 'description',
        title: 'Description',
        type: 'text',
        },
        {
        name: "isNew",
        type: "boolean",
        title: "New",
        },
        {
        name: 'image',
        title: 'Image',
        type: 'image',
        },
        {
            name: "rating",
            title: "Rating",
            type: "number",
            description: "Enter a rating between 0 and 5",
            validation: (Rule) => Rule.min(0).max(5).precision(1),
            initialValue: () => (Math.random() * 5).toFixed(1)  // Generates a random rating between 0 and 5 with one decimal point
        },
        {
            name:"category",
            title:"Category",
            type: 'string',
            options:{
                list:[
                   {title: 'T-Shirt', value: 'tshirt'},
                   {title: 'Short', value: 'short'}, 
                   {title: 'Jeans', value: 'jeans'} ,
                   {title: 'Hoddie', value: 'hoodie'} ,
                   {title: 'Shirt', value: 'shirt'} ,
                ]
            }
        },
        {
            name:"discountPercent",
            title:"Discount Percent",
            type: 'number',
        },
        {
            name:"new",
            type: 'boolean',
            title:"New",
        },
        {
            name:"colors",
            title:"Colors",
            type: 'array',
            of:[
                {type: 'string'}
            ]
        },
        {
            name:"sizes",
            title:"Sizes",
            type: 'array',
            of:[
                {type: 'string'}
            ]
        }
    ],
})

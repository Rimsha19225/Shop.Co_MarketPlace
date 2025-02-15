
const orderSchema = {
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
      {
          name: 'firstName',
          title: 'First Name',
          type: 'string'
      },
      {
          name: 'lastName',
          title: 'Last Name',
          type: 'string'
      },
      {
        name: 'zipCode',
        title: 'Zip Code',
        type: 'string'
      },
      {
        name: 'total',
        title: 'Total',
        type: 'string'
      },
      {
          name: 'email',
          title: 'Email',
          type: 'string'
      },
      {
          name: 'phone',
          title: 'Phone',
          type: 'string'
      },
      {
          name: 'address',
          title: 'Address',
          type: 'string'
      },
      {
          name: 'city',
          title: 'City',
          type: 'string'
      },
      {
          name: 'country',
          title: 'Country',
          type: 'string'
      },
      {
          name: 'cartItems',
          title: 'Cart Items',
          type: 'array',
          of: [{type: "reference", to: {type: 'products'}}]
      },
      {
        name: 'orderDate',
        title: 'Order Date',
        type: 'datetime'
      },
      {
        name: 'addressLine2',
        title: 'Address Line 2',
        type: 'string'
      },
      {
          name: 'status',
          title: 'Order Status',
          type: 'string',
          options: {
              list: [
                  {title: 'Pending', value: 'pending'},
                  {title: 'Processing', value: 'processing'},
                  {title: 'Shipped', value: 'shipped'},
                  {title: 'success', value: 'success'},
                  {title: 'Delivered', value: 'delivered'},
                  {title: 'Cancelled', value: 'cancelled'}
              ],
              layout: 'radio'
          },
          initialValue: 'pending'
      }
  ]
};

export default orderSchema;
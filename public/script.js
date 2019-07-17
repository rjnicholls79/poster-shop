new Vue({
  el: "#app",
  data:{
    total: 0,
    products:[
      {title: "Product 1", id: 1, price: 9.99},
      {title: "Product 2",id: 2, price: 9.99},
      {title: "Product 3",id: 3, price: 9.99},
    ],
    cart:[],
  },
    methods: {
      addToCart(product){
        this.total += product.price;
        let found = false;
        for(let i = 0; i < this.cart.length; i++){
          if(this.cart[i].id === product.id){
            this.cart[i].qty++;
            found = true;
          }
        }
        if(!found){
          this.cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            qty: 1,
          });
        }
      },
      inc(item){
        item.qty++;
        this.total += item.price;
      },
      dec(item){
        item.qty--;
        this.total -= item.price;
      }
    },
    filters:{
      currency(price){
        return "£".concat(price.toFixed(2));
      }
    }
});

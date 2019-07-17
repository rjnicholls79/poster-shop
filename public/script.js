new Vue({
  el: "#app",
  data:{
    total: 0,
    products:[],
    cart:[],
    search: "",
    lastSearch: "",
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
        if(item.qty <= 0){
          let i = this.cart.indexOf(item);
          this.cart.splice(i, 1);
        }
      },
      onSubmit(){
        let path = "/search?q=".concat(this.search);
        this.$http.get(path)
        .then(function(response){
          this.products = response.body;
          this.lastSearch = this.search;
        });
      }
    },
    filters:{
      currency(price){
        return "£".concat(price.toFixed(2));
      }
    }
});

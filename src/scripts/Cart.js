
class Cart {

  constructor() {
    let sessionCart = sessionStorage.getItem("cart");
    if (!sessionCart) {
      // Criar um novo carrinho
      this.cart = {
        id: crypto.randomUUID(),
        create_at: new Date(),
        update_at: new Date(),
        items: []
      }
    }
    else {
      // Utilizar o carrinho encontrado no sessionStorage
      let newCart = JSON.parse(sessionCart);
      this.cart = newCart;
    }
  }

  get getCart() {
    return this.cart;
  }

  async addToCart(item) {
    if (item && !await this.checkItemOnCart(item)) {
      let newItem = {
        id: item.id,
        insert_at: new Date()
      }
      this.cart.update_at = new Date();
      await this.cart.items.push(newItem);
      sessionStorage.setItem("cart", JSON.stringify(this.cart));
      window.location.reload();
    }
  }

  async checkItemOnCart(item) {
    let itemOnCart = false;
    await this.cart.items.forEach((cartItem) => {
      if (cartItem.id === item.id) {
        itemOnCart = true;
      }
    });
    return itemOnCart;
  }

  removeItemOnCart(item) {
    let newCart = this.cart.items.filter((cartItem) => {
      return cartItem.id !== item.id;
    });
    this.cart.update_at = new Date();
    this.cart.items = newCart;
    sessionStorage.setItem("cart", JSON.stringify(this.cart));
    window.location.reload();
  }
}

export default Cart;
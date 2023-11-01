import { makeAutoObservable } from "mobx";
import axios from "axios";


class CartStore {
  items = [];
  totalCount = 0;
  isLoading = false;
  amountPrice = 0;

  constructor() {
    makeAutoObservable(this);
    this.loadLocalStorage();
    this.placeOrder = this.placeOrder.bind(this);
  }

  addItem(product) {
    const checkendItem = this.items.find(item => item.product.id === product.id);
    (checkendItem) ? (checkendItem.quantity +=1) : (this.items.push({product, quantity:1})); 
    this.calculateTotalCount();
    this.saveLocalStorage();
    this.amountOrderPrice();
    this.isLoading = true;
  }

  removeItem(productId) {
    const index = this.items.findIndex(item => item.product.id === productId);
    if(index !== -1) {
        this.items.splice(index,1);
        }
        this.calculateTotalCount();
        this.saveLocalStorage();
        this.amountOrderPrice();
  }

  setClearCart = () => {
    this.items = []; 
    this.calculateTotalCount(); 
    this.saveLocalStorage(); 
    this.amountOrderPrice();
  }

// ===========
  increment(productId){
    const index = this.items.findIndex(item => item.product.id === productId);
    if(index !== -1){
      const item = this.items[index];
      item.quantity +=1;
    } else {
      this.items.splice(index,1);
    }
    this.calculateTotalCount();
    this.saveLocalStorage();
    this.amountOrderPrice();
  }

  decrement(productId) {
    const index = this.items.findIndex(item => item.product.id === productId);
    if (index !== -1) {
        const item = this.items[index];
        if (item.quantity > 0) {
            item.quantity -= 1;
        }
        if (item.quantity <= 0) {
            this.items.splice(index, 1);
        }
        this.calculateTotalCount();
        this.saveLocalStorage();
        this.amountOrderPrice();
    }
}


  getSelectItems(){
    return this.items;
  }
  
  amountOrderPrice(){
    this.amountPrice = this.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    this.amountPrice = this.amountPrice.toFixed(2);
    
  }
  
  calculateTotalCount() {
    this.totalCount = this.items.reduce((total, item) => total + item.quantity, 0);
  }
  saveLocalStorage(){
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

 loadLocalStorage(){
    this.isLoading = true;   
    const saveCart =localStorage.getItem('cart');     
    if(saveCart){
      this.items = JSON.parse(saveCart);
      this.calculateTotalCount();
      this.amountOrderPrice();     
    }
      this.isLoading = false;
    } 

    async placeOrder() {    
      this.isLoading = true;
      
      try {
          if (this.items.length > 0) {
              const response = await axios.post('http://localhost:3333/order/send', this.items);
              this.orderInfo = response.data;
              console.log("Успешный ответ от сервера:", response.data);
          }
      } catch (error) {
          console.error("Error placing order: ", error);
          console.error("Ошибка при отправке POST запроса:", error);
      } finally {
          this.isLoading = false;
          localStorage.clear();
      }
    }
  
  }


const cartStore = new CartStore();
export default cartStore;


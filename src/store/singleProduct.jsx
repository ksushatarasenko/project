import { makeAutoObservable } from "mobx";
import axios from "axios";

class SingleProduct {
  product = [];
  isLoading = false;
  

  constructor() {
    makeAutoObservable(this);
  }

  async getAllProduct(id) {
    try {
      this.isLoading = true;
      const response = await axios.get(`http://localhost:3333/products/${id} `);
      this.product = response.data;
      
      
    } catch (error) {
      console.error('Loading error ....', error);
    } finally {
      this.isLoading = false;
    }
  }
}

const singleProduct = new SingleProduct();
export default singleProduct;


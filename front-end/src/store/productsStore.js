import {makeAutoObservable} from 'mobx'
import axios from 'axios'


class ProductsStore {
    products = [];
    singleProduct = [];
    isLoading = false;
    allCategories = [];
    singleCategory = [];
    dataServer = {};

    constructor() {
        makeAutoObservable(this);
        this.getAllProducts = this.getAllProducts.bind(this);
        this.getAllCategories = this.getAllCategories.bind(this);
        this.getSingleCategory = this.getSingleCategory.bind(this);
        this.getSingleProduct = this.getSingleProduct.bind(this);
    }

    async getAllProducts() {
        this.isLoading = true;
        try{
          const responce = await axios.get('http://localhost:3333/products/all');
          this.products = responce.data
        } catch (err){
          console.error('Loading error ....',err);
        } finally {
            this.isLoading = false;
        }
      }

    async getSingleProduct(id){
      this.isLoading = true;
      try {
        const responce = await axios.get(`http://localhost:3333/products/${id} `);
        this.singleProduct = responce.data
      } catch (error) {
        console.error("Loading....", error)
      } finally {
        this.isLoading = false;
      }
    }

    async getAllCategories(){
      this.isLoading = true;
      try {
        const responce = await axios.get('http://localhost:3333/categories/all');
        this.allCategories = responce.data;
      } catch (err) {
        console.error('Loading...', err);
      } finally {
        this.isLoading = false;
      }
    }

    async getSingleCategory(id){
      this.isLoading = true;
      try {
        const response = await axios.get(`http://localhost:3333/categories/${id}`)
        this.singleCategory = response.data.data;
      } catch (error) {
        console.error("Loading error ...", error);
      } finally {
        this.isLoading = false;
      }
    }
// ========= Discount ============
async sendCoupon (phoneNumber){
  try {
      const response = await axios.post('http://localhost:3333/sale/send', { phoneNumber });
      console.log("Successful response from the server:", response.data);
      return response.data;
  } catch (error) {
    console.error("Error when sending a POST request:", error);
    throw error;
  }
}
    
}

const productsStore = new ProductsStore();
export default productsStore



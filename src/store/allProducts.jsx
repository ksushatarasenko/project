
import {makeAutoObservable} from 'mobx'
import axios from 'axios'


class AllProducts {
    products = [];
    isLoading = false;
    

    constructor() {
        makeAutoObservable(this);
        this.getAllProducts = this.getAllProducts.bind(this);
    }

    async getAllProducts() {
        this.isLoading = true;
        try{
          const responce = await axios.get('http://localhost:3333/products/all');
          this.products = responce.data;
        } catch (err){
          console.error('Loading error ....',err);
        } finally {
            this.isLoading = false;
        }
      }
    
}

const allProducts = new AllProducts();
export default allProducts;

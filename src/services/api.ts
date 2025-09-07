import { CartResponse } from "@/interfaces";
import { ProductsResponse, SingleProductResponse } from "@/types";





class ApiServices {

  baseUrl = "https://ecommerce.routemisr.com/"

  async getAllProducts(): Promise<ProductsResponse> {
  return   await fetch(
    this.baseUrl +"api/v1/products/"
  ).then((res) => res.json());
  }


  async getProductsDetails(productId : string | string[]): Promise<SingleProductResponse> {
  return   await fetch(
    this.baseUrl +"api/v1/products/" + productId
  ).then((res) => res.json());
  }

  getHeader(){
    return {
        "Content-Type" : "application/json" , 
        token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YmNlNjAzNzgyMTE0MGI1OGEyNmY3YiIsIm5hbWUiOiJBaG1lZCBBYmQgQWwtTXV0aSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzU3MjEwMTE2LCJleHAiOjE3NjQ5ODYxMTZ9.1GwHox9u6x0iRIPwTgunknKu8qx1FueObBzMoyFjUB8"
      }
  }

  async addProductToCart(productId:string): Promise <CartResponse>{
    return fetch(this.baseUrl + "api/v1/cart" , {
      method : "post",
      body : JSON.stringify({
        productId
      }),
      headers : this.getHeader()
    }).then(res =>res.json())
  }
}

export const apiServices  = new ApiServices()
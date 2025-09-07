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
}

export const apiServices  = new ApiServices()
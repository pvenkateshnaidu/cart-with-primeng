import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {User} from "../_models/user";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) {


  }
  getCartProducts()
  {
    return this.http.get<User[]>(`${this.apiUrl}/carts`);
  }
}

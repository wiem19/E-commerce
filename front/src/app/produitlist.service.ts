import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http' ;
@Injectable({
  providedIn: 'root'
})
export class ProduitlistService {

  constructor(private http: HttpClient) { }
  getAllProduits() {
    return this.http.get('http://localhost:8080/produits');
  }
  ajoutProduit(produit:any){
    return this.http.post('http://127.0.0.1:8080/addProduit',produit);
  }

}

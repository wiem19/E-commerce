import { Component, OnInit } from '@angular/core';
import { ProduitlistService } from '.././produitlist.service';
@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {
  produit: any={"id":null,"description":"","quantite":0,"prix":0};

  constructor(private serv:ProduitlistService) { }

  ngOnInit(): void {
  }
  ajoutProduit(){
    this.serv.ajoutProduit(this.produit).subscribe(
      data => {console.log(data);},
      err=> {
        console.log(err);
      }
      );
    
  }

}

import { Component, OnInit } from '@angular/core';
import { ProduitlistService } from '.././produitlist.service';
@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  listeproduits : any=[];
  constructor(private serv:ProduitlistService) { }

  ngOnInit(): void {
    this.serv.getAllProduits().subscribe(
      data=> {
        this.listeproduits=data ;
      },
        err => {
          console.log(err);
          
        }
      
    )
  }

}

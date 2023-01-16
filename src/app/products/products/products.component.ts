import { ProductDataService } from '@core/index';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Product } from "@core/products/product";
import { CartService } from '@core/cart/cart.service';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'pm-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  dataSource = new MatTableDataSource<Product>();
  loading = true;
  subscriptions = [];
  displayedColumns = ['imgUrl', 'name', 'description','price', 'action',];

  @ViewChild(MatSort) sort: MatSort;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private productDataService: ProductDataService, private cartService: CartService) {}

  ngOnInit() {
    this.subscriptions.push(
      this.productDataService
        .getAllProducts()
        .subscribe((products) => this.onDataLoad(products))
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
  addItemToCart(product) {
    this.cartService.addToCart(product, 2);
  }

  onDataLoad(products: Product[]) {
    this.loading = false;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSource.data = products;
  }
  slides = [
    {'image': 'assets/Tablet_Summer 2019_Desrosiers.jpg'}, 
    {'image': 'assets/pharmacist-wearing-face-mask-white-coat-holding-medicine-pharmacy-store-during-corona-virus-pandemic_308072-601.webp'},
    {'image': 'assets/EzrWyOoXMAUlvHI.jpeg'}, 
    {'image': 'assets/three-pharmacists-helping-each-other-1fgcvulokjazfbyb.jpg'}, 
    {'image': 'assets/Pharmacists.jpg'}
  ];
  
}

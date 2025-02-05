import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
  standalone: false
})
export class DiscoverPage implements OnInit {

  searchText: string = '';
  
  images = [
    { src: 'https://24ai.tech/es/wp-content/uploads/sites/5/2023/10/01_product_1_sdelat-kvadratnym-2.jpg' },
    { src: 'https://www.blogdelfotografo.com/wp-content/uploads/2016/05/geometr%C3%ADas.jpg' },
    { src: 'https://24ai.tech/es/wp-content/uploads/sites/5/2023/10/01_product_1_sdelat-kvadratnym-6.jpg' },
    { src: 'https://th.bing.com/th/id/R.b51d67c07e100f6c9caf59dca4f7ee51?rik=t8o9fnO2Q0rxJw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-lkT0yAUnr84%2fVOznUApyKCI%2fAAAAAAAAO6s%2fQGI24L0kSzc%2fs1600%2f5.jpg&ehk=ql4t1F5SIf4UVY6uyIhyqdq9eoR7%2f7F8TFAK7FALqS4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1' },
    { src: 'https://24ai.tech/es/wp-content/uploads/sites/5/2023/10/01_product_1_sdelat-kvadratnym-2-1.jpg' },
    { src: 'https://24ai.tech/es/wp-content/uploads/sites/5/2023/10/01_product_1_sdelat-kvadratnym-4.jpg' }
  ];

  constructor() { }

  ngOnInit() { }

}

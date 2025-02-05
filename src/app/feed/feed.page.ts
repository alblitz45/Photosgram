import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
  standalone: false
})
export class FeedPage implements OnInit {

  stories = [
    { id: 1, name: 'Juan', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { id: 2, name: 'Maria', image: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { id: 3, name: 'Carlos', image: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { id: 4, name: 'Sofia', image: 'https://randomuser.me/api/portraits/women/4.jpg' },
    { id: 5, name: 'Pedro', image: 'https://randomuser.me/api/portraits/men/5.jpg' },
    { id: 6, name: 'Pedro', image: 'https://randomuser.me/api/portraits/men/3.jpg' }
  ];

  posts = [
    {
      title: 'Juan Pérez',
      subtitle: 'Hace 3 horas',
      image: 'https://th.bing.com/th/id/OIP.PFndj5fIuUEN-TSzngA4aQHaHa?rs=1&pid=ImgDetMain',
      content: 'Me encanta este lugar, ¡es increíble! #vacaciones #disfrutando'
    },
    {
      title: 'María García',
      subtitle: 'Hace 12 horas',
      image: 'https://24ai.tech/es/wp-content/uploads/sites/5/2023/10/01_product_1_sdelat-kvadratnym-3-1.jpg',
      content: 'Probando algo nuevo. ¡Hoy cociné una receta deliciosa! #cocina #delicioso'
    },
    {
      title: 'Carlos Rodríguez',
      subtitle: 'Hace 1 día',
      image: 'https://th.bing.com/th/id/OIP.6PIg1Sjq1VnlHqVxXA31vwHaHa?rs=1&pid=ImgDetMain',
      content: 'Mañana será un gran día. ¡Listo para el desafío! #motivación #nuevoscomienzos'
    }
  ];
  

  constructor() { }

  ngOnInit() {
  }

}

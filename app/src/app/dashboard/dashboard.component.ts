import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  pages = [{
    path: '/users',
    text: 'Usuários'
  },
  {
    path: '/products',
    text: 'Produtos'
  },
  {
    path: '/livros',
    text: 'Livros'
  }]
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  signOut() {
    this.auth.signOut();
    this.router.navigateByUrl('/auth/signin');
  }

}

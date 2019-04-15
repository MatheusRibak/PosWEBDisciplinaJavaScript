import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/users/interfaces/user';
import { UsersService } from 'src/app/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]>;
  constructor(
    private usersService: UsersService
  ) {
    this.users$ = this.usersService.findAll();
  }

  ngOnInit() {
  }

}

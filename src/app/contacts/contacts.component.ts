import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  usersList: any = [];

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.usersService.getUsers()
      .subscribe(
        data => this.usersList = (data.results),
        error => console.log(error)
      );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // private users = [
  //      { name: { first: 'Jon', last: 'Rojí' },
  //        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcsRpyt1fmcKeI-9augzMPAsy1AvGZoYfG-nc4a2nr4uQclgtj'
  //      },
  //      { name: { first: 'María', last: 'Fernandez' },
  //        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcsRpyt1fmcKeI-9augzMPAsy1AvGZoYfG-nc4a2nr4uQclgtj'
  //      },
  //      { name: { first: 'Jon', last: 'Rojí' },
  //        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcsRpyt1fmcKeI-9augzMPAsy1AvGZoYfG-nc4a2nr4uQclgtj'
  //      },
  //    ];

  private usersUrl = 'https://randomuser.me/api/?results=10';

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http
      .get(this.usersUrl)
      // .map((response: Response) => response.json())
      ;
  }
}

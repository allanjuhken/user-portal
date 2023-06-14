import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from './user-service';

const API_URL = 'https://reqres.in';

class User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  canEdit: boolean;

  constructor(id: string, email: string, first_name: string, last_name: string,avatar: string) {
    this.id = id;
    this.email = email;
    this.first_name = first_name;
    this.last_name = last_name;
    this.avatar = avatar;
    this.canEdit = false;
    
  }
}

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent {
  userService: UserService = new UserService;
  users: User[] = [];
  items: any[];
  currentPage = 1;
  itembackup = null;

  constructor(private http: HttpClient) {
    this.items = [];
  };

  getData(direction: number): Observable<any[]> {
    const url = API_URL + "/api/users?page=" + (this.currentPage + direction);
    console.log(url);
    return this.http.get<any>(url).pipe(
      map(response => {
        console.log(response.data);
        return response.data
      })
    );
  }

  ngOnInit() {
    this.getData(0).subscribe(data => {
      this.items = data;
      console.log('data loaded: ' + this.items.length)
      this.addCanEdit();
    });
  }

  pageChange(direction: number) {
    this.getData(direction).subscribe(data => {
      this.items = data;
      this.currentPage = this.currentPage + direction;
    })
  }

  deleteItem(item: any): void {
    if (confirm("Are you sure to delete " + item.email)) {
      this.items = this.items.filter(i => i !== item);
    }
  }

  editItem(item: any): void {
    this.itembackup = item;
    item.canEdit = true;
  }

  saveItem(item: any, index: number): void {
    item.canEdit = false;
    this.userService.sayHello();
  }

  cancelItem(item: any): void {
    item.canEdit = false;
    item = this.itembackup;
  }

  addCanEdit(): void {
    this.items.forEach(t=>{
      t.canEdit = false;
    });
  }

  printContent(): void{
    console.log(this.items);
  }

  addItem(id: string, email: string, first_name: string, last_name: string, avatar: string): void{
    var newItem = new User(id, email, first_name, last_name, avatar);
    this.items.push(newItem);
  }

}
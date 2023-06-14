import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root' // Provides the service at the root level
})
export class UserService {
  constructor() { }

  sayHello(): void{
    console.log("halloo")
  }
}

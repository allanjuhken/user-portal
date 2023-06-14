import { Component } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

const API_URL = 'https://reqres.in';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

export class UserFormComponent {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.userForm = this.formBuilder.group({
      name: '',
      job: ''
      // other form fields
    });
  }

  onSubmit() {
    console.log('console log performed');
    const formData = JSON.stringify(this.userForm.value);
      console.log(formData); // Display the JSON data in the console 
      this.http.post(API_URL + '/api/users', formData)
    .subscribe({
      next: response => {
        console.log('Post successful:', response);
        // Handle the API response here
      },
      error: error => {
        console.error('Error:', error);
        // Handle any error that occurred during the API call
      }
    });
  }

  handleClick(): void {
    // Code to execute when the button is clicked
    console.log('Button clicked!');
    this.http.get(API_URL + '/api/users?page=2').subscribe((data) => {
      console.log(data);
    });
  }
}


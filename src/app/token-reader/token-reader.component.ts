import { Component } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const API_URL = 'https://reqres.in';
const headers = new HttpHeaders().set('Content-Type', 'application/json');

@Component({
  selector: 'app-token-reader',
  templateUrl: './token-reader.component.html',
  styleUrls: ['./token-reader.component.css']
})

export class TokenReaderComponent {

  userForm : FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.userForm = this.formBuilder.group({
      email: '',
      password: ''
      // other form fields
    });
  }

  onSubmit() {

    // Send the POST request
    const formData = JSON.stringify(this.userForm.value);
      console.log(formData); // Display the JSON data in the console 
      this.http.post(API_URL + '/api/register', formData)
      this.http.post(API_URL + '/api/register', formData, { headers })
    .subscribe({
      next: response => {
        console.log(response);
        // Handle the API response here
      },
      error: error => {
        console.error('Error:', error);
        // Handle any error that occurred during the API call
      }
    });
  }
}

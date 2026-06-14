import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SeoService } from '../../core/services/seo.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  formData = {
    name: '',
    email: '',
    institution: '',
    interest: 'Select a service',
    message: ''
  };
  showSuccess = signal(false);

  constructor(private seo: SeoService,private http: HttpClient) {}

  ngOnInit() {
    this.seo.updateMeta(
      'Contact Us - BIOSYS Scientific',
      'Get a custom quote for your research project. Our PhD-level specialists are ready to assist you with scientific writing and botanical analysis.'
    );
  }

  onSubmit() {
    console.log('Form submitted:', this.formData);
    this.showSuccess.set(true);
    setTimeout(() => this.showSuccess.set(false), 5000);
    this.resetForm();
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      institution: '',
      interest: 'Select a service',
      message: ''
    };
  }
  submitForm(data: any){
    console.log('ddd',data);
      const formData = new FormData();

  formData.append('name', this.formData.name);
  formData.append('email', this.formData.email);
  formData.append('institution', this.formData.institution);
  formData.append('interest', this.formData.interest);
  formData.append('message', this.formData.message);
  this.http.post('https://formsubmit.co/ajax/suryaprakashg1000@gmail.com',formData).subscribe({

    next :()=>{
      this.showSuccess.set(true);
      this.resetForm();},
    error: (err)=>{
      console.log('err',err);
      },
    })
  }
}

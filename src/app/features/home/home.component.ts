import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SeoService } from '../../core/services/seo.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
      'BIOSYS - Precision Scientific Writing & Botanical Services',
      'Accelerate your research impact with PhD-level scientific writing, manuscript polishing, and authenticated botanical solutions.'
    );
  }

  onSubmit() {
    console.log('Home Contact Form submitted:', this.formData);
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
  this.http.post('https://formsubmit.co/ajax/biosysr@gmail.com',formData).subscribe({

    next :()=>{
      this.showSuccess.set(true);
      this.resetForm();},
    error: (err)=>{
      console.log('err',err);
      },
    })
  }
}


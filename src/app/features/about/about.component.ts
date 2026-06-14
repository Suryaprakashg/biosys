import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit() {
    this.seo.updateMeta(
      'About Us - BIOSYS Scientific',
      'Learn about BIOSYS. Our scientist-led team translates complex data and plant research into world-class publications and sustainable botanical systems.'
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-plant-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './plant-services.component.html',
  styleUrls: ['./plant-services.component.scss']
})
export class PlantServicesComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit() {
    this.seo.updateMeta(
      'Plant Materials & Services - BIOSYS',
      'Accurate plant identification, analytical samples sourcing, and professional horticulture consultancy for scientific research.'
    );
  }
}

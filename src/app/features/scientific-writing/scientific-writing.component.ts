import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-scientific-writing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './scientific-writing.component.html',
  styleUrls: ['./scientific-writing.component.scss']
})
export class ScientificWritingComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit() {
    this.seo.updateMeta(
      'Scientific Writing & Publishing Services - BIOSYS',
      'Expert manuscript polishing, thesis writing support, and professional scientific documentation for high-impact publishing.'
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-miscellaneous',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './miscellaneous.component.html',
  styleUrls: ['./miscellaneous.component.scss']
})
export class MiscellaneousComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit() {
    this.seo.updateMeta(
      'Miscellaneous Research Services - BIOSYS',
      'From authenticated bacterial cultures to academic poster designs and event communications.'
    );
  }
}

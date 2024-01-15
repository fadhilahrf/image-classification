import { Component } from '@angular/core';
import { MODEL_DATA } from '../model-data';
import { Router } from '@angular/router';

@Component({
  selector: 'jhi-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  MODEL_DATA = MODEL_DATA;

  constructor(protected router: Router){}

  goToModelDetail(slug: string): void {
    this.router.navigate([`classification/${slug}`]);
  }
}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ListComponent
      },
      {
        path: ':modelName',
        component: DetailComponent
      },
    ]),
  ],
})
export class ClassificationRoutingModule {}

import { Component, OnInit, ViewChild } from '@angular/core';
import { IModel, MODEL_DATA } from '../model-data';
import { ClassificationService } from '../service/classification.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'jhi-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit{
  @ViewChild('imgInput') imgInput: any;
  selectedImage?: File;
  result?: string;
  MODEL_DATA = MODEL_DATA;
  modelName?: string | null;
  model?: IModel;
  imageSrc?: string;

  constructor(private route: ActivatedRoute, private classificationService : ClassificationService) {}

  ngOnInit(): void {
    this.modelName = this.route.snapshot.paramMap.get('modelName');
    if(this.modelName){
      this.model = MODEL_DATA.find(model=>model.slug);
    }
  }

  onFileChanged(event: any): void {
    if (event.target.files && event.target.files[0]) {
      this.selectedImage = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result as string;

      reader.readAsDataURL(this.selectedImage!);
  }
  }

  classify(): void {
    const uploadImageData = new FormData();
    uploadImageData.append('modelName', this.model!.name!);
    uploadImageData.append('imageFile', this.selectedImage!, this.selectedImage!.name);

    this.classificationService.classify(uploadImageData).subscribe(res=>{
      if(res.body != null){
        this.result = this.model!.class![res.body];
      }
    })
  }

  reset(): void {
    this.selectedImage = undefined;
    if (this.imgInput) {
      this.imgInput.nativeElement.value = '';
    }
    this.result = undefined;
    this.imageSrc = undefined;
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServiceService } from '../../sercives/service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  constructor(private product: ServiceService) {}

  profileForm = new FormGroup({
    name: new FormControl(''),

    description: new FormControl(''),
  });

  onSubmit() {
    this.product.create(this.profileForm.value);
  }
}

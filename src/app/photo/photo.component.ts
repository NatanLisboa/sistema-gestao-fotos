import { Component } from "@angular/core";

@Component({
    selector: 'ap-photo',
    templateUrl: 'photo.component.html'
})
export class PhotoComponent {
    
    url = 'https://cdn.pixabay.com/photo/2016/01/02/16/53/lion-1118467_960_720.jpg';

    description: 'Leão';

}
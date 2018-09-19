import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'count'
})
export class CountPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    let photos = []; 
    let count = 0; 

    if(!value) return count; 

    console.log(value); 
    for(let key in value){
      count++; 
      //photos.push(value[key]); 
    }
      return count
 
  ; 
  }

}

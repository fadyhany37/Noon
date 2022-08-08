import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list:any[],term:string): any {
    console.log(term);
    
    return list.filter((item)=>item.category?.toLowerCase().includes(term.toLowerCase()))
  }

}

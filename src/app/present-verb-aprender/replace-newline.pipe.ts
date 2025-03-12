import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceNewline'
})
export class ReplaceNewlinePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value; // Asegúrate de que el valor no sea nulo o indefinido
    
    console.log('Antes del reemplazo:', value);
    
    // Reemplazar tanto \n como \r\n
    const transformedValue = value.replace(/(\r\n|\n)/g, '<br>'); 
    
    console.log('Después del reemplazo:', transformedValue);
    return transformedValue;
  }
}

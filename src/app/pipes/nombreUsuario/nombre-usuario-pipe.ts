import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombreUsuario'
})
export class NombreUsuarioPipe implements PipeTransform {

  transform(user: any): unknown {
     if (!user) return '';
    const nombre = user.name ?? '';
    const apellido = user.surname ?? '';
    return `${nombre} ${apellido}`.trim();
  }

}

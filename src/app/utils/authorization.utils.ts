import { Router } from '@angular/router';
import { Authentication } from '../services/authentication/authentication';

export async function verificarToken(auth: Authentication, router: Router) {
  const local = JSON.parse(localStorage.getItem('data') || '{"error":"error"}');
  console.log(local);
  
  if (local.error == undefined) {
    
    try {
      const response = await auth.verifyToken('Bearer ' + local.token);
      return false;
      
    } catch (error) {
      setTimeout(() => {
        router.navigate(['/login']);
        console.log("no esta");
      }, 2000);
    }
  }else{
    setTimeout(() => {
        router.navigate(['/login']);
        console.log("no esta");
      }, 2000);
  }
  return true;
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgxC8yOpenapiLibraryService {

  public static MY_STR = "Hello";

  constructor() { }

  public printHelloFromLib() {
    console.log('this is a ' + NgxC8yOpenapiLibraryService.MY_STR + ' from imported library')
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tagliaferro } from 'src/dto/tagliaferro';
import { AbstractService } from './abstractservice';

@Injectable({
  providedIn: 'root'
})
export class TagliaferroService extends AbstractService<tagliaferro>{

  constructor(http : HttpClient) {
    super(http);
    this.type = "Tagliaferro";
  }
}

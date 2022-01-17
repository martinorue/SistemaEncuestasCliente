import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';
import { IEncuesta } from '../../domain/encuesta';
import { IPregunta } from '../../domain/resultadoEncuesta';
import { CrearEncuestaService } from '../../services/crear-encuesta.service';


@Component({
  selector: 'app-crear-encuesta',
  templateUrl: './crear-encuesta.component.html',
  styleUrls: ['./crear-encuesta.component.css']
})
export class CrearEncuestaComponent implements OnInit {

  constructor(
    
  ) { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-nr13-form',
  templateUrl: './nr13-form.component.html',
  styleUrls: ['./nr13-form.component.css']
})
export class Nr13FormComponent implements OnInit {

  constructor() { }

  nr13 = new FormGroup({
    nome: new FormControl(""),
    cnpj: new FormControl(""),
    endereco: new FormControl(""),
    reservatorioCheck: new FormControl(false),
    redeCheck: new FormControl(false),
    caldeiraCheck: new FormControl(false),
    modelo: new FormControl(""),
    AnoFabricacao: new FormControl(""),
    numSerie: new FormControl(""),
    codProjeto: new FormControl(""),
    anoEdicao: new FormControl(""),
    pressTeste: new FormControl(""),
    pressTrab: new FormControl(""),
    exameVisual: new FormControl(""),
    ultrassomCheck: new FormControl(false),
    espessuraChapa: new FormControl(),
    hidrostatico: new FormControl(),
    imgFileEquipamento: new FormControl(),
    imgFileBombaTeste: new FormControl(),
    resultadoTeste: new FormControl(""),
    nanometroCert: new FormControl(''),
    valvulaSegCert: new FormControl(''),
    pressostatoCert: new FormControl(''),
    valvulaPilotoCert: new FormControl('')
  })



  ngOnInit(): void {
  }

  submitForm(){
    window.alert("form enviado")
  }

}

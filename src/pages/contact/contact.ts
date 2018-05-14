import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  public rules:string[]=[
    "Записаться на ЦТ",
    "Написать ЦТ",
    "Забрать сертивикаты ЦТ",
    "Получить справку о состоянии здоровья",
    "Выбрать ВУЗ и факультет",
    "Подать документы",
  ];
  public states: object[] = [];
  public current:string;
  constructor(public navCtrl: NavController) {

  }

}

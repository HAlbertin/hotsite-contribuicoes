import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  tutorials = [
    {
      id: 1,
      text: 'Enriqueça o conteúdo selecionado com suas contribuições.',
      active: true
    },
    {
      id: 2,
      text: 'Acrescente o que quiser: textos, imagens, áudios, vídeos ou regras de memorização.',
      active: false
    },
    {
      id: 3,
      text: 'Tudo isso ficará à sua disposição no próprio material ou pelo menu.',
      active: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  changeTutorial(id) {
    for (let i = 0; i < this.tutorials.length; i++) {
      this.tutorials[i].active = false;

      if (this.tutorials[i].id === id) {
        this.tutorials[i].active = true;
      }
    }
  }

}

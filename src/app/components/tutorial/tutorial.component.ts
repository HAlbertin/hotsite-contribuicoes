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
      active: true,
      src: 'assets/tutorial-1.gif',
      zoomSrc: 'assets/tutorial-1-zoom.gif',
      zoomActive: false
    },
    {
      id: 2,
      text: 'Acrescente o que quiser: textos, imagens, áudios, vídeos ou regras de memorização.',
      active: false,
      src: 'assets/tutorial-2.gif',
      zoomSrc: 'assets/tutorial-2-zoom.gif',
      zoomActive: false
    },
    {
      id: 3,
      text: 'Tudo isso ficará à sua disposição no próprio material ou pelo menu.',
      active: false,
      src: 'assets/tutorial-3.gif',
      zoomSrc: 'assets/tutorial-3-zoom.gif',
      zoomActive: false
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

  zoomIn(id) {
    for (let i = 0; i < this.tutorials.length; i++) {
      this.tutorials[i].zoomActive = false;

      if (this.tutorials[i].id === id) {
        this.tutorials[i].zoomActive = true;
      }
    }
  }

  zoomOut() {
    for (let i = 0; i < this.tutorials.length; i++) {
      this.tutorials[i].zoomActive = false;
    }
  }

}

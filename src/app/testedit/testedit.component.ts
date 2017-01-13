import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { FEED_ADD, FEED_REMOVE, FEED_ADD_COMMENT } from '../store/feed/feed.actions';
import { IAppState } from '../store';

@Component({
  selector: 'app-testedit',
  templateUrl: './testedit.component.html',
  styleUrls: ['./testedit.component.css']
})

export class TestEditComponent {
  curQuestion: number = 0;
  questions: Question[] = [];

  constructor() {
    let q: Question = {type: 1, text: 'What is it?', answers: []};
    this.questions.push(q);
  }

  addQuestion(textquestion) {
    let q: Question = {type: 1, text: textquestion, answers: []};
    this.questions.push(q);
  }

  deleteQuestion(i) {
    this.questions.splice(i, 1);
    this.curQuestion = - 1;
  }

  setCurrent(i) {
    if (this.curQuestion === i) {
      this.curQuestion = - 1;
    } else {
      this.curQuestion = i;
    }
  }

  addAnswer(text, right) {
    if (this.curQuestion === -1) return;
    let a: Answer = {text: text, right: right};
    this.questions[this.curQuestion].answers.push(a);
  }

  changeAnswer(i) {
    if (this.curQuestion === -1) return;
    this.questions[this.curQuestion].answers[i].right = !this.questions[this.curQuestion].answers[i].right;
  }
  
  deleteAnswer(i) {
    if (this.curQuestion === -1) return;
    this.questions[this.curQuestion].answers.splice(i, 1);
  }
}

interface Question {
  type: number;
  text: string;
  answers: Answer[];
}

interface Answer {
  text: string;
  right: boolean;
}

import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() { }

  addQuestion(question: string, answer: string): void { 

  	if ( window.localStorage.getItem(question) == null) {

  		window.localStorage.setItem(question, answer);
  	}

  	else {
  		return;
  	}
  }

  getQuestion(question: string): string {

  	if ( window.localStorage.getItem(question) == null) {
  		return null;
  	}
  	return window.localStorage.getItem(question);
  }

}

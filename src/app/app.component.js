"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var storage_service_1 = require("./storage.service");
var question_1 = require("./question");

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.model = new question_1.Question("");
        this.answerList = ["Yes.", "No.", "Maybe...", "Absolutely Not!", "Definitely!", "Ask Again Later."];
    }
    AppComponent.prototype.onSubmit = function () {
        var storage = new storage_service_1.StorageService();
        var answer = storage.getQuestion(this.model.question)
        if(answer == null) {
            var newAnswer = Math.floor(Math.random() * 6);
            storage.addQuestion(this.model.question, this.answerList[newAnswer]);
            console.log(storage.getQuestion(this.model.question));
        }

        this.model.answer = storage.getQuestion(this.model.question);
    };    
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    }),
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
"use strict";
var Question = (function () {
    function Question(question) {
        this.question = question;
    }
    Question.prototype.toForm = function () {
        return "question=" + this.question;
    };
    return Question;
}());
exports.Question = Question;

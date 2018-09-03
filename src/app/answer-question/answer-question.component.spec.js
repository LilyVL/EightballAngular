"use strict";
var testing_1 = require("@angular/core/testing");
var answer_question_component_1 = require("./answer-question.component");
describe('AnswerQuestionComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [answer_question_component_1.AnswerQuestionComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(answer_question_component_1.AnswerQuestionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=answer-question.component.spec.js.map
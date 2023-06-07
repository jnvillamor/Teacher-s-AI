from django.urls import path
from .views import *

urlpatterns = [
    path('students/', StudentList.as_view(), name='student-list'),
    path('courses/', CourseList.as_view(), name='course-list'),
    path('quizzes/', QuizList.as_view(), name='quiz-list'),
    path('questions/', QuestionList.as_view(), name='question-list'),
    path('student-answers/', StudentAnswerList.as_view(), name='student-answer-list'),
    path('generate_quiz/', generate_quiz, name='generate-quiz'),
    path('analyze_quiz/', analyze_quiz, name='analyze-quiz')
]
from django.shortcuts import render
from django.conf import settings
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from .models import *
from .serializers import *

import openai

openai.api_key = settings.OPENAI_API_KEY

# Create your views here.
class StudentList(generics.GenericAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

    def get(self, request):
        students = self.get_queryset()
        serializer = StudentSerializer(students, many=True)
        return Response({'status': 'success', 'data': serializer.data}, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if (serializer.is_valid()):
            serializer.save()
            return Response({'status': 'success', 'data': serializer.data}, status=status.HTTP_201_CREATED)
        return Response({'status': 'error', 'data': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

class CourseList(generics.GenericAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

    def get(self, request):
        courses = self.get_queryset()
        serializer = CourseSerializer(courses, many=True)
        return Response({'status': 'success', 'data': serializer.data}, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if (serializer.is_valid()):
            serializer.save()
            return Response({'status': 'success', 'data': serializer.data}, status=status.HTTP_201_CREATED)
        return Response({'status': 'error', 'data': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

class QuizList(generics.GenericAPIView):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer

    def get(self, request):
        quizzes = self.get_queryset()
        serializer = QuizSerializer(quizzes, many=True)
        return Response({'status': 'success', 'data': serializer.data}, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if (serializer.is_valid()):
            serializer.save()
            return Response({'status': 'success', 'data': serializer.data}, status=status.HTTP_201_CREATED)
        return Response({'status': 'error', 'data': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

class QuestionList(generics.GenericAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

    def get(self, request):
        questions = self.get_queryset()
        serializer = QuestionSerializer(questions, many=True)
        return Response({'status': 'success', 'data': serializer.data}, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if (serializer.is_valid()):
            serializer.save()
            return Response({'status': 'success', 'data': serializer.data}, status=status.HTTP_201_CREATED)
        return Response({'status': 'error', 'data': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

class StudentAnswerList(generics.GenericAPIView):
    queryset = StudentAnswer.objects.all()
    serializer_class = StudentAnswerSerializer

    def get(self, request):
        student_answers = self.get_queryset()
        serializer = StudentAnswerSerializer(student_answers, many=True)
        return Response({'status': 'success', 'data': serializer.data}, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if (serializer.is_valid()):
            serializer.save()
            return Response({'status': 'success', 'data': serializer.data}, status=status.HTTP_201_CREATED)
        return Response({'status': 'error', 'data': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

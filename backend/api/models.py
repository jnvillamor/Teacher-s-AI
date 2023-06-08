from django.db import models

# Create your models here.
class Student(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)

    class Meta:
        db_table = 'students'
        verbose_name_plural = 'Students'
    
    def __str__(self):
        return self.name

class Course(models.Model):
    code = models.CharField(max_length=10)
    name = models.CharField(max_length=100)
    description = models.TextField()

    class Meta:
        db_table = 'courses'
        verbose_name_plural = 'Courses'
    
    def __str__(self):
        return self.name

class Quiz(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    description = models.TextField()
    date_created = models.DateTimeField(auto_now_add=True)
    scheduled_for = models.DateTimeField()
    class Meta:
        db_table = 'quizzes'
        verbose_name_plural = 'Quizzes'
    
    def __str__(self):
        return self.name
    
class Question(models.Model):
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    question = models.TextField()
    correct_answer = models.TextField()

    class Meta:
        db_table = 'questions'
        verbose_name_plural = 'Questions'
    
    def __str__(self):
        return self.question

class StudentAnswer(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    answer = models.TextField()

    class Meta:
        db_table = 'student_answers'
        verbose_name_plural = 'Student Answers'
    
    def __str__(self):
        return f'{self.student.name} - {self.question.question} - {self.answer}'

class StudyGuides(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    description = models.TextField()
    file = models.FileField(upload_to='study_guides/')

    class Meta:
        db_table = 'study_guides'
        verbose_name_plural = 'Study Guides'
    
    def __str__(self):
        return self.name
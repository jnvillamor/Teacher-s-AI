from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(Student)
admin.site.register(Course)
admin.site.register(Quiz)
admin.site.register(Question)
admin.site.register(StudentAnswer)
admin.site.register(StudyGuides)
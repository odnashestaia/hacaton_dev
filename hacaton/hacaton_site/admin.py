from django.contrib import admin
from .models import *


class AnswerAdmin(admin.StackedInline):
    model = Answer


class QuestionAdmin(admin.ModelAdmin):
    inlines = [AnswerAdmin]


admin.site.register(NameTest)
admin.site.register(Question, QuestionAdmin)
admin.site.register(Answer)
admin.site.register(Article)


class ProfileAdmin(admin.ModelAdmin):
    list_display = ["user", "points"]


admin.site.register(Student, ProfileAdmin)

from django.contrib import admin
from .models import *


class AnswerAdmin(admin.StackedInline):
    model = Answer


class QuestionAdmin(admin.ModelAdmin):
    inlines = [AnswerAdmin]


admin.site.register(Category)
admin.site.register(Question, QuestionAdmin)
admin.site.register(Answer)


@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    pass


@admin.register(Points)
class PointsAdmin(admin.ModelAdmin):
    pass

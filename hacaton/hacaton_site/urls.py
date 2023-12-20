from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path("", home, name="home"),
    path("courses/", courses, name="courses"),
    path("article/<int:pk>", article, name="article"),
    path("get-quiz/<int:pk>", get_quiz, name="get_quiz"),
]

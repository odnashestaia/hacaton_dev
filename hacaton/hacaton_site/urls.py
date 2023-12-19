from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path("", home, name="home"),
    path("quiz/", quiz, name="quiz"),
    path("api/get-quiz/", get_quiz, name="get_quiz"),
]

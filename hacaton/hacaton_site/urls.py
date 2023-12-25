from django.urls import path
from .views import *

urlpatterns = [
    path("", home, name="home"),
    path("courses/", courses, name="courses"),
    path("article/<int:pk>", article, name="article"),
    path("get-quiz/<int:pk>", get_quiz, name="get_quiz"),
    path("register/", register, name="register"), 
    path("get_answer/<int:pk>", get_answers, name="get_answers"),
    path("chat/", chat, name="chat"),
    path("rating/", rating, name="rating"),
]

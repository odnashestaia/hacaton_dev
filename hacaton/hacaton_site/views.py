from django.shortcuts import get_object_or_404, render, redirect
from django.contrib import messages
from .models import *
import random

# from .forms import UserCreateForm


def get_user(request) -> dict:
    if request.user.is_authenticated:
        user = Student.objects.all()
        student = user.get(user_id=request.user.id)

        # print(user.get(user_id=request.user.id).user.username)
        return {
            "username": student.user.username,
            "first_name": student.user.first_name,
            "points": student.points,
        }
    return {}


def home(request):
    return render(request, "home.html", get_user(request))


def courses(request):
    article_objs = Article.objects.all()
    data = []
    for article_obj in article_objs:
        data.append(
            {
                "pk": article_obj.pk,
                "title": article_obj.title,
                "text": article_obj.text,
                "img": article_obj.img,
                "points": article_obj.points,
                "category_name": article_obj.category.category_name,
                "category_img": article_obj.category.img,
                "category_pk": article_obj.category.pk,
            }
        )

    context = {"courses": data}
    context.update(get_user(request))
    return render(request, "courses.html", context)


def article(request, pk):
    context = get_user(request)
    context["article"] = get_object_or_404(Article, id=pk)
    return render(request, "article.html", context)


def get_quiz(request, pk):
    if not request.user.is_authenticated:
        return redirect("login")
    question_objs = Question.objects.all()
    question_objs = question_objs.filter(
        category__category_name__icontains=Category.objects.get(pk=pk)
    )
    question_objs = list(question_objs)
    random.shuffle(question_objs)
    data = []
    for num, question_obj in enumerate(question_objs):
        data.append(
            {
                "num": num + 1,
                "question": question_obj.question,
                "marks": question_obj.marks,
                "answers": question_obj.get_answers(),
            }
        )
    context = {
        "data": data,
        "category": Category.objects.filter(pk=pk)[0],
    }
    context.update(get_user(request))
    return render(
        request,
        "quize/test.html",
        context,
    )


def get_answers(request):
    res = 0
    if request.method == "POST":
        user = Student.objects.get(user_id=request.user.id)
        question = len(list(dict(request.POST).keys())[1:])
        for answer in list(dict(request.POST).keys())[1:]:
            print(dict(request.POST)[answer][0])
            if str(dict(request.POST)[answer][0]) == "True":
                res += 1
        user.points += res
    context = {"res": res, "all": question}
    context.update(get_user(request))

    return render(request, "quize/answer.html", context)


def register(request):
    if request.method == "POST":
        first_name = request.POST.get("first_name", "")
        uname = request.POST.get("username", "")
        passwd = request.POST.get("password", "")
        user = User.objects.filter(username=uname).first()
        if user is None:
            user = User(username=uname, first_name=first_name)
            user.set_password(passwd)
            user.save()
            student = Student(user=User.objects.filter(username=uname).first())
            student.save()
            messages.success(request, "User created")
            return redirect("login")
        else:
            messages.info(request, "User already exists.")
            return redirect("login")
    else:
        if request.user.is_authenticated:
            messages.info(request, "You are already logged in")
            return redirect("home")
    return render(request, "registration/register.html", get_user(request))

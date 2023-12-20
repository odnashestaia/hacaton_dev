from django.shortcuts import get_object_or_404, render, redirect
from django.http import JsonResponse
from .models import *
import random


def home(request):
    return render(request, "home.html")


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
    return render(request, "courses.html", context)


def article(request, pk):
    context = {}
    context["article"] = get_object_or_404(Article, id=pk)
    return render(request, "article.html", context)


def get_quiz(request, pk):
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
    return render(
        request,
        "test.html",
        {
            "data": data,
            "category": Category.objects.filter(pk=pk)[0],
        },
    )


def get_answers(self, request):
    mark = Points(user=request.user, total=Question.objects.filter(verified=True).count())
    for i in range(1, Question.objects.filter(verified=True).count() + 1):
        q = Question.objects.filter(
            pk=request.POST.get(f"q{i}", 0), verified=True
        ).first()
        if request.POST.get(f"q{i}o", "") == q.correct_option:
            mark.got += 1
    mark.save()
    messages.success(request, "Marks updated")
    return redirect("result")

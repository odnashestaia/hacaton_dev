from django.db import models
from django.contrib.auth import get_user_model
from django.urls import reverse
import random


User = get_user_model()


class Category(models.Model):
    category_name = models.CharField(max_length=100)
    img = models.ImageField(
        verbose_name="Превью теста", blank=True, upload_to="images/test/"
    )

    def __str__(self) -> str:
        return self.category_name


class Points(models.Model):
    class Meta:
        verbose_name = "Балл"
        verbose_name_plural = "Баллы"

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    points = models.IntegerField(default=0)


class Article(models.Model):
    class Meta:
        verbose_name = "Статья"
        verbose_name_plural = "Статьи"

    title = models.CharField()
    text = models.TextField()
    points = models.IntegerField()
    img = models.ImageField(
        verbose_name="Превью статьи", blank=True, upload_to="images/article/"
    )
    category = models.ForeignKey(
        Category, related_name="article_category", on_delete=models.CASCADE
    )

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("article_detail", kwargs={"pk": self.pk})


class Question(models.Model):
    category = models.ForeignKey(
        Category, related_name="question_category", on_delete=models.CASCADE
    )
    question = models.CharField(max_length=100)
    marks = models.IntegerField(default=5)

    def __str__(self) -> str:
        return self.question

    def get_answers(self):
        answer_objs = list(Answer.objects.filter(question=self))
        data = []
        random.shuffle(answer_objs)
        for answer_obj in answer_objs:
            data.append(
                {"answer": answer_obj.answer, "is_correct": answer_obj.is_correct}
            )
        return data


class Answer(models.Model):
    question = models.ForeignKey(
        Question, related_name="question_answer", on_delete=models.CASCADE
    )
    answer = models.CharField(max_length=100)
    is_correct = models.BooleanField(default=False)

    def __str__(self) -> str:
        return self.answer

import random

from django.db import models
from django.urls import reverse
from django.contrib.auth.models import User


class Student(models.Model):
    """Расширенная таблица юзеров"""

    class Meta:
        verbose_name = "Пользователи"
        verbose_name_plural = "Пользователи"

    user = models.OneToOneField(
        User, on_delete=models.CASCADE, verbose_name="Пользователь из стандарта"
    )
    points = models.IntegerField(default=0, verbose_name="Очки")

    def __str__(self):
        return "Profile for user {}".format(self.user.username)


class NameTest(models.Model):
    """таблица названий тестов"""

    class Meta:
        verbose_name = "Название теста"
        verbose_name_plural = "Название тестов"

    name = models.CharField(max_length=100, verbose_name="Название теста")
    img = models.ImageField(
        verbose_name="Превью теста", blank=True, upload_to="images/test/"
    )
    user_done = models.ManyToManyField(Student, verbose_name="Юзеры прошедшие тест")

    def __str__(self) -> str:
        return self.name


class Article(models.Model):
    """Статьи"""

    class Meta:
        verbose_name = "Статья"
        verbose_name_plural = "Статьи"

    title = models.CharField(max_length=500, verbose_name="Заголовок")
    text = models.TextField(verbose_name="Текст статьи")
    points = models.IntegerField(
        default=0, verbose_name="Очки за прочтение статьи (не работает)"
    )
    img = models.ImageField(
        verbose_name="Превью статьи", blank=True, upload_to="images/article/"
    )
    name_test = models.ForeignKey(
        NameTest,
        related_name="article_category",
        on_delete=models.CASCADE,
        verbose_name="Имя теста",
    )

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("article_detail", kwargs={"pk": self.pk})


class Question(models.Model):
    """вопросы - ссылаются на имена"""

    class Meta:
        verbose_name = "Вопрос"
        verbose_name_plural = "Вопросы"

    name_test = models.ForeignKey(
        NameTest,
        related_name="question_test",
        on_delete=models.CASCADE,
        verbose_name="Название теста",
    )
    question = models.CharField(max_length=100, verbose_name="Вопрос")
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
    """ответы - ссылаються на вопросы в обе стороны"""

    class Meta:
        verbose_name = "Ответ"
        verbose_name_plural = "Ответы"

    question = models.ForeignKey(
        Question,
        related_name="question_answer",
        on_delete=models.CASCADE,
        verbose_name="Вопрос",
    )
    answer = models.CharField(max_length=100, verbose_name="Ответ")
    is_correct = models.BooleanField(default=False, verbose_name="Правильный ответ")

    def __str__(self) -> str:
        return self.answer

from django.db import models
from django.contrib import admin
from django.contrib.auth.models import User
import datetime
from jsonfield import JSONField

class player(models.Model):
    user = models.OneToOneField(User)
    name = models.CharField(max_length=128)
    max_level = models.IntegerField(default=1)
    score = models.IntegerField(default=0)
    rank = models.IntegerField(default=0)
    timestamp = models.DateTimeField()

    def __str__(self):
        return self.name


class level(models.Model):
    l_number = models.IntegerField()
    puzzle = models.ImageField(upload_to = 'images',default='images/level1.jpg')
    image = models.FileField(upload_to = 'images',default='images/level12.jpg')
    text = models.TextField()
    answer = models.CharField(max_length=200)
    numuser = models.IntegerField(default=0)
    accuracy = models.FloatField(default=0)
    wrong = models.IntegerField(default=0)

    def __str__(self):
        return self.text

class dimension1(models.Model):
    a = models.CharField(max_length=20)
    iMinX = models.IntegerField()
    iMinY = models.IntegerField()
    iMaxX = models.IntegerField()
    iMaxY = models.IntegerField()
    ob = models.IntegerField(default=0)

    key=models.ForeignKey(level)

    def __str__(self):
        return self.a

class dimension2(models.Model):
    b = models.CharField(max_length=20)
    iMinX = models.IntegerField()
    iMinY = models.IntegerField()
    iMaxX = models.IntegerField()
    iMaxY = models.IntegerField()
    ob = models.IntegerField(default=1)


    key=models.ForeignKey(level)

    def __str__(self):
        return self.b


class dimension3(models.Model):
    c = models.CharField(max_length=20)
    iMinX = models.IntegerField()
    iMinY = models.IntegerField()
    iMaxX = models.IntegerField()
    iMaxY = models.IntegerField()
    ob = models.IntegerField(default=2)


    key=models.ForeignKey(level)

    def __str__(self):
        return self.c



class dimension4(models.Model):
    d = models.CharField(max_length=20)
    iMinX = models.IntegerField()
    iMinY = models.IntegerField()
    iMaxX = models.IntegerField()
    iMaxY = models.IntegerField()
    ob = models.IntegerField(default=3)


    key=models.ForeignKey(level)

    def __str__(self):
        return self.d

class dimension5(models.Model):
    e = models.CharField(max_length=20)
    iMinX = models.IntegerField()
    iMinY = models.IntegerField()
    iMaxX = models.IntegerField()
    iMaxY = models.IntegerField()
    ob = models.IntegerField(default=4)


    key=models.ForeignKey(level)

    def __str__(self):
        return self.e

class dimension6(models.Model):
    f = models.CharField(max_length=20)
    iMinX = models.IntegerField()
    iMinY = models.IntegerField()
    iMaxX = models.IntegerField()
    iMaxY = models.IntegerField()
    ob = models.IntegerField(default=5)


    key=models.ForeignKey(level)

    def __str__(self):
        return self.f

class dimension7(models.Model):
    g = models.CharField(max_length=20)
    iMinX = models.IntegerField()
    iMinY = models.IntegerField()
    iMaxX = models.IntegerField()
    iMaxY = models.IntegerField()
    ob = models.IntegerField(default=6)


    key=models.ForeignKey(level)

    def __str__(self):
        return self.g

class dimension8(models.Model):
    h = models.CharField(max_length=20)
    iMinX = models.IntegerField()
    iMinY = models.IntegerField()
    iMaxX = models.IntegerField()
    iMaxY = models.IntegerField()
    ob = models.IntegerField(default=7)

    
    key=models.ForeignKey(level)

    def __str__(self):
        return self.h


class Notif(models.Model):
    text = models.CharField(max_length=200)
    date = models.DateTimeField(datetime.datetime.now())

    def __str__(self):
        return self.text


class UserProfile(models.Model):
    user = models.OneToOneField(User)

    def __str__(self):
        return self.user.username


admin.site.register(player)
admin.site.register(level)
admin.site.register(UserProfile)

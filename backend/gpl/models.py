from django.db import models

# Create your models here.
class Users(models.Model):
    id = models.CharField(max_length=50, primary_key=True)
    username = models.CharField(max_length=30)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    birthday = models.DateField()
    email = models.EmailField()
    profile_picture = models.CharField(max_length=200, blank=True)
    gender = models.CharField(max_length=20)

class Lists(models.Model):
    list_name = models.CharField(max_length=50)
    list_owner = models.ForeignKey(Users, related_name="lists", on_delete=models.CASCADE)

class List_games(models.Model):
    list = models.ForeignKey(Lists, related_name="games", on_delete=models.CASCADE) 
    list_game = models.IntegerField()
    game_name = models.CharField(max_length=200)
    background_image = models.CharField(max_length=500)
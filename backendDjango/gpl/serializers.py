from rest_framework import serializers
from gpl.models import Users, Lists, List_games

class ListGamesSerializer( serializers.ModelSerializer ):
    class Meta:
        model = List_games
        fields = "__all__"

class ListsSerializer(serializers.ModelSerializer):
    games = ListGamesSerializer(read_only=True, many=True)
    class Meta:
        model =  Lists
        fields = "__all__"

class UsersSerializer(serializers.ModelSerializer):
    lists = ListsSerializer(read_only=True, many=True)
    class Meta: 
        model = Users
        fields = '__all__'

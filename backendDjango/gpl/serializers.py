from rest_framework import serializers
from gpl.models import Users, Lists, List_games

class UsersSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Users
        fields = '__all__'
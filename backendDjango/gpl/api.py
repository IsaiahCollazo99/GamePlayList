from gpl.models import Users, Lists, List_games
from rest_framework import viewsets, permissions
from .serializers import UsersSerializer, ListsSerializer, ListGamesSerializer

# Users Viewset
# A Viewset allows a way to create a CRUD api without defining methods for each
class UserViewSet( viewsets.ModelViewSet ):
    queryset = Users.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = UsersSerializer

class ListsViewSet ( viewsets.ModelViewSet ):
    queryset = Lists.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ListsSerializer

class ListGamesViewSet ( viewsets.ModelViewSet ):
    queryset = List_games.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ListGamesSerializer
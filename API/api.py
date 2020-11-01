from API.models import Users, Lists, List_games
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from .serializers import UsersSerializer, ListsSerializer, ListGamesSerializer

# Users Viewset
# A Viewset allows a way to create a CRUD api without defining methods for each
class UserViewSet( viewsets.ModelViewSet ):
    queryset = Users.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = UsersSerializer

    def retrieve( self, request, *args, **kwargs ): 
        params = kwargs
        pk = params['pk']
        if pk == 'username':
            username = request.query_params["username"]
            users = Users.objects.filter(username=username)
            serializer = UsersSerializer(users, many=True)
            return Response(serializer.data)
        elif pk == "email":
            email = request.query_params["email"]
            users = Users.objects.filter(email=email)
            serializer = UsersSerializer(users, many=True)
            return Response(serializer.data)
        else:
            user = self.get_object()
            serializer = UsersSerializer(user)
            return Response(serializer.data)

class ListsViewSet ( viewsets.ModelViewSet ):
    queryset = Lists.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ListsSerializer

    def destroy ( self, request, *args, **kwargs ):
        list = self.get_object()
        serializer = self.get_serializer(list)
        print(serializer.data)
        deleted_data = serializer.data.copy()
        self.perform_destroy(list)
        return Response(deleted_data)

class ListGamesViewSet ( viewsets.ModelViewSet ):
    queryset = List_games.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ListGamesSerializer

    def create( self, request ):
        data = request.data

        List_games.objects.create(
            list=Lists.objects.get(id=data["list"]), list_game=data["list_game"], 
            game_name=data["game_name"], background_image=data["background_image"]
        )
        
        return Response({"message": "Added game to list"})

    def destroy ( self, request, *args, **kwargs ):
        params = kwargs
        params_list = params['pk'].split("-")
        game = List_games.objects.filter(list=params_list[0], list_game=params_list[1])
        game.delete()
        return Response({"message": "Successfully removed game"})
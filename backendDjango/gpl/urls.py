from rest_framework import routers
from rest_framework_nested import routers as nestedRouters
from django.urls import include, path
from django.conf.urls import url
from .api import UserViewSet, ListGamesViewSet, ListsViewSet
from .views import firstFunction

router = routers.SimpleRouter()

router.register("api/users", UserViewSet, "users")
router.register("api/lists", ListsViewSet, "lists")
router.register("api/listGames", ListGamesViewSet, "listGames")

urlpatterns = router.urls
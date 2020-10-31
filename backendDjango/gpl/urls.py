from rest_framework import routers
from rest_framework_nested import routers as nestedRouters
from django.urls import include
from .api import UserViewSet, ListGamesViewSet, ListsViewSet

router = routers.SimpleRouter()

router.register("api/users", UserViewSet, "users")
router.register("api/lists", ListsViewSet, "lists")
router.register("api/listGames", ListGamesViewSet, "listGames")

urlpatterns = router.urls
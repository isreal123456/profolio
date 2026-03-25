from django.urls import path

from .views import home, live_status

app_name = "core"

urlpatterns = [
    path("", home, name="home"),
    path("live-status/", live_status, name="live_status"),
]

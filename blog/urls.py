from django.urls import path

from .views import post_detail, post_list

app_name = "blog"

urlpatterns = [
    path("", post_list, name="list"),
    path("<slug:slug>/", post_detail, name="detail"),
]

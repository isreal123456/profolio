from django.urls import path

from .views import project_detail, project_list

app_name = "projects"

urlpatterns = [
    path("", project_list, name="list"),
    path("<slug:slug>/", project_detail, name="detail"),
]

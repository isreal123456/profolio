from django.db.models import Max
from django.http import JsonResponse
from django.shortcuts import render

from blog.models import Post
from projects.models import Project


def home(request):
    featured_projects = Project.objects.filter(is_published=True, featured=True)[:3]
    latest_posts = Post.objects.filter(is_published=True)[:3]
    project_updated = Project.objects.filter(is_published=True).aggregate(Max("updated_at"))["updated_at__max"]
    post_updated = Post.objects.filter(is_published=True).aggregate(Max("updated_at"))["updated_at__max"]

    context = {
        "featured_projects": featured_projects,
        "latest_posts": latest_posts,
        "project_updated": project_updated,
        "post_updated": post_updated,
    }
    return render(request, "core/home.html", context)


def live_status(request):
    project_updated = Project.objects.filter(is_published=True).aggregate(Max("updated_at"))["updated_at__max"]
    post_updated = Post.objects.filter(is_published=True).aggregate(Max("updated_at"))["updated_at__max"]
    return JsonResponse(
        {
            "project_updated": project_updated.isoformat() if project_updated else None,
            "post_updated": post_updated.isoformat() if post_updated else None,
        }
    )

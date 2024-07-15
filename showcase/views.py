from django.shortcuts import render

# Views here.

from django.shortcuts import render
from .models import Project

def home(request):
    return render(request, 'showcase/home.html')


def projects(request):
    category = request.GET.get('category')
    if category:
        projects = Project.objects.filter(category=category)
    else:
        projects = Project.objects.all()
    return render(request, 'showcase/projects.html', {'projects': projects})

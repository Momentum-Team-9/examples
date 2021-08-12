from django.shortcuts import render
from .models import Game

# Create your views here.
def list_games(request):
    games = Game.objects.all()
    return render(request, "gamefreeshelf/list_games.html", {"games": games} )
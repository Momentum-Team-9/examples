from django.db import models

# Create your models here.
class Game(models.Model):
    title = models.CharField(max_length=255, null=True, blank=True)
    desc = models.TextField(null=True, blank=True)
    website = models.CharField(max_length=255, null=True, blank=True) # url from user
    cover_art = models.CharField(max_length=255, null=True, blank=True) # url from user
    release_date = models.DateField(auto_now=False, auto_now_add=False)
    developer = models.ForeignKey(
        'Developer',
        on_delete=models.CASCADE,
    )
    platform = models.CharField(max_length=255, null=True, blank=True)


class Developer(models.Model):
    name = models.CharField(max_length=255, null=True, blank=True)
    headquarters = models.CharField(max_length=255, null=True, blank=True)
    num_employees = models.BigIntegerField()
    website = models.CharField(max_length=255, null=True, blank=True) # url from user
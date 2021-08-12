# Generated by Django 3.2.6 on 2021-08-12 18:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Developer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=255, null=True)),
                ('headquarters', models.CharField(blank=True, max_length=255, null=True)),
                ('num_employees', models.BigIntegerField()),
                ('title', models.CharField(blank=True, max_length=255, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Game',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=255, null=True)),
                ('desc', models.TextField(blank=True, null=True)),
                ('website', models.CharField(blank=True, max_length=255, null=True)),
                ('cover_art', models.CharField(blank=True, max_length=255, null=True)),
                ('release_date', models.DateField()),
                ('platform', models.CharField(blank=True, max_length=255, null=True)),
                ('developer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gamefreeshelf.developer')),
            ],
        ),
    ]

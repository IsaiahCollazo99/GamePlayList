# Generated by Django 3.1.2 on 2020-10-31 23:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0005_auto_20201031_1956'),
    ]

    operations = [
        migrations.AlterField(
            model_name='list_games',
            name='list_game',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='users',
            name='id',
            field=models.CharField(max_length=50, primary_key=True, serialize=False),
        ),
    ]
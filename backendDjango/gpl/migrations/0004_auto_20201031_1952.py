# Generated by Django 3.1.2 on 2020-10-31 19:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('gpl', '0003_lists_list_owner'),
    ]

    operations = [
        migrations.RenameField(
            model_name='list_games',
            old_name='list_id',
            new_name='list',
        ),
    ]

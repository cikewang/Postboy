# Generated by Django 2.0.1 on 2018-01-19 09:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('page', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='test',
            old_name='body',
            new_name='bodies',
        ),
        migrations.RenameField(
            model_name='test',
            old_name='body_desc',
            new_name='bodies_desc',
        ),
    ]
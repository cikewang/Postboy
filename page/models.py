from django.db import models

# Create your models here.

class Test(models.Model):
    project_id = models.IntegerField()
    action_method = models.CharField(max_length=10)
    api = models.CharField(max_length=200)
    headers = models.CharField(max_length=200)
    bodies = models.CharField(max_length=200)
    cookies = models.CharField(max_length=200)
    headers_desc = models.CharField(max_length=200)
    bodies_desc = models.CharField(max_length=200)
    cookies_desc = models.CharField(max_length=200)
    add_time = models.DateTimeField()
    update_time = models.DateTimeField()

class Responses(models.Model) :
    api_id = models.IntegerField()
    text = models.TextField()
    text_md5 = models.CharField(max_length=40)
    status = models.IntegerField()
    runtime = models.IntegerField()
    messages = models.CharField(max_length=200)
    add_time = models.DateTimeField()
    update_time = models.DateTimeField()

class Report(models.Model):
    report_name = models.CharField(max_length=40)
    api_id = models.IntegerField()
    text = models.TextField()
    text_md5 = models.CharField(max_length=40)
    status = models.IntegerField()
    runtime = models.IntegerField()
    messages = models.CharField(max_length=200)
    add_time = models.DateTimeField()

class Project(models.Model):
    project_name = models.CharField(max_length=20)
    project_description = models.CharField(max_length=200)
    project_file = models.CharField(max_length=200)
    add_time = models.DateTimeField()
    update_time = models.DateTimeField()
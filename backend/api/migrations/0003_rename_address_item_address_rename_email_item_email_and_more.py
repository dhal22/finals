# Generated by Django 4.2.11 on 2024-07-16 17:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_rename_email_item_email_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='item',
            old_name='Address',
            new_name='address',
        ),
        migrations.RenameField(
            model_name='item',
            old_name='Email',
            new_name='email',
        ),
        migrations.RenameField(
            model_name='item',
            old_name='Phone',
            new_name='phone',
        ),
    ]

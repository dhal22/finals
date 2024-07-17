from django.db import models


class Item(models.Model):
        first_name = models.CharField(max_length=100)
        middle_name = models.CharField(max_length=100, null=True, blank=True)
        last_name = models.CharField(max_length=100)
        address = models.CharField(max_length=200, blank=True, null=True)
        phone = models.CharField(max_length=20, blank=True, null=True)
        email = models.EmailField(blank=True, null=True)
        date_of_birth = models.DateField(blank=True, null=True)
        place_of_birth = models.CharField(max_length=100, blank=True, null=True)
        sex = models.CharField(max_length=10, blank=True, null=True)
        civil_status = models.CharField(max_length=20, blank=True, null=True)
        spouse_surname = models.CharField(max_length=100, blank=True, null=True)
        spouse_first_name = models.CharField(max_length=100, blank=True, null=True)
        spouse_middle_name = models.CharField(max_length=100, blank=True, null=True)
        spouse_name_ext = models.CharField(max_length=10, blank=True, null=True)
        spouse_occupation = models.CharField(max_length=100, blank=True, null=True)
        spouse_employer = models.CharField(max_length=100, blank=True, null=True)
        spouse_business_address = models.CharField(max_length=200, blank=True, null=True)
        spouse_telephone = models.CharField(max_length=20, blank=True, null=True)
        father_surname = models.CharField(max_length=10, blank=True, null=True)
        father_first_name = models.CharField(max_length=10, blank=True, null=True)
        father_middle_name = models.CharField(max_length=10, blank=True, null=True)
        mother_maiden_name = models.CharField(max_length=10, blank=True, null=True)
        mother_surname = models.CharField(max_length=10, blank=True, null=True)
        mother_first_name = models.CharField(max_length=10, blank=True, null=True)
        mother_middle_name = models.CharField(max_length=10, blank=True, null=True)
        child1 = models.CharField(max_length=100, null=True, blank=True)
        child2 = models.CharField(max_length=100, null=True, blank=True)
        child3 = models.CharField(max_length=100, null=True, blank=True)
        child4 = models.CharField(max_length=100, null=True, blank=True)
        elementary_school_name = models.CharField(max_length=10, blank=True, null=True)
        secondary_school_name= models.CharField(max_length=10, blank=True, null=True)
        college_school_name= models.CharField(max_length=10, blank=True, null=True)

        def __str__(self):
            return f"{self.first_name} {self.surname}"

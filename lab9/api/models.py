from django.db import models

# Create your models here.
class Company(models.Model):
    name = models.CharField(max_length=255, null=True, blank=True)
    description = models.TextField()
    city = models.CharField(max_length=255, null=True, blank=True)
    address = models.TextField()

    class Meta:
        verbose_name: 'Company'
        verbose_name_plural = 'Companies'

    def __str__(self):
        return f'{self.id}: {self.name}'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address
        }
class Vacancy(models.Model):
    name = models.CharField(max_length=255, null=True, blank=True)
    description = models.TextField()
    salary = models.FloatField(null=True, blank=True)
    company = models.ForeignKey(Company, on_delete=models.CASCADE, null=True)

    class Meta:
        verbose_name = 'Vacancy'
        verbose_name_plural = 'Vacancies'
        ordering = ('salary',)
    def __str__(self):
        return f'{self.id}: {self.name}'
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'salary': self.salary,
            'company': self.company
        }
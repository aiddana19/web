from django.urls import path
from api.views import company_list,company_detail
from core.views import vacancy_detail, vacancy_list

urlpatterns = [
    path('companies', company_list),
    path('companies/<int:company_id>', company_detail),
    path('vacancies/', vacancy_list),
    path('vacancies/<int:vacancy_id>/', vacancy_detail)
]
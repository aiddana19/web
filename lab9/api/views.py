from django.shortcuts import render
import json
from api.models import Company, Vacancy
from django.http.response import JsonResponse

def company_list(request):
    if request.method == 'GET':
        # categories = Category.objects.filter(name='category 5')
        # categories = Category.objects.filter(name__startswith='cat')
        # categories = Category.objects.filter(name__endswith='ed')
        # categories = Category.objects.filter(name__contains='update')
        # categories = Category.objects.filter(id__in=[1, 2, 3, 4])
        # categories = Category.objects.filter(name__contains='5').order_by('-id')
        companies = Company.objects.all()
        companies_json = [company.to_json() for company in companies]
        return JsonResponse(companies_json, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        try:
            company = Company.objects.create(name=data['name'])
        except Exception as e:
            return JsonResponse({'message': str(e)})

        return JsonResponse(company.to_json())


# @csrf_exempt
def company_detail(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)

    if request.method == 'GET':
        return JsonResponse(company.to_json())
    elif request.method == 'PUT':
        data = json.loads(request.body)
        company.name = data['name']
        company.save()
        return JsonResponse(company.to_json())
    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({'message': 'deleted'}, status=204)



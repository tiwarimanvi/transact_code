# appname/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Project
from .serializers import ProjectSerializer

class ProjectUploadAPIView(APIView):
    def post(self, request, format=None):
        serializer = ProjectSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, *args, **kwargs):
        key = kwargs['pk']
        column_name_values = Project.objects.values_list('id', flat=True)

        # Convert the queryset to a list
        column_name_list = list(column_name_values)
        if key in column_name_list:
            product = Project.objects.get(id=key)
            serializer = ProjectSerializer(product)
            return Response(serializer.data)
        else:
            product = Project.objects.all().order_by('-id')
            serializer = ProjectSerializer(product, many=True)
            return Response(serializer.data)
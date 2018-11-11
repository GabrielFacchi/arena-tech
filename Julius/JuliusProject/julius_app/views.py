from .models import ModelEconomizou,ModelDetalhes
from .serializer import EconomizouSerializer,DetalhesSerializer

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.renderers import JSONRenderer


class EconomizouListView(APIView):
    serializer_class = EconomizouSerializer
    renderer_classes = (JSONRenderer, )

    def get(self, request, format=None):
        serializer = self.serializer_class(ModelEconomizou.objects.all(), many=True)
        return Response(serializer.data)

class EconomizouView(APIView):
    def get(self, request, pk, format=None):
        user = ModelEconomizou.objects.get(pk=pk)
        serializer = EconomizouSerializer(user)
        return Response(serializer.data)
'''    
class EconomizouTipoView(APIView):
    def get(self, request, tipo, format=None):
        user = ModelEconomizou.objects.filter(tipo=tipo)
        serializer = EconomizouSerializer(user)
        return Response(serializer.data)
'''    
class DetalhesListView(APIView):
    serializer_class = DetalhesSerializer

    def get(self, request, format=None):
        serializer = self.serializer_class(ModelDetalhes.objects.all(), many=True)
        return Response(serializer.data)


class DetalhesView(APIView):
    def get(self, request, pk, format=None):
        user = ModelDetalhes.objects.get(pk=pk)
        serializer = DetalhesSerializer(user)
        return Response(serializer.data)
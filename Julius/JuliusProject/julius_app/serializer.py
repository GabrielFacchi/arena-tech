# -*- coding: utf-8 -*-
"""
Created on Sat Nov 10 17:07:12 2018

@author: Joao Junkes
"""

from rest_framework import serializers
from .models import ModelEconomizou,ModelDetalhes

class EconomizouSerializer(serializers.ModelSerializer):

    class Meta:
        model = ModelEconomizou
        depth = 1
        fields = ['id','descricao','valor']
        
class DetalhesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ModelDetalhes
        depth = 1
        fields = ['id','titulo','valor','local']
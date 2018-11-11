# coding: utf-8
from django.db import models


class ModelEconomizou(models.Model):
    descricao = models.TextField(default='', max_length=250, verbose_name='descricao')
#    tipo = models.CharField(max_length=50, verbose_name='tipo')
    valor = models.FloatField(max_length=20, verbose_name='valor')

    def __str__(self):
        return self.descricao

    class Meta:
        verbose_name = 'ModeloEconomizou'      
        
class ModelDetalhes(models.Model):
    titulo = models.CharField(max_length=50, verbose_name='titulo')
    valor = models.FloatField(max_length=20, verbose_name='valor')
    local = models.CharField(max_length=50, verbose_name='local')

    def __str__(self):
        return self.titulo

    class Meta:
        verbose_name = 'ModeloDetalhes'

# -*- coding: utf-8 -*-
"""
Created on Sat Nov 10 17:11:03 2018

@author: Joao Junkes
"""

from django.conf.urls import url
from julius_app.views import EconomizouListView
from julius_app.views import EconomizouView
from julius_app.views import DetalhesListView
from julius_app.views import DetalhesView
#from julius_app.views import EconomizouTipoView

helper_patterns = [
    url(r'^economizou/$', EconomizouListView.as_view(), name='economizou'),
    url(r'^economizou/(?P<pk>[0-9]+)/$', EconomizouView.as_view(), name='get_economizou'),
    #url(r'^economizouTipo/$', EconomizouTipoView.as_view(), name='get_economizouTipo'),
    url(r'^detalhes/$', DetalhesListView.as_view(), name='detalhes'),
    url(r'^detalhes/(?P<pk>[0-9]+)/$', DetalhesView.as_view(), name='get_detalhes')
]

urlpatterns = helper_patterns
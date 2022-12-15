import datetime
import json
from django.http import JsonResponse
from django.shortcuts import render, redirect
from  rest_producto.utils import *

from rest_producto.utils import cartData


# from requests import request
from .models import *
from .forms import ClienteForm, ContactForm, DireccionForm
from django.urls import reverse
from django.core.mail import EmailMessage
from django.contrib.auth.forms import UserCreationForm
from rest_producto.models import *
from django.shortcuts import render
from rest_producto.models import *

from core.models import *
from django.shortcuts import redirect
from core import *
from django.shortcuts import redirect
from django.shortcuts import render, HttpResponse


# Create your views here.

def index (request):

    return render(request, 'core/index.html')


def tienda (request):

    return render(request, 'core/tienda.html')


def carrito (request):

    return render(request,'core/carrito.html')






def nosotros(request):

    return render(request, 'core/nosotros.html')





def datos_cliente(request):

    clientes= Cliente.objects.all()
    

    datos = {
        'clientes' : clientes
        
    }
    return render(request, 'core/datos_cliente.html', datos)

    



def contact(request):
    contact_form = ContactForm()

    if request.method == "POST":
        contact_form = ContactForm(data=request.POST)
        if contact_form.is_valid():
            name = request.POST.get('name', '')
            email = request.POST.get('email', '')
            content = request.POST.get('content', '')

            # Creamos el correo
            email = EmailMessage(
                "Asistencia: Nuevo mensaje de contacto",
                "De {} <{}>\n\nEscribió:\n\n{}".format(name, email, content),
                "no-contestar@inbox.mailtrap.io",
                ["an.munoze@duocuc.cl"],
                reply_to=[email]
            )

            # Lo enviamos y redireccionamos
            try:
                email.send()
                # Todo ha ido bien, redireccionamos a OK
                return redirect(reverse('contact')+"?ok")
            except:
                # Algo no ha ido bien, redireccionamos a FAIL
                return redirect(reverse('contact')+"?fail")
    
    return render(request, "core/contact.html",{'form':contact_form})






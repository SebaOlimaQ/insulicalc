# insulicalc

Descripción
El Contador de Insulina es una aplicación web diseñada para ayudar a personas con diabetes tipo 1 a calcular de manera precisa la dosis de insulina necesaria, basada en sus niveles de glucemia y la cantidad de carbohidratos que planean consumir. La aplicación permite ajustar ratios de insulina para diferentes periodos del día, ofreciendo un control más personalizado.

Características
Cálculo preciso de la dosis de insulina basada en el nivel actual de glucemia y los carbohidratos consumidos.
Personalización de ratios de insulina en hasta 6 periodos de 4 horas durante el día.
Funcionalidad de registro y login de usuarios para guardar preferencias y ratios.
Panel de control para monitorear los cálculos y ajustes de dosis de manera fácil.
Tecnologías Utilizadas
Frontend: Angular
Backend: Django
Base de Datos: MySQL


## Para levantar Angular
* instalar NPM
	* se instala junto nodejs https://nodejs.org/es
	* npm install -g npm
* saber version
	* npm -v
* actualizar NPM
	* npm install -g npm@latest
	* npm cache clean --force
	* npm set audit false
* para compilar:
 * ng serve --proxy-config
 * "npm i sweetalert2" comando para installar sweetalert2 en angular
 * para contacto "npm install --save @emailjs/browser"
 
## Para levantar Django
 * en carpeta backend: python -m venv venv
 * en carpeta venv/Script: activate
 * en carpeta backend: pip install -r ".\requirements.txt"
 * desde el proyecto (crear la base de datos ):

* python manage.py makemigrations

* python manage.py migrate

* python manage.py createsuperuser
	(admin - admin@email.com - 12345678)

* python manage.py runserver

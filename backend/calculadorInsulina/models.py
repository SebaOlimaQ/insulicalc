from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission
from django.conf import settings
from django.dispatch import receiver
from django.db.models.signals import post_save
from rest_framework.authtoken.models import Token

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)

# Clase Usuario heredando de AbstractUser
ROLES = (
    ('medico', 'Médico'),
    ('paciente', 'Paciente'),
)

class Usuario(AbstractUser):
    rol = models.CharField(max_length=10, choices=ROLES)

    def __str__(self):
        return f"{self.username} - {self.get_rol_display()}"
    
    groups = models.ManyToManyField(
        Group,
        related_name='usuario_groups',  # Cambiado para ser único
        blank=True,
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name='usuario_permissions',  # Cambiado para ser único
        blank=True,
    )

# Clase Médico que hereda de Usuario
class Medico(models.Model):
    usuario = models.OneToOneField(Usuario, on_delete=models.CASCADE, related_name='medico_profile')
    dni = models.CharField(max_length=15, unique=True)
    especialidad = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    localidad = models.CharField(max_length=100)

    def __str__(self):
        return f"Dr. {self.usuario.first_name} {self.usuario.last_name} ({self.especialidad})"

# Clase Paciente que hereda de Usuario
class Paciente(models.Model):
    usuario = models.OneToOneField(Usuario, on_delete=models.CASCADE, related_name='paciente_profile')
    fecha_nac = models.DateField()
    fecha_debut = models.DateField()
    email = models.EmailField(unique=True)
    localidad = models.CharField(max_length=100)
    medico = models.ForeignKey(Medico, on_delete=models.SET_NULL, null=True, related_name='pacientes')

    def __str__(self):
        return f"{self.usuario.first_name} {self.usuario.last_name}"

# Clase Tratamiento
class Tratamiento(models.Model):
    paciente = models.ForeignKey(Paciente, on_delete=models.CASCADE, related_name='tratamientos')
    fecha_inicio = models.DateField()
    basal = models.DecimalField(max_digits=5, decimal_places=2)
    monitoreo = models.BooleanField(default=False)
    insu_rapida = models.DecimalField(max_digits=5, decimal_places=2)
    peso = models.DecimalField(max_digits=5, decimal_places=2)
    altura = models.DecimalField(max_digits=5, decimal_places=2)
    fecha_fin = models.DateField(null=True, blank=True)
    activo = models.BooleanField(default=True)

    def __str__(self):
        return f"Tratamiento de {self.paciente.usuario.first_name} {self.paciente.usuario.last_name} - {'Activo' if self.activo else 'Finalizado'}"

# Clase CorreccionPorGS
class CorreccionPorGS(models.Model):
    tratamiento = models.ForeignKey(Tratamiento, on_delete=models.CASCADE, related_name='correcciones_gs')
    hora_inicio = models.TimeField()
    hora_fin = models.TimeField()
    correccion_gs = models.DecimalField(max_digits=5, decimal_places=2)

    def __str__(self):
        return f"Corrección por GS {self.correccion_gs} para {self.tratamiento.paciente.usuario.first_name}"

# Clase RatioPorHC
class RatioPorHC(models.Model):
    tratamiento = models.ForeignKey(Tratamiento, on_delete=models.CASCADE, related_name='ratios_hc')
    hora_inicio = models.TimeField()
    hora_fin = models.TimeField()
    ratio_hc = models.DecimalField(max_digits=5, decimal_places=2)

    def __str__(self):
        return f"Ratio HC {self.ratio_hc} para {self.tratamiento.paciente.usuario.first_name}"

# Clase HidratosDeCarbono
class HidratosDeCarbono(models.Model):
    tipo_alimento = models.CharField(max_length=100)
    nombre_alimento = models.CharField(max_length=100)
    porcion = models.DecimalField(max_digits=5, decimal_places=2)
    gramos_hc = models.DecimalField(max_digits=5, decimal_places=2)

    def __str__(self):
        return f"{self.nombre_alimento} - {self.gramos_hc}g HC"

# Clase RegistroDeCalculo
class RegistroDeCalculo(models.Model):
    tratamiento = models.ForeignKey(Tratamiento, on_delete=models.CASCADE, related_name='registros_calculo')
    fecha = models.DateField()
    hora = models.TimeField()
    gs = models.DecimalField(max_digits=5, decimal_places=2)  # Glucosa sanguínea
    calculo_hc = models.ManyToManyField(HidratosDeCarbono)
    gramos_hc_total = models.DecimalField(max_digits=5, decimal_places=2)
    insulina_necesaria = models.DecimalField(max_digits=5, decimal_places=2)

    def __str__(self):
        return f"Registro de {self.fecha} - {self.hora} para {self.tratamiento.paciente.usuario.first_name}"

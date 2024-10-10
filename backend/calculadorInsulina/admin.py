from django.contrib import admin
from .models import Usuario, Medico, Paciente, Tratamiento, CorreccionPorGS, RatioPorHC, HidratosDeCarbono, RegistroDeCalculo

@admin.register(Usuario)
class UsuarioAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'rol', 'first_name', 'last_name')
    search_fields = ('username', 'email', 'first_name', 'last_name')

@admin.register(Medico)
class MedicoAdmin(admin.ModelAdmin):
    list_display = ('usuario', 'dni', 'especialidad', 'email', 'localidad')
    search_fields = ('usuario__username', 'dni', 'especialidad')

@admin.register(Paciente)
class PacienteAdmin(admin.ModelAdmin):
    list_display = ('usuario', 'fecha_nac', 'fecha_debut', 'email', 'localidad', 'medico')
    search_fields = ('usuario__username', 'email', 'localidad')

@admin.register(Tratamiento)
class TratamientoAdmin(admin.ModelAdmin):
    list_display = ('paciente', 'fecha_inicio', 'basal', 'insu_rapida', 'peso', 'altura', 'activo')
    search_fields = ('paciente__usuario__username', 'fecha_inicio')

@admin.register(CorreccionPorGS)
class CorreccionPorGSAdmin(admin.ModelAdmin):
    list_display = ('tratamiento', 'hora_inicio', 'hora_fin', 'correccion_gs')
    search_fields = ('tratamiento__paciente__usuario__username',)

@admin.register(RatioPorHC)
class RatioPorHCAdmin(admin.ModelAdmin):
    list_display = ('tratamiento', 'hora_inicio', 'hora_fin', 'ratio_hc')
    search_fields = ('tratamiento__paciente__usuario__username',)

@admin.register(HidratosDeCarbono)
class HidratosDeCarbonoAdmin(admin.ModelAdmin):
    list_display = ('tipo_alimento', 'nombre_alimento', 'porcion', 'gramos_hc')
    search_fields = ('nombre_alimento',)

@admin.register(RegistroDeCalculo)
class RegistroDeCalculoAdmin(admin.ModelAdmin):
    list_display = ('tratamiento', 'fecha', 'hora', 'gs', 'gramos_hc_total', 'insulina_necesaria')
    search_fields = ('tratamiento__paciente__usuario__username',)

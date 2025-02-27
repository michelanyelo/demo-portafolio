import { defineStore } from 'pinia' // Importamos la función `defineStore` de Pinia para crear un store.
import { ref, onMounted } from 'vue' // Importamos `ref` para manejar estados reactivos y `onMounted` para ejecutar código al montar el componente.

// Definimos el store usando `defineStore`. El primer argumento es el ID del store ('projects'), y el segundo es una función que retorna el estado y las acciones.
export const useProjectsStore = defineStore('projects', () => {
  // Creamos una variable reactiva `projects` inicializada como un objeto vacío.
  // Esta variable almacenará los datos de los proyectos una vez se carguen.
  const projects = ref({})

  // Función asíncrona para cargar los datos de los proyectos desde un archivo JSON.
  const fetchProjects = async () => {
    try {
      // Realizamos una solicitud HTTP GET al archivo JSON ubicado en '/db/projects.json'.
      const response = await fetch('/db/projects.json')

      // Convertimos la respuesta a formato JSON y actualizamos el valor de `projects`.
      projects.value = await response.json()

      console.log('Desde el fetch:', projects.value)
    } catch (error) {
      // Si ocurre un error durante la solicitud, lo capturamos y mostramos en la consola.
      console.error('Error:', error)
    }
  }

  // Usamos el hook `onMounted` para ejecutar código cuando el store se monta.
  // En este caso, llamamos a `fetchProjects` para cargar los datos automáticamente al iniciar.
  onMounted(async () => {
    await fetchProjects() // Llamamos a la función `fetchProjects` para cargar los datos.
  })

  // Retornamos el estado (`projects`) y las acciones (`fetchProjects`) para que estén disponibles en el store.
  return {
    projects, // Estado reactivo que contiene los datos de los proyectos.
    fetchProjects, // Acción para cargar los datos manualmente si es necesario.
  }
})

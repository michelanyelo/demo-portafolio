<script setup>
import { useProjectsStore } from '@/stores/projects.js'
// Acceder al store
const projectsStore = useProjectsStore()
</script>

<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <!-- Mostrar un indicador de carga mientras se cargan los datos -->
    <div v-if="!Object.keys(projectsStore.projects).length" class="text-center text-gray-600">
      Cargando proyectos...
    </div>

    <!-- Contenido principal -->
    <div v-else>
      <!-- Proyectos de Frontend -->
      <h2 class="text-3xl font-bold text-gray-800 mb-6">Proyectos de Frontend</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="project in projectsStore.projects.frontend"
          :key="project.titulo"
          class="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg"
        >
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ project.titulo }}</h3>
            <p class="text-gray-600 mb-4">{{ project.descripcion }}</p>
            <div class="mb-4">
              <strong class="text-gray-700">Tecnologías:</strong>
              <ul class="list-disc list-inside text-gray-600">
                <li v-for="tech in project.tecnologias" :key="tech">{{ tech }}</li>
              </ul>
            </div>
            <div class="flex space-x-4">
              <a
                v-if="project.urlDemo"
                :href="project.urlDemo"
                target="_blank"
                class="text-blue-500 hover:text-blue-700"
              >
                Demo
              </a>
              <a
                v-if="project.urlRepositorio"
                :href="project.urlRepositorio"
                target="_blank"
                class="text-green-500 hover:text-green-700"
              >
                Repositorio
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Proyectos de Diseño Gráfico -->
      <h2 class="text-3xl font-bold text-gray-800 mt-12 mb-6">Proyectos de Diseño Gráfico</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="project in projectsStore.projects.graphicDesign"
          :key="project.titulo"
          class="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg"
        >
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ project.titulo }}</h3>
            <p class="text-gray-600 mb-4">{{ project.descripcion }}</p>
            <div class="mb-4">
              <strong class="text-gray-700">Herramientas:</strong>
              <ul class="list-disc list-inside text-gray-600">
                <li v-for="tool in project.herramientas" :key="tool">{{ tool }}</li>
              </ul>
            </div>
            <div class="flex space-x-4">
              <a
                v-if="project.urlDemo"
                :href="project.urlDemo"
                target="_blank"
                class="text-blue-500 hover:text-blue-700"
              >
                Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

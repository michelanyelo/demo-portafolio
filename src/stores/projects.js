import { defineStore } from 'pinia'
import { ref, onMounted } from 'vue'

export const useProjectsStore = defineStore('projects', () => {
  const projects = ref({})

  const fetchProjects = async () => {
    try {
      const response = await fetch('/db/projects.json')
      projects.value = await response.json()
      console.log('Desde el fetch:', projects.value)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  onMounted( async ()=>{
    await fetchProjects()
  })

  return {
    projects,
    fetchProjects,
  }
})

import { ref } from "vue"

export const useForm = () => {
  const items = ref([
    {
      label: 'Home',
      icon: 'pi pi-home',
    },
    {
      label: 'Features',
      icon: 'pi pi-star',
    },
    {
      label: 'Projects',
      icon: 'pi pi-search',
    },
  ])

  return {
    items,
  }
}

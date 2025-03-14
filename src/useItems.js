import axios from 'axios'
import { ref, computed } from 'vue'

const API_URL = 'https://631e7636e485f763.mokky.dev'

export function useItems() {
  const items = ref([])
  const favorites = ref([])
  const searchQuery = ref('')

  const fetchItems = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/items`)
      items.value = data
    } catch (err) {
      console.log('Ошибка получения товаров', err)
    }
  }

  const fetchFavorites = async () => {
    try {
      const { data: favorites } = await axios.get(`${API_URL}/favorites?_relations=items`)
      console.log('Данные избранного с сервера:', favorites)

      items.value = items.value.map((item) => {
        const favorite = favorites.find((fav) => fav.item.id === item.id)

        if (!favorite) {
          return {
            ...item,
            isFavorite: false,
            favoriteId: null
          }
        }

        return {
          ...item,
          isFavorite: true,
          favoriteId: favorite.id
        }
      })
      console.log('Товары после обновления статуса избранного:', items.value)
    } catch (err) {
      console.log('Ошибка получения фавов', err)
    }
  }

  const toggleFavorite = async (item) => {
    try {
      if (!item.isFavorite) {
        console.log('фаваю...!', item)

        const { data } = await axios.post('https://631e7636e485f763.mokky.dev/favorites', {
          item_id: item.id
        })

        item.isFavorite = true
        item.favoriteId = data.id
        favorites.value.push(item.id)
      } else {
        console.log('анфаваю...!', item)

        await axios.delete(`https://631e7636e485f763.mokky.dev/favorites/${item.favoriteId}`)
        item.isFavorite = false
        item.favoriteId = null
        favorites.value = favorites.value.filter((id) => id !== item.id)
      }
    } catch (err) {
      console.error('Ошибка при работе с избранным:', err)
    }
  }

  const searchItems = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/items?title=*${searchQuery.value}*`)
      items.value = data
    } catch (e) {
      console.error('Ошибка при поиске товаров:', e)
    }
  }

  const favoriteItems = computed(() => {
    return items.value.filter((item) => item.isFavorite)
  })

  return {
    items,
    favorites,
    searchQuery,
    fetchItems,
    fetchFavorites,
    toggleFavorite,
    searchItems,
    favoriteItems
  }
}

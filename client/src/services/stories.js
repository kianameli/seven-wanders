import api from './apiConfig'

export const getStories = async () => {
  try {
      const response = await api.get('/stories')
      return response.data
  } catch (error) {
      throw error
  }
}

export const getStory = async id => {
  try {
      const response = await api.get(`/stories/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const createStory = async story => {
  try {
      const response = await api.post('/story-create', story)
      return response.data
  } catch (error) {
      throw error
  }
}

export const updateStory = async (id, story) => {
  try {
      const response = await api.put(`/stories/${id}`, story)
      return response.data
  } catch (error) {
      throw error
  }
}

export const deleteStory = async id => {
  try {
      const response = await api.delete(`/stories/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}
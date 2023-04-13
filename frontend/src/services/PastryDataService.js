import http from '@/http-common'

/**
 * Pastry Data Service
 */
class PastryDataService {
  // getAll data
  getAll () {
    return http.get('/pastry')
  }

  // get data by id
  get (id) {
    return http.get(`/pastry/${id}`)
  }

  // create
  create (data) {
    return http.post('/pastry', data)
  }

  // update
  update (id, data) {
    return http.put(`/pastry/${id}`, data)
  }

  // delete
  delete (id) {
    return http.delete(`/pastry/${id}`)
  }
}

export default new PastryDataService()

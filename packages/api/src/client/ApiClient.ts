import { Client } from '../types/apiClient'

export class ApiClient {
  constructor(private baseUrl: string) {}

  getFeatures: Client['features']['getFeatures'] = async () => {
    const response = await fetch(`${this.baseUrl}/features`)

    if (!response.ok) {
      throw new ApiError('Failed to fetch features', 500)
    }

    return response.json()
  }

  addFeature: Client['features']['addFeature'] = async (payload) => {
    const response = await fetch(`${this.baseUrl}/features`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(payload)
    })

    if (!response.ok) {
      throw new ApiError('Failed to add feature', 500)
    }

    return response.json()
  }

  removeFeature: Client['features']['removeFeature'] = async (payload) => {
    const response = await fetch(this.baseUrl + '/features/' + payload.id, {
      headers: { 'Content-Type': 'application/json' },
      method: 'DELETE',
    })

    if (!response.ok) {
      throw new ApiError('Failed to remove feature', 500)
    }

    return response.json()
  }
}

export class ApiError extends Error {
  constructor(
    message: string,
    public statusCode: number,
  ) {
    super(message)
  }
}

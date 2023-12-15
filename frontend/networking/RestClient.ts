import axios from 'axios'

class RestClient {
  private token: string | null = null
  private _cards: Record<string, unknown>[] = []

  private HOST = 'http://localhost:3000'

  private constructor() {}

  private static _instance: RestClient

  public static get instance() {
    if (!this._instance) {
      this._instance = new RestClient()
    }
    return this._instance
  }

  public get cards() {
    return this._cards
  }

  public async createUser(user: Record<string, unknown>) {
    const response = await axios.post(`${this.HOST}/user`, user)
    if (response.status !== 200) {
      throw new Error('Failed to create user')
    }
    const data = await response.data
    return data
  }

  public async login(username: string, password: string) {
    const response = await axios.post(`${this.HOST}/login`, {
      username,
      password,
    })
    if (response.status !== 200) {
      throw new Error('Failed to login')
    }
    const data = response.data
    this.token = data.token
  }

  public async createCard(card: Record<string, unknown>, cardType: string) {
    const response = await fetch(`${this.HOST}/card`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify({ card, cardType }),
    })

    const data = await response.json()
    return data
  }

  public async deleteCard(cardId: string, cardType: string) {
    const response = await fetch(`${this.HOST}/card/${cardId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify({ cardType }),
    })

    const data = await response.json()
    return data
  }

  public async reloadCards(cardType: string) {
    const response = await fetch(`${this.HOST}/card/${cardType}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`,
      },
    })

    const data = await response.json()
    this._cards = data.cards
  }
}

export default RestClient

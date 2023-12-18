import axios from 'axios'

class RestClient {
  private token: string | null = null
  private _cards: Record<string, string>[] = []

  private readonly HOST = 'https://icy-dolls-divide.loca.lt'
  private readonly PORT = 3000
  private readonly LINK = `${this.HOST}`

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
    const response = await axios.post(`${this.LINK}/user`, user)
    if (response.status !== 200) {
      throw new Error('Failed to create user')
    }
    const data = await response.data
    return data
  }

  public async login(username: string, password: string) {
    const response = await axios.post(`${this.LINK}/login`, {
      username,
      password,
    })
    if (response.status !== 200) {
      throw new Error('Failed to login')
    }
    const data = response.data
    this.token = data.token
  }

  public async createCard(card: Record<string, string>, cardType: string) {
    const response = await axios.post(
      `${this.LINK}/card`,
      {
        ...card,
        cardType,
        name: card.name,
      },
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      }
    )

    if (response.status !== 200) {
      throw new Error('Failed to create card')
    }

    const data = response.data
    return data
  }

  public async deleteCard(cardId: string, cardType: string) {
    const response = await fetch(`${this.LINK}/card/${cardId}`, {
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

  public async updateCardWithYelp(
    cardId: string,
    yelpBusinessId: string,
    cardType: string
  ) {
    const response = await axios.put(
      `${this.LINK}/card/${cardId}`,
      {
        yelp: yelpBusinessId,
        cardType,
      },
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      }
    )

    if (response.status !== 200) {
      throw new Error('Failed to update card with Yelp data')
    }

    const data = response.data
    return data
  }

  public async getYelpBusinessDetails(yelpBusinessId: string) {
    const response = await axios.get(
      `${this.LINK}/api/get-yelp-details/${yelpBusinessId}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token}`,
        },
      }
    )

    const data = response.data
    return data
  }

  public async reloadCards() {
    const response = await axios.get(`${this.LINK}/cards`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    })

    if (response.status !== 200) {
      console.error(response.data)
      throw new Error(response.data)
    }

    const data = response.data
    this._cards = data.cards
  }

  public async getCard(cardId: string) {
    const response = await axios.get(`${this.LINK}/card/${cardId}`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    })

    if (response.status !== 200) {
      throw new Error('Failed to get card')
    }

    const data = response.data
    return data
  }

  public async getCardsReceived() {
    const response = await axios.get(`${this.LINK}/cards/received`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    })
    console.log('response', response.data)
    return response.data.cards
  }

  public async addCardReceived(cardId: string) {
    const response = await axios.post(
      `${this.LINK}/cards/received`,
      {
        cardId,
      },
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      }
    )

    if (response.status !== 200) {
      throw new Error('Failed to add card received')
    }

    const data = response.data
    return data
  }
}

export default RestClient

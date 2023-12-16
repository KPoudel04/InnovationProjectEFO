import axios from 'axios'

class RestClient {
  private token: string | null = null
  private _cards: Record<string, string>[] = []

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
  public static async getYelpBusinessDetails(yelpBusinessId:any) {
    return fetch(`http://localhost:3000/api/get-yelp-details/${yelpBusinessId}`)
      .then(response => response.json())
      .then(data => data)
      .catch(error => {
        throw error;
      });
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
    const response = await axios.post(
      `${this.HOST}/card`,
      {
        ...card,
        cardType,
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
  public async updateCardWithYelp(cardId: string, yelpBusinessId: any) {
    const response = await axios.put(`${this.HOST}/card/${cardId}`, {
      yelpBusinessId,
    }, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  
    if (response.status !== 200) {
      throw new Error('Failed to update card with Yelp data');
    }
  
    const data = response.data;
    return data;
  }
  public async reloadCards() {
    const response = await axios.get(`${this.HOST}/cards`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    })
    console.log(response.data)

    if (response.status !== 200) {
      console.error(response.data)
      throw new Error(response.data)
    }

    const data = response.data
    this._cards = data.cards
  }
}

export default RestClient

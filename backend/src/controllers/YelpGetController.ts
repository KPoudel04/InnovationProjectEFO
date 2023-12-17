import express from 'express'

class YelpGetController {
  app: express.Application

  constructor(app: express.Application) {
    this.app = app
  }

  public init() {
    this.app.get(
      '/api/get-yelp-details/:yelpBusinessId',
      this.getYelpBusinessDetails
    )
  }

  private getYelpBusinessDetails = async (
    req: express.Request,
    res: express.Response
  ) => {
    console.log('Agnes')
    const { yelpBusinessId } = req.params
    const yelpApiKey = process.env.YELP_API_KEY

    if (!yelpApiKey) {
      return res.status(500).json({ message: 'Yelp API key not configured' })
    }

    const url = `https://api.yelp.com/v3/businesses/${yelpBusinessId}`

    try {
      const response = await fetch(url, {
        headers: { Authorization: `Bearer ${yelpApiKey}` },
      })

      if (!response.ok) {
        throw new Error(`Error from Yelp API: ${response.statusText}`)
      }

      const data = await response.json()
      res.json(data)
    } catch (error) {
      console.error('Failed to fetch Yelp business details:', error)
      res.status(500).json({ message: 'Failed to fetch Yelp business details' })
    }
  }
}

export default YelpGetController

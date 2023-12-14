import Card from './Card'
import QRCode from 'qrcode'

class ProductCard extends Card {
  cardName: string
  cardTitle: string
  cardPhone: string
  cardEmail: string

  async generateQRCode(): Promise<string> {
    const cardData = JSON.stringify({
      cardName: this.cardName,
      cardTitle: this.cardTitle,
      cardPhone: this.cardPhone,
      cardEmail: this.cardEmail,
    })
    try {
      const qrCode = await QRCode.toDataURL(cardData)
      return qrCode
    } catch (err) {
      console.error(err)
      return ''
    }
  }

  setCardName(cardName: string): void {
    this.cardName = cardName
  }

  getCardName(): string {
    return this.cardName
  }

  setCardTitle(cardTitle: string): void {
    this.cardTitle = cardTitle
  }

  getCardTitle(): string {
    return this.cardTitle
  }

  setCardPhone(cardPhone: string): void {
    this.cardPhone = cardPhone
  }

  getCardPhone(): string {
    return this.cardPhone
  }

  setCardEmail(cardEmail: string): void {
    this.cardEmail = cardEmail
  }

  getCardEmail(): string {
    return this.cardEmail
  }
}

export default ProductCard

import Card from './Card'
import QRCode from 'qrcode'

class CompanyCard extends Card {
  name: string
  title: string
  phone: string
  email: string
  address: string

  async generateQRCode(): Promise<string> {
    const cardData = JSON.stringify({
      cardName: this.name,
      cardTitle: this.title,
      cardPhone: this.phone,
      cardEmail: this.email,
      cardAddress: this.address,
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
    this.name = cardName
  }

  getCardName(): string {
    return this.name
  }

  setCardTitle(cardTitle: string): void {
    this.title = cardTitle
  }

  getCardTitle(): string {
    return this.title
  }

  setCardPhone(cardPhone: string): void {
    this.phone = cardPhone
  }

  getCardPhone(): string {
    return this.phone
  }

  setCardEmail(cardEmail: string): void {
    this.email = cardEmail
  }

  getCardEmail(): string {
    return this.email
  }

  setCardAddress(cardAddress: string): void {
    this.address = cardAddress
  }

  getCardAddress(): string {
    return this.address
  }
}

export default CompanyCard

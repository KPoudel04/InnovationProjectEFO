import QRCode from 'qrcode';
import { User } from './user';
class Card {
    private id: number;
    private cardUser: User;

    constructor(id: number, cardUser: User) {
        this.id = id;
        this.cardUser = cardUser;
    }
    getCardUser(): User {
        return this.cardUser;
    }
    setCardUser(cardUser: User): void {
        this.cardUser = cardUser;
    }
    getId(): number {
        return this.id;
    }
    setId(id: number): void {
        this.id = id;
    }
}

class userCard extends Card {
    cardName: string;
    cardTitle: string;
    cardPhone: string;
    cardEmail: string;
    cardCity: string;
    cardBirthday: string;
    cardNationality: string;
    cardExperience: string;
    cardExperience2: string;
    cardExperience3: string;
    cardEducation: string;

    async generateQRCode(): Promise<string> {
        const cardData = JSON.stringify({
            cardName: this.cardName,
            cardTitle: this.cardTitle,
            cardPhone: this.cardPhone,
            cardEmail: this.cardEmail,
            cardCity: this.cardCity,
            cardBirthday: this.cardBirthday,
            cardNationality: this.cardNationality,
            cardExperience: this.cardExperience,
            cardExperience2: this.cardExperience2,
            cardExperience3: this.cardExperience3,
            cardEducation: this.cardEducation
        });
        try {
            const qrCode = await QRCode.toDataURL(cardData);
            return qrCode;
        } catch (err) {
            console.error(err);
            return '';
        }
    }

    getCardName(): string {
        return this.cardName;
    }
    setCardName(cardName: string): void {
        this.cardName = cardName;
    }

    getCardTitle(): string {
        return this.cardTitle;
    }
    setCardTitle(cardTitle: string): void {
        this.cardTitle = cardTitle;
    }

    getCardPhone(): string {
        return this.cardPhone;
    }
    setCardPhone(cardPhone: string): void {
        this.cardPhone = cardPhone;
    }

    getCardEmail(): string {
        return this.cardEmail;
    }
    setCardEmail(cardEmail: string): void {
        this.cardEmail = cardEmail;
    }

    getCardCity(): string {
        return this.cardCity;
    }
    setCardCity(cardCity: string): void {
        this.cardCity = cardCity;
    }

    getCardBirthday(): string {
        return this.cardBirthday;
    }
    setCardBirthday(cardBirthday: string): void {
        this.cardBirthday = cardBirthday;
    }

    getCardNationality(): string {
        return this.cardNationality;
    }
    setCardNationality(cardNationality: string): void {
        this.cardNationality = cardNationality;
    }

    getCardExperience(): string {
        return this.cardExperience;
    }
    setCardExperience(cardExperience: string): void {
        this.cardExperience = cardExperience;
    }

    getCardExperience2(): string {
        return this.cardExperience2;
    }
    setCardExperience2(cardExperience2: string): void {
        this.cardExperience2 = cardExperience2;
    }

    getCardExperience3(): string {
        return this.cardExperience3;
    }
    setCardExperience3(cardExperience3: string): void {
        this.cardExperience3 = cardExperience3;
    }

    getCardEducation(): string {
        return this.cardEducation;
    }
    setCardEducation(cardEducation: string): void {
        this.cardEducation = cardEducation;
    }
}

class companyCard extends Card {
    cardName: string;
    cardTitle: string;
    cardPhone: string;
    cardEmail: string;
    cardAddress: string;

    async generateQRCode(): Promise<string> {
        const cardData = JSON.stringify({
            cardName: this.cardName,
            cardTitle: this.cardTitle,
            cardPhone: this.cardPhone,
            cardEmail: this.cardEmail,
            cardAddress: this.cardAddress
        });
        try {
            const qrCode = await QRCode.toDataURL(cardData);
            return qrCode;
        } catch (err) {
            console.error(err);
            return '';
        }
    }
    setCardName(cardName: string): void {
        this.cardName = cardName;
    }
    getCardName(): string {
        return this.cardName;
    }
    setCardTitle(cardTitle: string): void {
        this.cardTitle = cardTitle;
    }
    getCardTitle(): string {
        return this.cardTitle;
    }
    setCardPhone(cardPhone: string): void {
        this.cardPhone = cardPhone;
    }
    getCardPhone(): string {
        return this.cardPhone;
    }
    setCardEmail(cardEmail: string): void {
        this.cardEmail = cardEmail;
    }
    getCardEmail(): string {
        return this.cardEmail;
    }
    setCardAddress(cardAddress: string): void {
        this.cardAddress = cardAddress;
    }
    getCardAddress(): string {
        return this.cardAddress;
    }

    
}

class productCard extends Card {
    cardName: string;
    cardTitle: string;
    cardPhone: string;
    cardEmail: string;

    async generateQRCode(): Promise<string> {
        const cardData = JSON.stringify({
            cardName: this.cardName,
            cardTitle: this.cardTitle,
            cardPhone: this.cardPhone,
            cardEmail: this.cardEmail
        });
        try {
            const qrCode = await QRCode.toDataURL(cardData);
            return qrCode;
        } catch (err) {
            console.error(err);
            return '';
        }
    }
    setCardName(cardName: string): void {
        this.cardName = cardName;
    }
    getCardName(): string {
        return this.cardName;
    }
    setCardTitle(cardTitle: string): void {
        this.cardTitle = cardTitle;
    }
    getCardTitle(): string {
        return this.cardTitle;
    }
    setCardPhone(cardPhone: string): void {
        this.cardPhone = cardPhone;
    }
    getCardPhone(): string {
        return this.cardPhone;
    }
    setCardEmail(cardEmail: string): void {
        this.cardEmail = cardEmail;
    }
    getCardEmail(): string {
        return this.cardEmail;
    }
}
export { Card, userCard, companyCard, productCard };
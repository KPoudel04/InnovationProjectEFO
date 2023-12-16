import { Card } from './card';
class User {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string; 
    userCards: Card[];
    cardsGiven: Card[];

    constructor(firstName: string, lastName: string, email: string, username: string, password: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.username = username;
        this.password = password; 
        this.userCards = [];
        this.cardsGiven = [];
    }
    getFirstName(): string {
        return this.firstName;
    }
    getLastName(): string {
        return this.lastName;
    }
    getEmail(): string {
        return this.email;
    } 
    getUsername(): string {
        return this.username;
    }
    getPassword(): string {
        return this.password;
    }
    getUserCards(): Card[] {
        return this.userCards;
    }
    getCardsGiven(): Card[] {
        return this.cardsGiven;
    }
    setFirstName(firstName: string): void {
        this.firstName = firstName;
    }
    setLastName(lastName: string): void {
        this.lastName = lastName;
    }
    setEmail(email: string): void {
        this.email = email;
    }
    setUsername(username: string): void {
        this.username = username;
    }
    setPassword(password: string): void {
        this.password = password;
    }
    setUserCards(userCards: Card[]): void {
        this.userCards = userCards;
    }
    setCardsGiven(cardsGiven: Card[]): void {
        this.cardsGiven = cardsGiven;
    }
}
export { User };
// User model based on the structure of github api at
// https://api.github.com/users/{username}
export class MenuItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    category: string;
    description: string;
    image: string;
    size: Array<string>;
    constructor() { 
    }
  }
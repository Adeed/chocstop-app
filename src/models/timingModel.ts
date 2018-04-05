// User model based on the structure of github api at
// https://api.github.com/users/{username}
export class TimingModel {
    id: number;
    shopName: string;
    openTiming: Array<any>;
    deliveryTiming: Array<any>;
    description: string;
    image: string;
    constructor() { 
    }
  }
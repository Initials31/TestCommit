import { Contest } from './contests';

export class Event {

    public id: number;
    public label: string;
    public eventDate: Date;
    public openDate: Date;
    public closeDate: Date;
    public coeff: number;
    public contest: Contest;

    constructor(){}
 
}
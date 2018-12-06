import { ICompany } from './company-interface';

export class Company implements ICompany{
    constructor (
        public id: number,
        public name: string,
        public email: string,
        public site: string,
        public phone: string,
    ) {

    }
}
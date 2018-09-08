import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TaxBreakdown } from './data/pcms-data';

const PCMS_TAX_EP = 'http://localhost:8080/api/ZA/income-tax/';

@Injectable()
export class PcmsTaxService {

    constructor(
        private http: HttpClient
    ) {}

    getTaxBreakdown(annual: boolean, amount: number): Promise<TaxBreakdown> {
        let country = 'ZA';

        let period = annual ? 'ANNUALLY' : 'MONTHLY';

        return this.http
            .get<TaxBreakdown>(PCMS_TAX_EP + period, 
                { headers: this.buildHttpHeaders(), params: {'income': String(amount)} } )
            .toPromise<TaxBreakdown>();
    }

    private buildHttpHeaders(): HttpHeaders {
        return new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        })
    }
}
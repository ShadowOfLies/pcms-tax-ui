import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const PCMS_TAX_EP = 'http://localhost:8080/ZA/income-tax/';

@Injectable()
export class PcmsTaxService {

    constructor(
        private http: HttpClient
    ) {}

    getTaxBreakdown(annual: boolean): Promise<TaxBreakdown> {
        let country = 'ZA';

        let period = annual ? 'ANNUALLY' : 'MONTHLY';

        return this.http
            .get<TaxBreakdown>(PCMS_TAX_EP + period, { headers: this.buildHttpHeaders() })
            .toPromise<TaxBreakdown>();
    }

    private buildHttpHeaders(): HttpHeaders {
        return new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        })
    }
}

export interface TaxBreakdown {
    grossAnnual: number;
    grossMonthly: number;
    netAnnual: number;
    netMonthly: number;
    annualTaxPaid: number;
    monthlyTaxPaid: number;
}
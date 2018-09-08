import { Component, OnInit } from '@angular/core';
import { TaxBreakdown } from '../data/pcms-data';
import { PcmsTaxService } from '../pcms-tax.service';

declare var M: any;

@Component({
    selector: 'tax-calculator',
    templateUrl: './tax-calculator.component.html',
    styleUrls: ['./tax-calculator.component.css']
})
export class TaxCalculatorComponent implements OnInit {

    private _annual: boolean = true;
    incomeAmount: number = 0;

    taxBreakdown: TaxBreakdown;

    constructor(
        private taxService: PcmsTaxService
    ) {}

    ngOnInit(): void {
        var elems = document.querySelectorAll('select');
        M.FormSelect.init(elems, {});
    }

    public hasBreakdown(): boolean {
        // Cater for undefined and null
        return this.taxBreakdown != null;
    }

    get annual(): string {
        return this._annual ? 'ANNUALLY' : 'MONTHLY';
    }

    set annual(type: string) {
        this._annual = type === 'ANNUALLY';
    }

    public calculateTaxBreakdown() {
        this.taxService.getTaxBreakdown(this._annual, this.incomeAmount)
            .then(res => {
                this.taxBreakdown = res;
            })
    }
}


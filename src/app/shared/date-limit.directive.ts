import { formatDate } from "@angular/common";
import { AbstractControl, ValidatorFn } from "@angular/forms";

export function dateLimitValidator(date: Date): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const band = control.value > formatDate(date, 'yyyy-MM-dd', 'en-US');;
      return band ? {dateLimit: {value: control.value}} : null;
    };
}
import { Validators, createFormValidation } from '@lemoncode/fonk';
import { iban } from '@lemoncode/fonk-iban-validator';
import { isNumber } from '@lemoncode/fonk-is-number-validator';
import { rangeNumber } from '@lemoncode/fonk-range-number-validator';
import { minNumber } from '@lemoncode/fonk-min-number-validator';
import { laterDate } from '@lemoncode/fonk-later-date-validator';

const currentYear = new Date().getFullYear();

const validationSchema = {
    field: {
        iban: [Validators.required, iban.validator],
        name: [Validators.required],
        amount: [Validators.required, isNumber],
        concept: [Validators.required],
        day: [
            {
                validator: rangeNumber.validator,
                customArgs: {
                    strictTypes: false,
                    min: {
                        value: 1,
                        inclusive: true,
                    },
                    max: {
                        value: 31,
                        inclusive: true,
                    },
                },
            },
        ],
        month: [
            {
                validator: rangeNumber.validator,
                customArgs: {
                    strictTypes: false,
                    min: {
                        value: 1,
                        inclusive: true,
                    },
                    max: {
                        value: 12,
                        inclusive: true,
                    },
                },
            },
        ],
        year: [
            {
                validator: minNumber.validator,
                customArgs: { minValue: currentYear, inclusive: true },
            },
        ],
        date: [
            {
                validator: laterDate.validator,
                customArgs: { parseStringToDateFn: value => new Date(value), date: new Date() },
            }
        ],
        email: [Validators.email],
    },
};

export const formValidation = createFormValidation(validationSchema);
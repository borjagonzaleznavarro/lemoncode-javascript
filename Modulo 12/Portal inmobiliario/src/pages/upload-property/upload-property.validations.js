import {
  Validators,
  createFormValidation
} from '@lemoncode/fonk';
import {
  isNumber
} from '@lemoncode/fonk-is-number-validator';
import {
  arrayRequired
} from '@lemoncode/fonk-array-required-validator';
import {
  isUrl
} from '@lemoncode/fonk-is-url-validator';

const validationSchema = {
  field: {
    title: [{
      validator: Validators.required,
      message: 'Campo requerido',
    }],
    notes: [{
      validator: Validators.required,
      message: 'Campo requerido',
    }],
    email: [{
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: Validators.email,
        message: 'Email no válido',
      }
    ],
    phone: [{
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: isNumber.validator,
        message: 'Introduce un número válido',
      }
    ],
    price: [{
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: isNumber.validator,
        message: 'Introduce una cifra',
      }
    ],
    saleTypesIds: [{
      validator: arrayRequired.validator,
      customArgs: {
        minLength: 1
      },
      message: 'Selecciona al menos un tipo de venta',
    }],
    address: [{
      validator: Validators.required,
      message: 'Campo requerido',
    }],
    city: [{
      validator: Validators.required,
      message: 'Campo requerido',
    }],
    provinceId: [{
      validator: Validators.required,
      message: 'Campo requerido',
    }],
    squareMeter: [{
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: isNumber.validator,
        message: 'Introduce una cifra',
      }
    ],
    rooms: [{
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: isNumber.validator,
        message: 'Introduce una cifra',
      }
    ],
    bathrooms: [{
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: isNumber.validator,
        message: 'Introduce una cifra',
      }
    ],
    locationUrl: [{
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: isUrl.validator,
        message: 'Introduce una URL válida',
      }
    ],
    newFeature: [{
      validator: Validators.pattern,
      customArgs: {
        pattern: /[A-Za-zÁÉÍÓÚñáéíóúÑ0-9]{2}?[A-Za-zÁÉÍÓÚñáéíóúÑ0-9\']/,
      },
      message: 'Introduce un valor correcto',
    }, ],
    mainFeatures: [{
      validator: arrayRequired.validator,
      customArgs: {
        minLength: 1,
        maxLength: 10
      },
      message: 'Introduce al menos una característica',
    }, ],
    equipmentsIds: [{
      validator: arrayRequired.validator,
      customArgs: {
        minLength: 1
      },
      message: 'Selecciona al menos un equipamiento',
    }, ],
    images: [{
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: arrayRequired.validator,
        customArgs: {
          minLength: 1
        },
        message: 'Introduce al menos una imagen',
      },
    ],
  },
};

const validationFeature = {
  field: {
    newFeature: [{
      validator: Validators.required,
      message: 'Campo requerido',
    }],
  }
};

export const formValidation = createFormValidation(validationSchema);
export const featureValidation = createFormValidation(validationFeature);

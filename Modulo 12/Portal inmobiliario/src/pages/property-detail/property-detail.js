import {
  getProperty,
  getEquipmentsList,
  insertMessage
} from './property-detail.api';
import {
  history
} from '../../core/router';
import {
  mapPropertyListFromApiToVm
} from './property-detail.mappers';
import {
  setPropertyValues
} from './property-detail.helpers';
import {
  onUpdateField,
  onSubmitForm,
  onSetError,
  onSetFormErrors,
  clearForm
} from '../../common/helpers';
import {
  formValidation
} from './property-detail.validations'

let contactForm = {
  email: '',
  message: '',
};

const params = history.getParams();
const getId = Boolean(params.id);

const loadProperty = (apiProperty, equipmentsList) => {
  const equipmentIds = apiProperty[0].equipmentIds;
  let equipmentsNames = equipmentIds.map(equipment =>
    equipmentsList.find(apiEquipment => apiEquipment.id === equipment.toString()).name
  );
  apiProperty[0].equipmentNames = equipmentsNames;
  const property = mapPropertyListFromApiToVm(apiProperty);
  setPropertyValues(property[0]);
};

// Comprobamos si existe el parámetro en la url
if (getId) {
  getProperty(params.id).then(apiProperty => {
    // Comprobamos que haya resultados
    Promise.all([
      getProperty(params.id),
      getEquipmentsList(),
    ]).then(([apiProperty, equipmentsList]) => {
      if (apiProperty.length) {
        loadProperty(apiProperty, equipmentsList);
      } else {
        // Si no hay resultados volvemos a la página anterior
        history.back();
      }
    });
  });
} else {
  //Si no existe el parámetro en la url, volvemos a la página anterior
  history.back();
}

onUpdateField('email', (event) => {
  const value = event.target.value;
  contactForm = {
    ...contactForm,
    email: value
  };
  formValidation.validateField('email', contactForm.email).then((result) => {
    onSetError('email', result);
  });
});

onUpdateField('message', (event) => {
  const value = event.target.value;
  contactForm = {
    ...contactForm,
    message: value
  };
  formValidation.validateField('message', contactForm.message).then((result) => {
    onSetError('message', result);
  });
});

onSubmitForm('contact-button', () => {
  formValidation.validateForm(contactForm).then((result) => {
    onSetFormErrors(result);
    if (result.succeeded) {
      insertMessage(contactForm);
      clearForm('contact-form');
      alert('El mensaje ha sido enviado');
    }
  });
});

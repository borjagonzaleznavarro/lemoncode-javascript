import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/properties`;

export const getProperty = propertyId =>
  Axios.get(`${url}?id=${propertyId}`).then(response => {
    return response.data;
  })

const equipmentsListUrl = `${process.env.BASE_API_URL}/equipments`;

export const getEquipmentsList = () =>
  Axios.get(equipmentsListUrl).then(response => {
    return response.data;
  })

const contactUrl = `${process.env.BASE_API_URL}/contact`;

export const insertMessage = (message) =>
  Axios.post(`${contactUrl}`, message).then(({
    data
  }) => data);

import Axios from 'axios';

const saleTypeListUrl = `${process.env.BASE_API_URL}/saleTypes`;

export const getSaleTypeList = () =>
  Axios.get(saleTypeListUrl).then(response => {
    return response.data;
  })

const provinceListUrl = `${process.env.BASE_API_URL}/provinces`;

export const getProvinceList = () =>
  Axios.get(provinceListUrl).then(response => {
    return response.data;
  })

const equipmentsListUrl = `${process.env.BASE_API_URL}/equipments`;

export const getEquipmentsList = () =>
  Axios.get(equipmentsListUrl).then(response => {
    return response.data;
  })

const insertPropertyUrl = `${process.env.BASE_API_URL}/properties`;

export const insertProperty = (property) =>
  Axios.post(`${insertPropertyUrl}`, property).then(({
    data
  }) => data);

import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/movements`;

/*** Traemos todos los movimientos y luego los filtramos ***/
// export const getMovements = () =>
//     Axios.get(url).then(response => {
//         return response.data;
//     });

/*** Traemos solo los movimientos que coinciden con el id pasado por parámetro ***/
export const getMovements = id => Axios.get(url, { params: { accountId: id } }).then(({ data }) => data);
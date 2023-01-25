import { getMovements } from './movements.api';
import { history } from '../../core/router';
import { addMovementRows } from './movements.helpers';
import { mapMovementsListFromApiToViewModel } from './movements.mappers';
import { getAccount } from '../account/account.api';
import { onSetValues } from '../../common/helpers';

const params = history.getParams();
const getId = Boolean(params.id);

/*** Traemos todos los movimientos y luego los filtramos ***/
// getMovements().then(apiMovements => {
//     let viewModelMovements = mapMovementsListFromApiToViewModel(apiMovements);
//     if (getId) {
//         viewModelMovements = viewModelMovements.filter(movement => movement.accountId === params.id);
//     }
//     addMovementRows(viewModelMovements);
// });

/*** Traemos solo los movimientos que coinciden con el id pasado por parámetro ***/
getMovements(params.id).then(apiMovements => {
    const viewModelMovements = mapMovementsListFromApiToViewModel(apiMovements);
    addMovementRows(viewModelMovements);
});

if (getId) {
    getAccount(params.id).then(apiAccount => {
        // account = mapAccountFromApiToViewModel(apiAccount);
        const account = apiAccount;
        onSetValues(account);
    });
}
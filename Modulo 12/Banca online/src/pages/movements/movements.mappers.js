export const mapMovementsListFromApiToViewModel = movementsList => {
    return movementsList.map(movement => mapMovementFromApiToViewModel(movement));
}

const mapMovementFromApiToViewModel = (movement) => {
    return {
        ...movement,
        amount: `${movement.amount} €`,
        balance: `${movement.balance} €`,
        realTransaction: new Date(movement.realTransaction).toLocaleDateString(),
        transaction: new Date(movement.transaction).toLocaleDateString(),
    };
};
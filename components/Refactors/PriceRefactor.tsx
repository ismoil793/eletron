import React from 'react';

interface PriceRefactorProps {
    price: any
}

const PriceRefactor: React.FC<PriceRefactorProps> = ({price}) => {

    const formatPrice = (priceF: any) => {
        priceF = priceF.toString();

        if (priceF.length === 5) {
            priceF = priceF.slice(0, 2) + ' ' + priceF.slice(2, 5)
        } else if (priceF.length === 4) {
            priceF = priceF.slice(0, 1) + ' ' + priceF.slice(1, 4)
        } else if (priceF.length === 6) {
            priceF = priceF.slice(0, 3) + ' ' + priceF.slice(3, 6)
        } else if (priceF.length === 7) {
            priceF = priceF.slice(0, 1) + ' ' + priceF.slice(1, 4) + ' ' + priceF.slice(4, 7)
        } else if (priceF.length === 8) {
            priceF = priceF.slice(0, 2) + ' ' + priceF.slice(2, 5) + ' ' + priceF.slice(5, 8)
        } else if (priceF.length === 9) {
            priceF = priceF.slice(0, 3) + ' ' + priceF.slice(3, 6) + ' ' + priceF.slice(6, 9)
        }

        return (<span>{priceF} сум</span>)
    };

    return (
        <React.Fragment>
            {formatPrice(price)}
        </React.Fragment>
    );
};

export default PriceRefactor;
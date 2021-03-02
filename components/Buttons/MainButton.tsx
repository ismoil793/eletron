import React from 'react';

interface MainBtnProps {
    txt: string
}

const MainBtn: React.FC<MainBtnProps> = ({txt}) => {
    return (
        <button className="btn-eletron main">
            {txt}
        </button>
    );
};

export default MainBtn;
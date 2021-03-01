import React from 'react';

interface MainBtnProps {
    txt: string
}

const MainBtn: React.FC<MainBtnProps> = ({txt}) => {
    return (
        <button className="main-btn-eletron">
            {txt}
        </button>
    );
};

export default MainBtn;
import React,{useEffect, useState, FC} from 'react';

interface NameRefactorProps {
    txt: string,
    length: number
}

const NameRefactor: FC<NameRefactorProps> = ({txt, length = 32}) => {

    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        setWindowWidth(window.innerWidth)
    }, []);

    const deviceWidth = () => {
        let width = windowWidth;
        return (width > 991 && width < 1300);
    }

    const formatName = (n: string, l: number) => {
        if (!deviceWidth())
            return `${n.slice(0, l)}${n.length > l ? '...' : ''}`
        else {
            return `${n.slice(0, 30)}${n.length > l ? '...' : ''}`
        }
    }

    return (
        <React.Fragment>
            {formatName(txt, length)}
        </React.Fragment>
    );
};

export default NameRefactor;
import React, {useEffect, useState} from 'react';

interface NameRefactorProps {
   txt: string,
   length: number
}

const NameRefactor:React.FC<NameRefactorProps> = ({ txt, length = 32 }) => {

   const [windowWidth, setWindowWidth] = useState(0);

   useEffect(() => {
      setWindowWidth(window.innerWidth)
   }, []);

   const deviceWidth = () => {
      let width = windowWidth;
      if ((width > 991 && width < 1300)) {
         return true
      } else {
         return false
      }
   }

   const formatName = (n, l) => {
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
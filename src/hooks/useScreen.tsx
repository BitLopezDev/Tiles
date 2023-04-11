import * as React from 'react';

function useScreen(...commands : String[]) {
   
    const [Home, setHome] = React.useState(true);
    const [Search, setSearch] = React.useState(false);
    const [List, setList] = React.useState(false);

    const changeScreen = (screen : String) => {

    };

    return {
        Home, setHome, Search, setSearch, List, setList, changeScreen
    }
    

}

export {useScreen};
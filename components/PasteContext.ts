import {createContext} from 'react';

export const PasteContext = createContext({
    hasPasted: false,
    sethasPasted: () => {}
});
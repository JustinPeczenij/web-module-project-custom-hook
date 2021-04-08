import useLocalStorage from './useLocalStorage';

const useDarkMode = (initialValues) => {
    const [ storedValue, setValue ] = useLocalStorage('dark-mode', initialValues)
    return [storedValue, setValue]
}

export default useDarkMode;
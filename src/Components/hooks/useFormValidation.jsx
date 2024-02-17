
const useFormValidation = ({
    defaultValue,
    setIsFioValid,
    setIsTelValid,
    setIsSelectValid,
    areaRef,
    setIsAreaValid,
    includeTextarea }) => {
    const validateFormData = (napravlenie, fio, tel, area) => {
        const telRegExp = /^\+375\(\d{2}\) \d{3} - \d{2} - \d{2}$/;

        if (napravlenie == defaultValue ||
            (!fio || fio.length < 3) ||
            (!tel || (tel.length === 22 && !telRegExp.test(tel))) ||
            (includeTextarea && areaRef.current && area.length < 1)) {

            if (napravlenie == defaultValue) setIsSelectValid(false);
            if (!fio || fio.length < 3) setIsFioValid(false);
            if (!tel || !telRegExp.test(tel)) setIsTelValid(false);
            if (includeTextarea && areaRef.current && area.length < 1) setIsAreaValid(false);
            return false;
        }

        return true;
    };

    return validateFormData;
};

export default useFormValidation;
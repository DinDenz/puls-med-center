const useSmallFormValidation = ({ setIsFioValid, setIsTelValid, }) => {
    const validateFormData = (fio, tel) => {
        const telRegExp = /^\+375\(\d{2}\) \d{3} - \d{2} - \d{2}$/;

        if ((!fio || fio.length < 3) ||
            (!tel || (tel.length === 22 && !telRegExp.test(tel)))) {

            if (!fio || fio.length < 3) setIsFioValid(false);
            if (!tel || !telRegExp.test(tel)) setIsTelValid(false);
            return false;
        }
        return true;
    };
    return validateFormData;
};

export default useSmallFormValidation;
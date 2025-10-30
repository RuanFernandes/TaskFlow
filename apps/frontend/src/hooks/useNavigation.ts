import { useNavigate } from 'react-router';

export const useNavigation = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleGoHome = () => {
        navigate('/');
    };

    return { handleLoginClick, handleGoHome };
};

import { useNavigate } from 'react-router';

export const useHomeNavigation = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    return { handleLoginClick };
};

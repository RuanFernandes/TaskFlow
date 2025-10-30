import { Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigation } from '../../../hooks/useNavigation';

export function LoginButton() {
    const { handleLoginClick } = useNavigation();

    return (
        <Button
            variant="contained"
            color="primary"
            onClick={handleLoginClick}
            startIcon={<LoginIcon />}
            sx={{
                textTransform: 'none',
                fontSize: {
                    xs: '0.875rem',
                    sm: '1rem',
                },
                fontWeight: 600,
                px: {
                    xs: 2,
                    sm: 3,
                },
                py: 1,
                borderRadius: 1,
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                    boxShadow: '0 4px 12px rgba(25, 118, 210, 0.4)',
                    transform: 'translateY(-2px)',
                },
            }}
        >
            Entrar
        </Button>
    );
}

import { Box } from '@mui/material';
import {
    Header,
    LoginButton,
    HomeContainer,
    Features,
    Footer,
} from './components';
import { useNavigation } from '../../hooks/useNavigation';

const Home = () => {
    const { handleLoginClick } = useNavigation();

    return (
        <HomeContainer>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 6,
                    alignItems: 'center',
                }}
            >
                <Header />
                <LoginButton onClick={handleLoginClick} />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 0,
                        alignItems: 'center',
                    }}
                >
                    <Features />
                    <Footer />
                </Box>
            </Box>
        </HomeContainer>
    );
};

export default Home;

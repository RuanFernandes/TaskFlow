import { Box } from '@mui/material';
import {
    Header,
    LoginButton,
    HomeContainer,
    Features,
    Footer,
} from './components';
import { useHomeNavigation } from './hooks';

const Home = () => {
    const { handleLoginClick } = useHomeNavigation();

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

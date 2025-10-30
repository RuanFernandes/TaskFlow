import { Box, Typography, Stack } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

const features = [
    {
        icon: CheckCircleOutlineIcon,
        title: 'Simples',
        description: 'Interface intuitiva e fácil de usar',
    },
    {
        icon: ElectricBoltIcon,
        title: 'Rápido',
        description: 'Gerencia suas tarefas em tempo real',
    },
    {
        icon: TipsAndUpdatesIcon,
        title: 'Eficiente',
        description: 'Organize e priorize seus objetivos',
    },
];

export const Features = () => {
    return (
        <Box
            sx={{
                animation: 'fadeIn 1s ease-in-out 0.4s both',
                '@keyframes fadeIn': {
                    from: {
                        opacity: 0,
                    },
                    to: {
                        opacity: 1,
                    },
                },
            }}
        >
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                sx={{
                    maxWidth: '900px',
                    justifyContent: 'center',
                }}
            >
                {features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                        <Box
                            key={index}
                            sx={{
                                flex: 1,
                                padding: {
                                    xs: 2,
                                    sm: 3,
                                },
                                borderRadius: '12px',
                                border: '1px solid rgba(99, 102, 241, 0.2)',
                                background: 'rgba(99, 102, 241, 0.05)',
                                backdropFilter: 'blur(10px)',
                                transition:
                                    'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                textAlign: 'center',
                                '&:hover': {
                                    border: '1px solid rgba(99, 102, 241, 0.5)',
                                    background: 'rgba(99, 102, 241, 0.1)',
                                    transform: 'translateY(-4px)',
                                    boxShadow:
                                        '0 12px 32px rgba(99, 102, 241, 0.15)',
                                },
                            }}
                        >
                            <IconComponent
                                sx={{
                                    fontSize: {
                                        xs: '2rem',
                                        sm: '2.5rem',
                                    },
                                    marginBottom: 1,
                                    color: '#6366f1',
                                }}
                            />
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 600,
                                    marginBottom: 1,
                                    color: '#ffffff',
                                    fontSize: {
                                        xs: '1rem',
                                        sm: '1.25rem',
                                    },
                                }}
                            >
                                {feature.title}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: '#a0a0a0',
                                    fontSize: {
                                        xs: '0.85rem',
                                        sm: '0.95rem',
                                    },
                                }}
                            >
                                {feature.description}
                            </Typography>
                        </Box>
                    );
                })}
            </Stack>
        </Box>
    );
};

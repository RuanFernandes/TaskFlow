import { Avatar } from '@mui/material';

interface UserAvatarProps {
    name: string;
}

export function UserAvatar({ name }: UserAvatarProps) {
    const getInitial = (fullName: string): string => {
        return fullName.charAt(0).toUpperCase();
    };

    const getAvatarColor = (name: string): string => {
        const colors = [
            '#FF6B6B',
            '#4ECDC4',
            '#45B7D1',
            '#FFA07A',
            '#98D8C8',
            '#6C5CE7',
            '#A29BFE',
            '#FF7675',
        ];

        let hash = 0;
        for (let i = 0; i < name.length; i += 1) {
            hash = name.charCodeAt(i) + ((hash << 5) - hash);
        }

        return colors[Math.abs(hash) % colors.length];
    };

    return (
        <Avatar
            sx={{
                bgcolor: getAvatarColor(name),
                width: 40,
                height: 40,
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                    transform: 'scale(1.1)',
                },
            }}
        >
            {getInitial(name)}
        </Avatar>
    );
}

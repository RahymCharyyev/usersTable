export interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
    page: number;
}

export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (newPage: number) => void;
}

export interface UserModalProps {
    user: {
        id: number;
        avatar: string;
        first_name: string;
        last_name: string;
        email: string;
    };
    onClose: () => void;
}
export type TypeUser = {
    id?: number;
    username: string;
    email: string;
    password?: string;
    created_at?: string;
};

export type LoginTypeUser = {
    email: string;
    password?: string;
};
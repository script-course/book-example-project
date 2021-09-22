import {Module} from 'vuex';
import {Book} from './models/book';
import {User} from './models/user';

interface AccountState {
    user?: User;
}

interface BookState {
    all: Book[];
}

interface UserState {
    all: User[];
}

interface AuthState {
    isLoggedIn: boolean;
}

interface RootState {
    account: AccountState;
    books: BookState;
    users: UserState;
    auth: AuthState;
}

export interface AccountModule extends Module<AccountState, RootState> {}

export interface BookModule extends Module<BookState, RootState> {}

export interface UserModule extends Module<UserState, RootState> {}

export interface AuthModule extends Module<AuthState, RootState> {}

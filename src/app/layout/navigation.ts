import { Injectable } from "@angular/core";
import { environment } from '../../environments/environment';

// export interface Navigation extends NavigationItem {
//     children?: NavigationItem[];
// }

const NavigationItems = [
    {
        id: 'home',
        name: 'Dashboard',
        hide: false,
        role: [environment.admin, environment.author],
        url: '/dashboard/home',
    },
    {
        id: 'authors',
        name: 'Authors',
        hide: false,
        role: [environment.admin],
        url: '/dashboard/authors',
    },
    {
        id: 'author-books',
        name: 'Author Books',
        hide: true,
        role: [environment.admin],
        url: '/dashboard/author-book',
    },
    {
        id: 'books',
        name: 'Books',
        hide: false,
        role: [environment.author],
        url: '/dashboard/author/books',
    }
];

@Injectable()
export class NavigationItem {
    public get() {
        return NavigationItems;
    }
}
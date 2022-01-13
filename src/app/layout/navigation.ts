import { Injectable } from "@angular/core";
import { environment } from '../../environments/environment';

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
        id: 'add-books',
        name: 'Add Books',
        hide: false,
        role: [environment.author],
        url: '/dashboard/add-books',
    },
    {
        id: 'author-books',
        name: 'Books',
        hide: false,
        role: [environment.author],
        url: '/dashboard/author-books',
    }
];

@Injectable()
export class NavigationItem {
    public get() {
        return NavigationItems;
    }
}
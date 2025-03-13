import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "admin",
        pathMatch: "full"
    },
    {
        path: "admin",
        component: AdminComponent
    },
    {
        path: "products",
        component: ProductsComponent
    },
    {
        path: "users",
        component: UsersComponent
    },
    {
        path: "**",
        component: NotFoundComponent
    }
];

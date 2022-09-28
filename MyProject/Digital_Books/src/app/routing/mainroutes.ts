import { HomeComponent } from "../home/home.component";
import { LoginComponent } from "../login/login.component";
import { SignUpComponent } from "../utilites/grid-ui/sign-up/sign-up.component";
import { PaymentComponent } from "../payment/payment.component";


export const Mainroutes = [
    { path: '', component: HomeComponent },
    { path:'login',component:LoginComponent},
    { path:'Payment',component:PaymentComponent},
    { path:'signup',component:SignUpComponent},
    { path: 'createbook', loadChildren: () => import('../createbook/createbook.module').then(m => m.CreatebookModule) },
    { path: 'searchbook', loadChildren: () => import('../searchbook/searchbook.module').then(m => m.SearchBookModule) },
    { path: 'home', component: HomeComponent },
];
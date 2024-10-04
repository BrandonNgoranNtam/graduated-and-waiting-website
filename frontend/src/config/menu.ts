import { Icons } from "@/components/icons"

interface NavItem {
    title: string
    to?: string
    href?: string
    disabled?: boolean
    external?: boolean
    icon?: keyof typeof Icons
    label?: string
}

interface NavItemWithChildren extends NavItem {
    items?: NavItemWithChildren[]
}

export const mainMenu: NavItemWithChildren[] = [
    {
        title: 'Dashboard',
        to: '',
    },
    // {
    //     title: 'Dropdown',
    //     items: [
    //         {
    //             title: 'Sample',
    //             to: '/sample',
    //         },
    //         {
    //             title: 'Sample Dua',
    //             to: '/#',
    //         },
    //     ]
    // },
    {
        title: 'My Portfolio',
        to: 'https://brandonngoranntam-portfolio.vercel.app/',
    },
]

export const sideMenu: NavItemWithChildren[] = []

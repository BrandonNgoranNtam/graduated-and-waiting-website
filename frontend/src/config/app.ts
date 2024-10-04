interface AppConfig {
    name: string,
    github: {
        title: string,
        url: string
    },
    author: {
        name: string,
        url: string
    },
}

export const appConfig: AppConfig = {
    name: "Graduated And Still Waiting",
    github: {
        title: "graduated-and-waiting-website",
        url: "https://github.com/BrandonNgoranNtam/graduated-and-waiting-website",
    },
    author: {
        name: "Brandon Ngoran Ntam",
        url: "https://github.com/BrandonNgoranNtam",
    }
}
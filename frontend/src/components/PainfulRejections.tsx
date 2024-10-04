import React from 'react'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
import { Badge } from './ui/badge';

const data = [
    {
        name: 'Constructor.io',
        logo: '../../public/assets/constructor_io_logo.jfif',
        website: 'https://constructor.io',
        job: 'Javascript Engineer',
        processTime: '18 days',
        rejectionReason: 'Rejected after the code pairing session - No feedback given',
        painRating: 100,
    },
    {
        name: 'The Athletic',
        logo: '../../public/assets/the_athletic_media_company_logo.jfif',
        website: 'https://theathletic.com',
        job: 'Associate Software Engineer',
        processTime: '1 month and 1/2',
        rejectionReason: 'Prefered the other finalist',
        painRating: 9,
    },
    {
        name: 'CloudTalk',
        logo: '../../public/assets/cloudtalkio_logo.jfif',
        website: 'https://cloudtalk.io',
        job: 'NodeJS Engineer',
        processTime: '3 weeks',
        rejectionReason: 'Ghosted after multiple followups',
        painRating: 8,
    },
    {
        name: 'saas.group',
        logo: '../../public/assets/saas_group_logo.jfif',
        website: 'https://saas.group',
        job: 'Junior Full-Stack Developer',
        processTime: '3 weeks',
        rejectionReason: 'Ghosted after multiple followups - Rejected for lack of expericence',
        painRating: 8,
    },
    {
        name: 'SignOnSite',
        logo: '../../public/assets/signonsite_logo.jfif',
        website: 'https://signonsite.com.au',
        job: 'Junior Software Engineer',
        processTime: '3 months',
        rejectionReason: 'After phone screening, the recruiter decided that other candidates were more qualified',
        painRating: 7,
    },
];

const PainfulRejections = () => {
    return (
        <Card className="sm:col-span-1 lg:col-span-1 xl:col-span-2">
            <CardHeader>
                <CardTitle>Wall Of Pain</CardTitle>
                <CardDescription>
                    My Most Painful Rejections
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-8">
                    {data.map((item) => (
                        <div className="flex items-center" key={item.name}>
                            <a href={item.website} target="_blank" rel="noopener noreferrer">
                                <HoverCard>
                                    <HoverCardTrigger>
                                        <div className="flex items-center cursor-pointer">
                                            <Avatar className="h-9 w-9">
                                                <AvatarImage src={item.logo} alt={item.name} />
                                                <AvatarFallback>{item.name[0]}</AvatarFallback>
                                            </Avatar>
                                            <div className="ml-4 space-y-1">
                                                <p className="text-sm font-medium leading-none">{item.name}</p>
                                                <p className="text-sm text-muted-foreground">{item.job}</p>
                                            </div>
                                        </div>
                                    </HoverCardTrigger>
                                    <HoverCardContent className="p-4">
                                        <p className="text-sm"><strong>Interview Duration:</strong> {item.processTime}</p>
                                        <p className="text-sm"><strong>Rejection Reason:</strong> {item.rejectionReason}</p>
                                    </HoverCardContent>
                                </HoverCard>
                            </a>
                            <div className="ml-auto font-medium">
                                <Badge variant="destructive">PAIN - {item.painRating}/10</Badge>

                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}

export default PainfulRejections;



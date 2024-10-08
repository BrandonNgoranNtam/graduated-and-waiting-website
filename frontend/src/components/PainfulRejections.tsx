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
        logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQFAqrIMIFeYKA/company-logo_200_200/company-logo_200_200/0/1718379588135/constructor_io_logo?e=1736380800&v=beta&t=pFX_plVOMJsUr4-_q1MqkB7hejXbhcL4iq88tDD8ugU',
        website: 'https://constructor.io',
        job: 'Javascript Engineer',
        processTime: '18 days',
        rejectionReason: 'Rejected after the code pairing session - No feedback given',
        painRating: 100,
    },
    {
        name: 'The Athletic',
        logo: 'https://media.licdn.com/dms/image/v2/C560BAQH7W7Upn6yn3A/company-logo_200_200/company-logo_200_200/0/1630650484669/the_athletic_media_company_logo?e=1736380800&v=beta&t=HJ2vfeAFHEGKTEkoukpP1Lj_bAK25Ok4ss98LEVguZU',
        website: 'https://theathletic.com',
        job: 'Associate Software Engineer',
        processTime: '1 month and 1/2',
        rejectionReason: 'Prefered the other finalist',
        painRating: 9,
    },
    {
        name: 'CloudTalk',
        logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQF7Z4E3ekuCTg/company-logo_200_200/company-logo_200_200/0/1681379337435/cloudtalkio_logo?e=1736380800&v=beta&t=fGbyx48wO9iCc3iMNjMoXX8pLIawWxJFtlKcxP3eXHQ',
        website: 'https://cloudtalk.io',
        job: 'NodeJS Engineer',
        processTime: '3 weeks',
        rejectionReason: 'Ghosted after multiple followups',
        painRating: 8,
    },
    {
        name: 'saas.group',
        logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQE5W79bOfHl7Q/company-logo_200_200/company-logo_200_200/0/1636062410006/saas_group_logo?e=1736380800&v=beta&t=7HSC9x9oOzthqQU0767WGGNjtmQmCzKqQ8lVU8B5V0I',
        website: 'https://saas.group',
        job: 'Junior Full-Stack Developer',
        processTime: '3 weeks',
        rejectionReason: 'Ghosted after multiple followups - Rejected for lack of expericence',
        painRating: 8,
    },
    {
        name: 'SignOnSite',
        logo: 'https://media.licdn.com/dms/image/v2/D560BAQFyLo8N98NCqQ/company-logo_200_200/company-logo_200_200/0/1710706051623/signonsite_logo?e=1736380800&v=beta&t=2HllwDczccS9RuRBTEK6ekXFVLtfieHKBOplCQGPiMY',
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



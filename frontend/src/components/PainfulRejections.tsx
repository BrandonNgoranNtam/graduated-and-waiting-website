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
        processTime: '3 weeks',
        rejectionReason: 'Not a perfect match for the role',
    },
    {
        name: 'The Athletic',
        logo: '../../public/assets/the_athletic_media_company_logo.jfif',
        website: 'https://theathletic.com',
        job: 'Associate Software Engineer',
        processTime: '2 weeks',
        rejectionReason: 'Candidate pool was highly competitive',
    },
    {
        name: 'SignOnSite',
        logo: '../../public/assets/signonsite_logo.jfif',
        website: 'https://signonsite.com.au',
        job: 'Junior Software Engineer',
        processTime: '1 month',
        rejectionReason: 'Lacked specific experience in certain areas',
    },
    {
        name: 'CloudTalk',
        logo: '../../public/assets/cloudtalkio_logo.jfif',
        website: 'https://cloudtalk.io',
        job: 'NodeJS Engineer',
        processTime: '1 week',
        rejectionReason: 'Position was filled internally',
    },
    {
        name: 'saas.group',
        logo: '../../public/assets/saas_group_logo.jfif',
        website: 'https://saas.group',
        job: 'Junior Full-Stack Developer',
        processTime: '4 weeks',
        rejectionReason: 'Technical interview did not meet expectations',
    },
];

const PainfulRejections = () => {
    return (
        <Card className="col-span-3">
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
                                <Badge variant="destructive">PAIN</Badge>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}

export default PainfulRejections;


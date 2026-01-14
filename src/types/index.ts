export interface NavLink {
    id: string;
    title: string;
}

export interface Service {
    title: string;
    icon: string | any;
}

export interface Technology {
    name: string;
    icon: string | any;
}

export interface Experience {
    title: string;
    company_name: string;
    icon: string | any;
    iconBg: string;
    date: string;
    points: string[];
}

export interface ProjectTag {
    name: string;
    color: string;
}

export interface Project {
    name: string;
    description: string;
    tags: ProjectTag[];
    image: string | any;
    source_code_link: string;
    imageClassName?: string;
}

export interface BlogTag {
    name: string;
    color: string;
}

export interface Blog {
    id: string;
    title: string;
    subtitle: string;
    author: string;
    date: string;
    tags: BlogTag[];
    image: string | any;
    content: string;
}

export interface SocialLink {
    name: string;
    url: string;
    icon: React.ReactNode;
}

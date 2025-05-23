import Card, { CardProps } from '@Components/Card';
import './style.sass';

const projects: CardProps[] = [
    {
        title: 'Portfolio',
        description: 'Meu portfolio pessoal que apresenta o meu perfil como desenvolvedor de sistemas',
        image: 'https://github.com/joao-montanari.png',
        repositoryUrl: 'https://github.com/joao-montanari/portfolio',
        siteUrl: 'https://github.com/joao-montanari/portfolio',
        technologies: [
            'React',
            'Vite',
            'Sass',
            'TypeScript'
        ],
    },
    {
        title: 'Portfolio',
        description: 'Meu portfolio pessoal que apresenta o meu perfil como desenvolvedor de sistemas',
        image: 'https://github.com/joao-montanari.png',
        repositoryUrl: 'https://github.com/joao-montanari/portfolio',
        siteUrl: 'https://github.com/joao-montanari/portfolio',
        technologies: [
            'React',
            'Vite',
            'Sass',
            'TypeScript'
        ],
    },
    {
        title: 'Portfolio',
        description: 'Meu portfolio pessoal que apresenta o meu perfil como desenvolvedor de sistemas',
        image: 'https://github.com/joao-montanari.png',
        repositoryUrl: 'https://github.com/joao-montanari/portfolio',
        siteUrl: 'https://github.com/joao-montanari/portfolio',
        technologies: [
            'React',
            'Vite',
            'Sass',
            'TypeScript'
        ],
        design: 'secondary',
    },
    {
        title: 'Portfolio',
        description: 'Meu portfolio pessoal que apresenta o meu perfil como desenvolvedor de sistemas',
        image: 'https://github.com/joao-montanari.png',
        repositoryUrl: 'https://github.com/joao-montanari/portfolio',
        siteUrl: 'https://github.com/joao-montanari/portfolio',
        technologies: [
            'React',
            'Vite',
            'Sass',
            'TypeScript'
        ],
        design: 'secondary',
    },
    {
        title: 'Portfolio',
        description: 'Meu portfolio pessoal que apresenta o meu perfil como desenvolvedor de sistemas',
        image: 'https://github.com/joao-montanari.png',
        repositoryUrl: 'https://github.com/joao-montanari/portfolio',
        siteUrl: 'https://github.com/joao-montanari/portfolio',
        technologies: [
            'React',
            'Vite',
            'Sass',
            'TypeScript'
        ],
        design: 'secondary',
    },
]

const ProjectsPage = () => {
    return (
        <div className='projects-page-container'>
            <h1>Projects</h1>
            <div className='projects-page-content'>
                {
                    projects.map((proj) => (
                        proj.design === 'primary' || proj.design === undefined && (
                            <Card
                                title={proj.title}
                                description={proj.description}
                                image={proj.image}
                                repositoryUrl={proj.repositoryUrl}
                                siteUrl={proj.siteUrl}
                                technologies={proj.technologies}
                                design={proj.design}
                                style={{ width: '100%', height: '100%' }}
                            />
                        )
                    ))
                }
            </div>
            <div className='projects-page-content-grid-3-for-1'>
                {
                    projects.map((proj) => (
                        proj.design === 'secondary' && (
                            <Card
                                title={proj.title}
                                description={proj.description}
                                image={proj.image}
                                repositoryUrl={proj.repositoryUrl}
                                siteUrl={proj.siteUrl}
                                technologies={proj.technologies}
                                design={proj.design}
                                style={{ width: '100%', height: '100%' }}
                            />
                        )
                    ))
                }
            </div>
        </div>
    )
}

export default ProjectsPage;
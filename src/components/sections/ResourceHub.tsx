'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

interface Resource {
    title: string;
    description: string;
    category: string;
    link: string;
    icon: string;
}

const resources: Resource[] = [
    {
        title: 'AI 입문자를 위한 가이드',
        description:
            'AI를 처음 시작하는 분들을 위한 기초 가이드와 실습 자료를 제공합니다.',
        category: '가이드',
        link: '#guide',
        icon: '📚',
    },
    {
        title: 'ChatGPT 프롬프트 모음',
        description:
            '다양한 상황에서 활용할 수 있는 프롬프트 템플릿을 공유합니다.',
        category: '프롬프트',
        link: '#prompts',
        icon: '💡',
    },
    {
        title: 'AI 도구 추천 리스트',
        description: '목적별로 추천하는 AI 도구들과 활용 팁을 소개합니다.',
        category: '도구',
        link: '#tools',
        icon: '🛠️',
    },
    {
        title: '실전 프로젝트 예제',
        description:
            'AI를 활용한 실제 프로젝트 예제와 상세한 구현 방법을 설명합니다.',
        category: '프로젝트',
        link: '#projects',
        icon: '🎯',
    },
    {
        title: '학습 로드맵',
        description: '단계별 학습 계획과 추천 학습 자료를 제공합니다.',
        category: '학습',
        link: '#roadmap',
        icon: '🗺️',
    },
    {
        title: '커뮤니티 리소스',
        description: '커뮤니티에서 공유되는 유용한 자료들을 모아서 제공합니다.',
        category: '커뮤니티',
        link: '#community',
        icon: '👥',
    },
];

export default function ResourceHub() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-6xl mx-auto px-4 py-12"
        >
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">무료 리소스</h2>
                <p className="text-gray-600 dark:text-gray-300">
                    AI 학습에 도움이 되는 다양한 리소스를 무료로 제공합니다
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {resources.map((resource, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <a href={resource.link}>
                            <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                                <div className="flex items-center mb-4">
                                    <span className="text-2xl mr-3">
                                        {resource.icon}
                                    </span>
                                    <h3 className="text-xl font-semibold">
                                        {resource.title}
                                    </h3>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    {resource.description}
                                </p>
                                <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                                    {resource.category}
                                </span>
                            </Card>
                        </a>
                    </motion.div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a
                    href="#resources"
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors"
                >
                    <span>모든 리소스 보기</span>
                    <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </a>
            </div>
        </motion.section>
    );
}

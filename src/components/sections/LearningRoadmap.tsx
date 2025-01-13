'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

interface RoadmapStep {
    title: string;
    description: string;
    topics: string[];
    duration: string;
    level: string;
}

const roadmapSteps: RoadmapStep[] = [
    {
        title: 'AI 기초 다지기',
        description:
            'ChatGPT와 Cursor AI를 활용한 기본적인 AI 활용법을 배웁니다.',
        topics: [
            'ChatGPT 기본 사용법',
            'Cursor AI로 코딩 시작하기',
            '프롬프트 엔지니어링 기초',
            'AI 도구 선택과 활용',
        ],
        duration: '2주',
        level: '입문',
    },
    {
        title: 'AI 실전 활용',
        description: '실제 업무와 프로젝트에 AI를 적용하는 방법을 학습합니다.',
        topics: [
            '업무 자동화 실습',
            'AI 코드 리뷰 시스템 구축',
            '콘텐츠 제작 최적화',
            'AI 프로젝트 실습',
        ],
        duration: '4주',
        level: '중급',
    },
    {
        title: 'AI 서비스 개발',
        description: 'AI 기반 서비스를 직접 기획하고 개발하는 방법을 배웁니다.',
        topics: [
            '고급 프롬프트 엔지니어링',
            'AI 서비스 아키텍처 설계',
            'AI API 활용과 통합',
            '실전 프로젝트 진행',
        ],
        duration: '8주',
        level: '고급',
    },
];

export default function LearningRoadmap() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-6xl mx-auto px-4 py-12"
        >
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">AI 학습 로드맵</h2>
                <p className="text-gray-600 dark:text-gray-300">
                    단계별로 체계적인 AI 학습을 진행합니다
                </p>
            </div>

            <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900 hidden md:block" />

                {roadmapSteps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className={`flex items-center mb-8 ${
                            index % 2 === 0
                                ? 'md:flex-row'
                                : 'md:flex-row-reverse'
                        }`}
                    >
                        <div className="hidden md:block w-1/2" />
                        <div className="w-full md:w-1/2 px-4">
                            <Card className="p-6 relative">
                                <div className="absolute top-6 left-0 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full hidden md:block" />
                                <span className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                                    {step.level} · {step.duration}
                                </span>
                                <h3 className="text-xl font-semibold mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    {step.description}
                                </p>
                                <ul className="space-y-2">
                                    {step.topics.map((topic, topicIndex) => (
                                        <li
                                            key={topicIndex}
                                            className="flex items-center text-gray-700 dark:text-gray-200"
                                        >
                                            <svg
                                                className="w-4 h-4 mr-2 text-green-500"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            {topic}
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a
                    href="#curriculum"
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors"
                >
                    <span>커리큘럼 자세히 보기</span>
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

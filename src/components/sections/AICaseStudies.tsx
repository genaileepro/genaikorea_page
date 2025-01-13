'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card } from '@/components/ui/card';

interface CaseStudy {
    title: string;
    problem: string;
    solution: string;
    result: string;
    tools: string[];
}

const caseStudies: CaseStudy[] = [
    {
        title: 'AI로 코드 리뷰 시간 단축하기',
        problem: '매일 2시간 이상 소요되던 코드 리뷰',
        solution: 'Cursor AI를 활용한 자동 코드 리뷰 시스템 구축',
        result: '코드 리뷰 시간 70% 단축, 품질은 유지',
        tools: ['Cursor AI', 'GitHub', 'ChatGPT'],
    },
    {
        title: '블로그 글쓰기 최적화',
        problem: '콘텐츠 제작에 많은 시간 소요',
        solution: 'ChatGPT를 활용한 콘텐츠 구조화 및 초안 작성',
        result: '글쓰기 시간 50% 단축, 더 나은 구조화',
        tools: ['ChatGPT', 'Notion AI'],
    },
    {
        title: '강의 자료 제작 효율화',
        problem: '강의 자료 제작의 반복적인 작업',
        solution: 'AI 도구를 활용한 자료 제작 자동화',
        result: '제작 시간 60% 단축, 일관된 품질 유지',
        tools: ['Midjourney', 'ChatGPT', 'Cursor AI'],
    },
];

export default function AICaseStudies() {
    const [activeCase, setActiveCase] = useState<number>(0);

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-6xl mx-auto px-4 py-12"
        >
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                    AI로 이런 것들을 해결했어요
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                    실제 문제를 AI로 해결한 사례들을 공유합니다
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {caseStudies.map((study, index) => (
                    <Card
                        key={index}
                        className={`p-6 cursor-pointer transition-all ${
                            activeCase === index
                                ? 'border-blue-500 dark:border-blue-400 shadow-lg'
                                : 'hover:border-gray-300 dark:hover:border-gray-600'
                        }`}
                        onClick={() => setActiveCase(index)}
                    >
                        <h3 className="text-xl font-semibold mb-4">
                            {study.title}
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    문제 상황
                                </h4>
                                <p className="mt-1">{study.problem}</p>
                            </div>
                            <div>
                                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    해결 방법
                                </h4>
                                <p className="mt-1">{study.solution}</p>
                            </div>
                            <div>
                                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    결과
                                </h4>
                                <p className="mt-1 text-green-600 dark:text-green-400">
                                    {study.result}
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {study.tools.map((tool) => (
                                    <span
                                        key={tool}
                                        className="px-2 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="text-center mt-8">
                <a
                    href="#contact"
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors"
                >
                    <span>AI 활용 상담받기</span>
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
